import type React from 'react';
import { Slate_Editor } from '@/lib/slate';
import type { CustomEditor, CustomText } from '@/types';

const HotKeyMap = [
  {
    key: 'b',
    format: 'bold',
  },
  {
    key: 'i',
    format: 'italic',
  },
  {
    key: 'h',
    format: 'highlight',
  },
  {
    key: 'u',
    format: 'underline',
  },
];

function isMarkActive(editor: CustomEditor, format: keyof Omit<CustomText, 'text'>) {
  const marks = Slate_Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

function toggleMark(editor: CustomEditor, format: keyof Omit<CustomText, 'text'>) {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Slate_Editor.removeMark(editor, format);
  }
  else {
    Slate_Editor.addMark(editor, format, true);
  }
}

export function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) {
  if (!event.metaKey) {
    return;
  }

  event.preventDefault();

  console.log('onKeyDown');

  const key = event.key.toLocaleLowerCase();
  const hotMap = HotKeyMap.find(item => item.key === key);

  toggleMark(editor, hotMap?.format as keyof Omit<CustomText, 'text'>);
}
