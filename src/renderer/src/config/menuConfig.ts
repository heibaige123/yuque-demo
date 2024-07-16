import { lazy } from 'solid-js';

export interface MenuConfigItem {
  name: string;
  component: ReturnType<typeof lazy>;
  id: number;
  tagArr: Array<{
    name: string;
    href: string;
  }>;
}

/**
 * 菜单配置
 */
export const MenuConfig: MenuConfigItem[] = [
  {
    name: 'textbus',
    component: lazy(() => import('../components/textbus/Index')),
    id: 1,
    tagArr: [{
      name: 'GitHub',
      href: 'https://github.com/textbus/textbus',
    }, {
      name: '官网',
      href: 'https://textbus.io/',
    }],
  },
  {
    name: 'quill',
    component: lazy(() => import('../components/quill/Index')),
    id: 2,
    tagArr: [{
      name: 'GitHub',
      href: 'https://github.com/slab/quill',
    }, {
      name: '官网',
      href: 'https://quilljs.com/',
    }],
  },
  {
    name: 'Summernote',
    component: lazy(() => import('../components/summernote/Index')),
    id: 3,
    tagArr: [{
      name: 'GitHub',
      href: 'https://github.com/summernote/summernote/',
    }, {
      name: '官网',
      href: 'https://summernote.org/',
    }],
  },
  {
    name: 'slate',
    component: lazy(() => import('../components/slate/Index')),
    id: 4,
    tagArr: [{
      name: 'GitHub',
      href: 'https://github.com/ianstormtaylor/slate',
    }, {
      name: '官网',
      href: 'https://www.slatejs.org/examples',
    }],
  },
  {
    name: 'Editor.js',
    component: lazy(() => import('../components/editorjs/Index')),
    id: 5,
    tagArr: [{
      name: 'GitHub',
      href: 'https://github.com/editor-js',
    }, {
      name: '官网',
      href: 'https://editorjs.io/',
    }, {
      name: 'github1s',
      href: 'https://github1s.com/codex-team/editor.js',
    }],
  },
];
