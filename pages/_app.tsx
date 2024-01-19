import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from '../lib/themeConfig';
import Wrapper from "../components/Wrapper";

const App = ({ Component, pageProps }: AppProps) => (
    <ConfigProvider theme={theme}>
        <Wrapper>
            <Component {...pageProps} />
        </Wrapper>
    </ConfigProvider>
);

export default App;
