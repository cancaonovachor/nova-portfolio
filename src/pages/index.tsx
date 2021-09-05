import React from 'react';
import useAspidaSWR from '@aspida/swr';
import { Index } from '../components/pages/index';
import { client } from '../utils/api';

export const Container: React.FC = () => {
  const { data, error } = useAspidaSWR(client.v1.service);
  return <Index serviceList={data} error={error} />;
};

export default Container;
