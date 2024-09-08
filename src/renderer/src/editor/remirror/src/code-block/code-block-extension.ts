import { ApplySchemaAttributes, NodeSpecOverride, NodeExtensionSpec } from '@remirror/core';
import { CodeBlockExtension } from '@remirror/extension-code-block';
import { codeBlockToDOM } from './code-block-utils';

export class HuoCodeBlockExtension extends CodeBlockExtension {
    createNodeSpec(extra: ApplySchemaAttributes, override: NodeSpecOverride): NodeExtensionSpec {
        const result = super.createNodeSpec(extra, override);

        return {
            ...result,
            toDOM: (node) => {
                return codeBlockToDOM(node, extra);
            },
        };
    }
}
