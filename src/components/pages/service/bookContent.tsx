/* eslint-disable prettier/prettier */
import React from 'react';
import { forwardRef, Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { ImageResponse } from '../../../types/imageResponse';

type ContentDetail = {
  content: string;
  image: ImageResponse;
};

type Props = {
  className?: string;
  pageNum: number;
  contents: ContentDetail[];
};

export const BookContent: React.FC<Props> = forwardRef((props, ref) => {
  const Contents: JSX.Element[] = [];
  props.contents.forEach((c) => {
    Contents.push(
      <Box className="page-text">
        <Image
          w={{ base: '200px', md: '350px', lg: '450px', xl: '400px' }}
          h={{ base: '200px', md: '220px', lg: '250px', xl: '250px' }}
          objectFit="cover"
          src={c.image.url}
        />
        {c.content}
      </Box>,
    );
  });

  return (
    <Box
      className="page"
      ref={ref}
      boxShadow={'inset 7px 0 30px -7px rgb(0 0 0 / 40%)'}
    >
      <Box className="page-content" p="20px">
        <h2 className="page-header">{props.pageNum}</h2>
        {Contents}
      </Box>
    </Box>
  );
});
