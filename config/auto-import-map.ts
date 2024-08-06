const slate_importKeys: Partial<keyof typeof import('slate')>[] = [
	'createEditor',
	'Editor',
	'Element',
	'Point',
	'Range',
	'Transforms',
	'Node',
	'Location',
	'Path',
];

const slateReact_imports: Partial<keyof typeof import('slate-react')>[] = [
	'Editable',
	'Slate',
	'withReact',
	'ReactEditor',
	'useFocused',
	'DefaultElement',
	'DefaultLeaf',
	'useFocused',
];

function generateImportsMap(importKeys: string[], addKey: string) {
	const importsMap: [string, string][] = [];

	importKeys.forEach((key) => {
		importsMap.push([key, `${addKey}_${key}`]);
	});

	return importsMap;
}

export const SlateImportMap = generateImportsMap(slate_importKeys, 'Slate');
export const SlateReactImportMap = generateImportsMap(slateReact_imports, 'SlateReact');
