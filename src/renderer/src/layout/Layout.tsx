import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';
import type { MenuConfigItem } from '../config';
import { Aside } from './Aside';
import { Content } from './Content';
import { Header } from './Header';

export const Layout: Component<{
  selectId: () => number;
  setSelectId: (id: number) => void;
  menuConfig: MenuConfigItem[];
}> = (props) => {
  /**
   * @returns {MenuConfigItem} 选中的菜单项
   */
  const selectedMenu = () => {
    return props.menuConfig.find(item => item.id === props.selectId()) || props.menuConfig[0];
  };

  return (
    <>
      <Header tagArr={selectedMenu().tagArr} />
      <div class="w-full h-full flex">
        <Aside
          initialMenuConfig={props.menuConfig}
          setSelectId={props.setSelectId}
          selectId={props.selectId}
        />
        <Content component={selectedMenu().component} />
      </div>
    </>
  );
};
