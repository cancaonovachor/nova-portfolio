import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

type Props = {
  className?: string;
};

export const NovaLogo: React.FC<Props> = (props: Props) => {
  return (
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
  );
};
