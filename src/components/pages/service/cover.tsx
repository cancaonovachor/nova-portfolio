import React from 'react';
import { Box, Grid, GridItem, Text, Image, Flex } from '@chakra-ui/react';

type Props = {
  className?: string;
};

export const Cover = (props: Props) => {
  return (
    <>
      <Flex w="480px" h="688px" bg="white" rounded="md" shadow="lg">
        <Grid templateColumns="repeat(5, 1fr)" h="100%">
          <GridItem colSpan={1}>
            <Box h="100px"></Box>
            <Box w="96px" h="180px" bg="teams.100" p={4}></Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box position="relative" h="100%">
              <Box h="100px"></Box>
              <Box h="180px" ml="10px">
                <Text variant="subTitle">
                  本間裕大、福留直宙、横山康平、下薗大樹
                </Text>
                <Box h="24px" />
                <Text variant="subTitle">システム開発</Text>
                <Text variant="coverTitle">「ファーム鳥取」</Text>
                <Text variant="coverTitle">ECサイト制作</Text>
              </Box>
              <Box h="20px" />
              <Image
                w="250px"
                objectFit="cover"
                src="images/farmtottori.png"
                alt="farm tottori"
              />
              <Box position="absolute" bottom="5">
                <Text fontStyle="italic">edited CancaoNova</Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box w="76px" h="100%" bg="teams.100" p={4}></Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};
