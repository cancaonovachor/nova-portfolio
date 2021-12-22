/* eslint-disable prettier/prettier */
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { ImageResponse } from '../../../types/imageResponse';
import { ServiceResponse } from '../../../types/serviceResponse';
import { Book } from './book';
import { BookContent } from './bookContent';

type Props = {
  className?: string;
  service?: ServiceResponse;
};

type PageContentDetail = {
  content1: string;
  image1: ImageResponse;
  content2: string;
  image2: ImageResponse;
};

export const Index: React.FC<Props> = (props: Props) => {
  console.log('service is ', props.service);
  const s = props.service;
  const Contents: JSX.Element[] = [];

  // 1ページ目
  if (typeof s.content1 != 'undefined') {
    if (typeof s.content2 != 'undefined') {
      Contents.push(
        <BookContent
          pageNum={1}
          contents={[
            { content: s.content1, image: s.image1 },
            { content: s.content2, image: s.image2 },
          ]}
        ></BookContent>,
      );
    } else {
      Contents.push(
        <BookContent
          pageNum={1}
          contents={[{ content: s.content1, image: s.image1 }]}
        ></BookContent>,
      );
    }
  }

  // 2ページ目
  if (typeof s.content3 != 'undefined') {
    if (typeof s.content4 != 'undefined') {
      Contents.push(
        <BookContent
          pageNum={2}
          contents={[
            { content: s.content3, image: s.image4 },
            { content: s.content4, image: s.image4 },
          ]}
        ></BookContent>,
      );
    } else {
      Contents.push(
        <BookContent
          pageNum={2}
          contents={[{ content: s.content3, image: s.image3 }]}
        ></BookContent>,
      );
    }
  }

  // 3ページ目
  if (typeof s.content5 != 'undefined') {
    if (typeof s.content6 != 'undefined') {
      Contents.push(
        <BookContent
          pageNum={3}
          contents={[
            { content: s.content5, image: s.image5 },
            { content: s.content6, image: s.image6 },
          ]}
        ></BookContent>,
      );
    } else {
      Contents.push(
        <BookContent
          pageNum={3}
          contents={[{ content: s.content5, image: s.image5 }]}
        ></BookContent>,
      );
    }
  }
  return (
    <Flex w="100vw" h="100vh">
      <Box mx="auto">
        <Box h={{ base: '20px', md: '50px' }} />
        <Book>{Contents}</Book>
      </Box>
    </Flex>
  );
};
