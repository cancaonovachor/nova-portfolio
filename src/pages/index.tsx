import React from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Index } from '../components/pages/index';
import { ServiceListResponse } from '../types/serviceResponse';
import { client } from '../utils/api';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Container: NextPage<Props> = ({
  services,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Index serviceList={services} />;
};

export const getStaticProps: GetStaticProps<{ services: ServiceListResponse }> =
  async () => {
    const services = await client.v1.service.$get();

    return {
      props: {
        services,
      },
      revalidate: 1,
    };
  };

export default Container;
