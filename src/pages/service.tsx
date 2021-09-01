import React from 'react';
import { AttachmentIcon, EditIcon, AddIcon, ViewIcon } from '@chakra-ui/icons';
import { Flex, Box, Heading, IconButton, Skeleton } from '@chakra-ui/react';
import { Layout } from '../components/common/layout/layout';

type Props = {
  className?: string;
};

export const Service: React.FC<Props> = (props: Props) => {
  const ParagraphSkeleton = () => <Skeleton mb={4} h={'1rem'}></Skeleton>;
  return (
    <Layout>
      <Heading as="h1" size="lg" fontWeight="bold">
        CancaoNova Serviceページ
      </Heading>
      <Flex mt={8}>
        <Box w={'50rem'} bg="white" rounded="md" p={4} shadow="lg">
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
        </Box>
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
          <Box mt={3}>
            <IconButton
              aria-label="view"
              shadow="lg"
              bg="white"
              color="gray.400"
              rounded="full"
              icon={<AttachmentIcon />}
            />
          </Box>
          <Box mt={3}>
            <IconButton
              aria-label="view"
              shadow="lg"
              bg="white"
              color="gray.400"
              rounded="full"
              icon={<AddIcon />}
            />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};
