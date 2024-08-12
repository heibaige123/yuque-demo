import type { RenderElementProps } from 'slate-react';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@huo-note/shadcn-ui';
import { codeToHtml } from 'shiki';
import { useState } from 'react';
import { languages } from './languages';

function CodeLanguageSelect(): React.JSX.Element {
	return (
		<Select>
			<SelectTrigger className="
				w-[180px] py-0 h-7 w-35 border-none rounded-[3px]
				shadow-none
				absolute right-[1.8rem]
			"
			>
				<SelectValue placeholder="JavaScript" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{languages.map(language => (
						<SelectItem
							key={language.text}
							value={language.text}
						>
							{language.text}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export function CodeBlockEditable({
	attributes,
	children,
}: RenderElementProps): React.JSX.Element {
	const [code, setCode] = useState('');

	async function onChange(e: React.ChangeEvent<HTMLDivElement>) {
		const code = e.target.textContent || '';
		console.log(e.target.textContent);

		const html = await codeToHtml(code, {
			lang: 'javascript',
			theme: 'slack-dark',
		});

		console.log(html);
		setCode(html);
	}

	return (
		<div
			{...attributes}
			className="bg-gray-800 text-white rounded-md p-1"
			contentEditable={false}
		>
			<div>
				<CodeLanguageSelect />
				<div
					contentEditable
					suppressContentEditableWarning
					data-code-editor
					className="outline-none p-3"
					onInput={onChange}
				>
					function aaaa()
					{}
				</div>
			</div>

			<div
				className="my-4"
				dangerouslySetInnerHTML={{ __html: code }}
			>
			</div>
			<div className="hidden">{children}</div>
		</div>
	);
};
