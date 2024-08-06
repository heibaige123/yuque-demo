
export function onDOMBeforeInput(event: InputEvent) {
  const targetEl = event?.target as HTMLElement;

  // 如果是代码块编辑器，则不处理
  if (
    targetEl
    && targetEl.getAttribute('contenteditable')
    && targetEl.getAttribute('data-code-editor')
  ) {
    return true;
  }

  return '';
}
