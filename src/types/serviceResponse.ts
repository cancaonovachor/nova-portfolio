import { ContentResponse, ListContentsResponse } from './api';
import { ImageResponse } from './imageResponse';
import { MemberResponse } from './memberResponse';
import { TeamResponse } from './team';

export type ServiceListResponse = ListContentsResponse<ServiceResponse>;

export type ServiceResponse = ContentResponse<{
  title?: string;
  subtitle?: string;
  body?: string;
  eye_catch: ImageResponse;
  image1?: ImageResponse;
  content1?: string;
  image2?: ImageResponse;
  content2?: string;
  image3?: ImageResponse;
  content3?: string;
  image4?: ImageResponse;
  content4?: string;
  image5?: ImageResponse;
  content5?: string;
  image6?: ImageResponse;
  content6?: string;
  youtube_url?: string;
  team?: TeamResponse[];
  member?: MemberResponse[];
}>;
