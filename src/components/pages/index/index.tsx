/* eslint-disable prettier/prettier */
import React from 'react';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Layout } from '../../../components/common/layout/layout';
import { coverResponsive } from '../../../enums/coverResponsive';
import { ServiceListResponse } from '../../../types/serviceResponse';
import { Cover } from './cover';

type Props = {
  className?: string;
  serviceList?: ServiceListResponse;
};

export const Index: React.FC<Props> = (props: Props) => {
  console.log('service list is ', props.serviceList);
  const covers: JSX.Element[] = [];
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
  props.serviceList?.contents.forEach((content) => {
    covers.push(
      <Flex ml={{ base: '0px', md: '50px', lg: '80px', xl: '150px' }}>
        <Cover content={content} size={size} />
      </Flex>,
    );
  });
  return (
    <Layout>
      <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        {covers}
      </Flex>
    </Layout>
  );
};
