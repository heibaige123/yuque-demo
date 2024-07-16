import { type Component, createSignal } from 'solid-js';

interface Props {
  component: Component;
}

export const Content: Component<Props> = (props) => {
  const component = () => <props.component />;

  return (
    <div class=":uno: flex-1 h-full huo-module-bg py-8 px-12">
      {component()}
    </div>
  );
};
