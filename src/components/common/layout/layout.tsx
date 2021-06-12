import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { Header } from '../header/header';

export const Layout: React.FC = (props) => (
  <Flex bg="white.100" w="100vw" h="100vh">
    <Header />
    <Box mt={'6rem'} mx="auto">
      {props.children}
    </Box>
  </Flex>

  // {/* <Footer /> */}
);
