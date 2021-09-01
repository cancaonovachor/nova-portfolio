import React from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Box, Spacer, Button } from '@chakra-ui/react';

type Props = {
  className?: string;
};

export const Header = (props: Props) => {
  return (
    <>
      <Flex
        as="header"
        position="fixed"
        top={0}
        width="full"
        shadow="sm"
        py={4}
        px={8}
      >
        <Box>
          <IconButton
            aria-label="back"
            color="black"
            rounded="full"
            icon={<ChevronLeftIcon />}
          />
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="blue">戻る</Button>
        </Box>
      </Flex>
    </>
  );
};
