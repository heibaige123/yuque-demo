import type { CustomEditor } from '@/types';

export function withCodeBlockVoid(editor: CustomEditor) {
  // const { isVoid } = editor;

  // editor.isVoid = (element) => {
  //   return (
  //     Slate_Element.isElement(element)
  //       && element.type === 'code_block'
  //       ? true
  //       : isVoid(element)
  //   );
  // };

  // const nativeElementReadOnly = editor.isElementReadOnly;

  // editor.isElementReadOnly = (element) => {
  //   return (
  //     Slate_Element.isElement(element)
  //     && element.type === 'code_block'
  //       ? true
  //       : nativeElementReadOnly(element)
  //   );
  // };

  return editor;
}
