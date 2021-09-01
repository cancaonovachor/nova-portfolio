import React from 'react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Flex, Box, IconButton } from '@chakra-ui/react';
import { Layout } from '../components/common/layout/layout';
import { Cover } from '../components/pages/service/cover';

type Props = {
  className?: string;
};

export const Index: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <Flex mt={6}>
        <Cover />
        <Box ml={6}>
          <Box bg="white" rounded="full" p={1} shadow="lg">
            <IconButton
              aria-label="edit"
              bg="gray.300"
              color="white"
              rounded="full"
              mr={1}
              icon={<EditIcon />}
            />
            <IconButton
              aria-label="view"
              bg="white"
              color="gray.400"
              rounded="full"
              icon={<ViewIcon />}
            />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};
export default Index;
