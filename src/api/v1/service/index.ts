import { GetListContentsQuery } from '../../../types/api';
import { ServiceListResponse } from '../../../types/service';

export type Methods = {
  get: {
    query?: GetListContentsQuery;
    resBody: ServiceListResponse;
  };
};
