import type { Slate_BaseEditor } from '@/lib/slate';
import type { SlateReact_ReactEditor } from '@/lib/slate-react';

export type SlateEditor = Slate_BaseEditor & SlateReact_ReactEditor;
