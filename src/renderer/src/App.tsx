import React from 'react';
import { Content, Footer, Header, Layout, LeftAside } from './pages';

function App(): React.JSX.Element {
    return (
        <Layout
            {...{
                Header,
                Content,
                LeftAside,
                Footer,
            }}
        />
    );
}

export default App;
