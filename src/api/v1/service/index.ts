import { GetListContentsQuery } from '../../../types/api';
import { ServiceListResponse } from '../../../types/serviceResponse';

export type Methods = {
  get: {
    query?: GetListContentsQuery;
    resBody: ServiceListResponse;
  };
};
