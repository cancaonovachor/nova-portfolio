import React from 'react';
import Link from 'next/link';
import { Box, Grid, GridItem, Text, Image, Flex } from '@chakra-ui/react';
import * as CSS from 'csstype';
import { coverResponsive } from '../../../enums/coverResponsive';
import { ServiceResponse } from '../../../types/serviceResponse';

type Props = {
  className?: string;
  content: ServiceResponse;
  size: coverResponsive;
};

type CoverSize = {
  overallw: CSS.Property.Width;
  overallh: CSS.Property.Height;
  topMargine: CSS.Property.Margin;
  topBoxw: CSS.Property.Width;
  topBoxh: CSS.Property.Height;
  leftBarw: CSS.Property.Width;
  leftBarh: CSS.Property.Height;
  textMargin: CSS.Property.Margin;
  imageMargin: CSS.Property.Margin;
  imagew: CSS.Property.Width;
  rightBarw: CSS.Property.Width;
  rightBarml: CSS.Property.Height;
};

export const Cover: React.FC<Props> = (props: Props) => {
  let bgColor: string;
  let memberNames = '';
  const content = props.content;
  const size = sizeDetect(props.size);

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

  const link = '/service/' + content?.id;

  return (
    <>
      <Flex
        w={size?.overallw}
        h={size?.overallh}
        bg="white"
        rounded="md"
        boxShadow="0 5px 4px #222"
      >
        <Grid templateColumns="repeat(5, 1fr)" h="100%">
          <GridItem colSpan={1}>
            <Box h={size?.topMargine}></Box>
            <Box w={size?.leftBarw} h={size?.leftBarh} bg={bgColor} p={4}></Box>
          </GridItem>
          <GridItem colSpan={3}>
            <Box position="relative" h="100%">
              <Box h={size?.topMargine}></Box>
              <Box h={size?.leftBarh} ml="10px">
                <Text variant="subTitle">{memberNames}</Text>
                <Box h={size?.textMargin} />
                <Text variant="subTitle">
                  {content?.team[0].name_for_outside}
                </Text>
                <Link href={link}>
                  <Text variant="coverTitle">{content?.title}</Text>
                </Link>
                <Link href={link}>
                  <Text variant="coverTitle">{content?.subtitle}</Text>
                </Link>
              </Box>
              <Box h={size?.imageMargin} />
              <Image
                w={size?.imagew}
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
              w={size?.rightBarw}
              h="100%"
              ml={size?.rightBarml}
              bg={bgColor}
              p={4}
            ></Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

function sizeDetect(size: coverResponsive): CoverSize {
  if (size == 'base') {
    return {
      overallw: '300px',
      overallh: '400px',
      topMargine: '70px',
      topBoxw: '60px',
      topBoxh: '120px',
      leftBarw: '70px',
      leftBarh: '120px',
      textMargin: '15px',
      imageMargin: '5px',
      imagew: '110px',
      rightBarw: '45px',
      rightBarml: '6px',
    };
  }
  if (size == 'md') {
    return {
      overallw: '400px',
      overallh: '600px',
      topMargine: '80px',
      topBoxw: '75px',
      topBoxh: '140px',
      leftBarw: '75px',
      leftBarh: '140px',
      textMargin: '18px',
      imageMargin: '20px',
      imagew: '220px',
      rightBarw: '58px',
      rightBarml: '20px',
    };
  }
  if (size == 'lg') {
    return {
      overallw: '480px',
      overallh: '688px',
      topMargine: '100px',
      topBoxw: '96px',
      topBoxh: '180px',
      leftBarw: '96px',
      leftBarh: '180px',
      textMargin: '24px',
      imageMargin: '20px',
      imagew: '250px',
      rightBarw: '76px',
      rightBarml: '0px',
    };
  }
  if (size == 'xl') {
    return {
      overallw: '560px',
      overallh: '850px',
      topMargine: '150px',
      topBoxw: '110px',
      topBoxh: '200px',
      leftBarw: '110px',
      leftBarh: '200px',
      textMargin: '24px',
      imageMargin: '20px',
      imagew: '300px',
      rightBarw: '85px',
      rightBarml: '10px',
    };
  }
}
