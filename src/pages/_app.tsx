import '../styles/globals.css';
import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}
