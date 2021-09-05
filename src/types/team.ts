import { ContentResponse, ListContentsResponse } from './api';
import { MemberResponse } from './memberResponse';

export type ServiceListResponse = ListContentsResponse<TeamResponse>;

export type TeamResponse = ContentResponse<{
  name?: string;
  name_for_outside?: string;
  about?: string;
  member?: MemberResponse;
}>;
