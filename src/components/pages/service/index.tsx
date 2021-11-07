/* eslint-disable prettier/prettier */
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Layout } from '../../../components/common/layout/layout';
import { ServiceResponse } from '../../../types/serviceResponse';

type Props = {
  className?: string;
  service?: ServiceResponse;
};

export const Index: React.FC<Props> = (props: Props) => {
  console.log('service is ', props.service);
  const s = props.service;
  return (
    <Layout>
      <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
        <Text>{s?.id}</Text>
        <Text>{s?.title}</Text>
        <Text>{s?.subtitle}</Text>
      </Flex>
    </Layout>
  );
};
