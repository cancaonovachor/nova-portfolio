import React from 'react';
import { Box, Grid, GridItem, Text, Image, Flex } from '@chakra-ui/react';
import { ServiceResponse } from '../../../types/serviceResponse';

type Props = {
  className?: string;
  content: ServiceResponse;
};

export const Cover: React.FC<Props> = (props: Props) => {
  let bgColor: string;
  let memberNames = '';
  const content = props.content;

  // 表紙の色を決める
  // TODO team配列の中の一番上を取るかは検討
  if (content?.team[0].name == 'sysdev') {
    bgColor = 'teams.100';
  } else if (content?.team[0].name == 'goods') {
    bgColor = 'teams.200';
  }

  // メンバー一覧の文字列を作る
  content?.member?.forEach((member, idx, array) => {
    if (idx === array.length - 1) {
      memberNames += member?.name;
    } else {
      memberNames += member?.name + '、';
    }
  });

  return (
    <>
      <Flex
        w={{ base: '300px', md: '400px', lg: '480px', xl: '560px' }}
        h={{ base: '400px', md: '600px', lg: '688px', xl: '850px' }}
        bg="white"
        rounded="md"
        shadow="lg"
      >
        <Grid templateColumns="repeat(5, 1fr)" h="100%">
          <GridItem colSpan={1}>
            <Box
              h={{ base: '70px', md: '80px', lg: '100px', xl: '150px' }}
            ></Box>
            <Box
              w={{ base: '60px', md: '75px', lg: '96px', xl: '110px' }}
              h={{ base: '120px', md: '140px', lg: '180px', xl: '200px' }}
              bg={bgColor}
              p={4}
            ></Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box position="relative" h="100%">
              <Box
                h={{ base: '70px', md: '80px', lg: '100px', xl: '150px' }}
              ></Box>
              <Box
                h={{ base: '120px', md: '140px', lg: '180px', xl: '200px' }}
                ml="10px"
              >
                <Text variant="subTitle">{memberNames}</Text>
                <Box h={{ base: '15px', md: '18px', lg: '24px' }} />
                <Text variant="subTitle">
                  {content?.team[0].name_for_outside}
                </Text>
                <Text variant="coverTitle">{content?.title}</Text>
                <Text variant="coverTitle">{content?.subtitle}</Text>
              </Box>
              <Box h="20px" />
              <Image
                w={{ base: '200px', md: '220px', lg: '250px', xl: '300px' }}
                objectFit="cover"
                src={content?.eye_catch.url}
                alt="farm tottori"
              />
              <Box position="absolute" bottom="5">
                <Text fontStyle="italic">edited CancaoNova</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box
              w={{ base: '45px', md: '58px', lg: '76px', xl: '85px' }}
              h="100%"
              ml={{ base: '6px', md: '20px', lg: '0px', xl: '10px' }}
              bg={bgColor}
              p={4}
            ></Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};
