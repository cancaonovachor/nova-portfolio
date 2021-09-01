import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export const Layout: React.FC = (props) => (
  <Flex
    w="100vw"
    h="100vh"
    backgroundImage={`url("images/background-library.png")`}
    backgroundColor="rgba(255,255,255,0.3)"
    backgroundBlendMode="lighten"
  >
    <Box mx="auto">{props.children}</Box>
  </Flex>

  // {/* <Footer /> */}
);
