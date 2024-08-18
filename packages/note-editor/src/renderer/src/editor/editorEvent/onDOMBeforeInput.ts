export function onDOMBeforeInput(event: InputEvent) {
    const targetEl = event?.target as HTMLElement;

    console.log('onDOMBeforeInput', targetEl);

    // 如果是代码块编辑器，则不处理
    if (
        targetEl
        && targetEl.getAttribute('data-code-editor')
    ) {
        return true;
    }

    return '';
}
