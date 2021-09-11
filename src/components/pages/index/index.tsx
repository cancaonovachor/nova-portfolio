import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { Layout } from '../../../components/common/layout/layout';
import { ServiceListResponse } from '../../../types/serviceResponse';
import { Cover } from './cover';

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
        <Flex
          w={{ base: '300px', md: '400px', lg: '480px', xl: '560px' }}
          h={{ base: '400px', md: '600px', lg: '688px', xl: '850px' }}
          rounded="md"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            w={{ base: '200px', md: '220px', lg: '250px', xl: '300px' }}
            h={{ base: '200px', md: '220px', lg: '250px', xl: '300px' }}
            objectFit="cover"
            src="images/cn-logo.png"
            alt="cn-logo"
          />
        </Flex>
        {covers}
      </Flex>
    </Layout>
  );
};
