import { type Component, For, createSignal } from 'solid-js';
import type { MenuConfigItem } from '../config/menuConfig';

const AsideMenuItem: Component<{
  name: string;
  agentClick: () => void;
  selectId: () => number;
  id: number;
}> = (props) => {
  const isSelected = () => props.selectId() === props.id;

  return (
    <div
      class="
        cursor-pointer select-none
        ml-1 p-1 min-h-[45px]
        huo-center rounded-s-full
        hover:bg-stone-100
        hover:underline
        hover:underline-dashed
        hover:underline-offset-4
      "
      classList={{
        'border-y border-l border-sky-100 border-solid bg-sky-50 font-bold text-sky-900': isSelected(),
      }}
      onClick={() => props.agentClick()}
    >
      <div>
        <div>
          {props.name}
        </div>
      </div>
    </div>
  );
};

export const Aside: Component<{
  initialMenuConfig: MenuConfigItem[];
  setSelectId: (id: number) => void;
  selectId: () => number;
}> = (props) => {
  const [configs] = createSignal(props.initialMenuConfig);

  function handleClick(id: number) {
    props.setSelectId(id);
  }

  return (
    <div
      class="
        w-[15rem] flex-none h-full
        huo-module-bg
        huo-border border-r
      "
    >
      <header class="h-14 huo-center huo-border border-b">
        <div class="h-[49px] line-height-none huo-center">aaaa</div>
      </header>
      <div>
        <div class="my-2">
          <For each={configs()}>
            {config => (
              <AsideMenuItem
                selectId={props.selectId}
                id={config.id}
                agentClick={() => handleClick(config.id)}
                name={config.name}
              />
            )}
          </For>
        </div>
      </div>
    </div>
  );
};
