import { type Component, createSignal } from 'solid-js';
import { Layout } from './layout/Layout';
import { DefaultSelectId, MenuConfig } from './config';

const App: Component = () => {
  const [selectId, setSelectId] = createSignal(DefaultSelectId);

  return (
    <>
      <Layout
        selectId={selectId}
        setSelectId={setSelectId}
        menuConfig={MenuConfig}
      />
    </>
  );
};

export default App;
