import { GetContentQuery } from '../../../../types/api';
import { ServiceResponse } from '../../../../types/serviceResponse';

export type Methods = {
  get: {
    query?: GetContentQuery;
    resBody: ServiceResponse;
  };
};
