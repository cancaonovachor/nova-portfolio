/* eslint-disable prettier/prettier */
import React from 'react';
import { forwardRef, useBreakpointValue } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { coverResponsive } from '../../../enums/coverResponsive';
import { ServiceResponse } from '../../../types/serviceResponse';
import { Cover } from '../index/cover';

type Props = {
  className?: string;
  content: ServiceResponse;
};

export const CoverContent: React.FC<Props> = forwardRef((props, ref) => {
  let size: coverResponsive;
  const isBase = useBreakpointValue({ base: true, md: false });
  const isMd = useBreakpointValue({ base: false, md: true, lg: false });
  const isLg = useBreakpointValue({ base: false, lg: true, xl: false });
  const isXl = useBreakpointValue({ base: false, xl: true });
  if (isBase) {
    size = 'base';
  } else if (isMd) {
    size = 'md';
  } else if (isLg) {
    size = 'lg';
  } else if (isXl) {
    size = 'xl';
  }
  return (
    <Box
      className="page page-cover"
      ref={ref}
      data-density="hard"
      backgroundColor={'#FFFFEE'}
      boxShadow={'inset 7px 0 30px -7px rgb(0 0 0 / 40%)'}
    >
      <Box className="page-content">
        <Cover content={props.content} size={size} />
      </Box>
    </Box>
  );
});
