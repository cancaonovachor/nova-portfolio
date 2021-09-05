import { ContentResponse, ListContentsResponse } from './api';
import { ImageResponse } from './imageResponse';
import { TeamResponse } from './team';

export type ServiceListResponse = ListContentsResponse<MemberResponse>;

export type MemberResponse = ContentResponse<{
  name?: string;
  image?: ImageResponse;
  introduction?: string;
  team?: TeamResponse[];
  service: ServiceListResponse[];
}>;
