import { type Component, For } from 'solid-js';

const Tag: Component<{
  name: string;
  href: string;
}> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      class="
        rounded-full px-3 py-1 text-sky-600 bg-sky-400/10 font-400
        hover:bg-sky-400/20
        mr-2
      "
    >
      <span class="font-600">{props.name}</span>
      <span> : </span>
      <span class="font-400">{props.href}</span>
    </a>
  );
};

export const Header: Component<{
  tagArr: {
    name: string;
    href: string;
  }[];
}> = (props) => {
  return (
    <div class="w-full leading-10 pl-10 font-medium huo-module-bg huo-border border-b">
      <For each={props.tagArr}>
        {
          tag => <Tag {...tag} />
        }
      </For>
    </div>
  );
};
