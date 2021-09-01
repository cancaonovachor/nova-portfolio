import { ContentResponse, ListContentsResponse } from './api';

export type ServiceListResponse = ListContentsResponse<ServiceResponse>;

export type Images = {
  url: string;
  height: number;
  width: number;
};

export type ServiceResponse = ContentResponse<{
  title?: string;
  body?: string;
  image1?: Images;
  image2?: Images;
  image3?: Images;
  image4?: Images;
  image5?: Images;
  image6?: Images;
  youtube_url?: string;
}>;
