import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Index } from '../../components/pages/service';
import { ServiceResponse } from '../../types/serviceResponse';
import { client } from '../../utils/api';

type PathParams = {
  id: string;
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Container: NextPage<Props> = ({
  service,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Index service={service} />;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const services = await client.v1.service.$get();
  const paths = services.contents.map((c) => ({
    params: {
      id: c.id,
    },
  }));
  return {
    paths,
    fallback: false, // 上記以外のパスでアクセスした場合は 404 ページにする
  };
};

export const getStaticProps: GetStaticProps<
  { service: ServiceResponse },
  PathParams
> = async ({ params }) => {
  const service = await client.v1.service._id(params.id).$get();

  return {
    props: {
      service,
    },
    revalidate: 1,
  };
};

export default Container;
