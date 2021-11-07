/* eslint-disable prettier/prettier */
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Layout } from '../../../components/common/layout/layout';
import { ServiceListResponse } from '../../../types/serviceResponse';
import { Cover } from './cover';
import { NovaLogo } from './novaLogo';

type Props = {
  className?: string;
  serviceList?: ServiceListResponse;
};

export const Index: React.FC<Props> = (props: Props) => {
  console.log('service list is ', props.serviceList);
  const covers: JSX.Element[] = [];
  props.serviceList?.contents.forEach((content) => {
    covers.push(
      <Flex ml={{ base: '0px', md: '50px', lg: '80px', xl: '150px' }}>
        <Cover content={content} />
      </Flex>,
    );
  });
  return (
    <Layout>
      <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        <NovaLogo />
        {covers}
      </Flex>
    </Layout>
  );
};
