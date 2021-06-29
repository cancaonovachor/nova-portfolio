import { GetContentQuery } from '../../../../types/api';
import { ServiceResponse } from '../../../../types/service';

export type Methods = {
  get: {
    query?: GetContentQuery;
    resBody: ServiceResponse;
  };
};
