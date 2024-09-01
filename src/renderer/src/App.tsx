import React from 'react';
import { Content, Footer, Header, Layout, type LayoutProps, LeftAside } from './pages';

const slots: LayoutProps = {
    LeftAside,
    Header,
    Content,
    Footer,
};

function App(): React.JSX.Element {
    return <Layout {...slots} />;
}

export default App;
