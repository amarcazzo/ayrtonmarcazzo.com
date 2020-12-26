import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

import config from './config';

interface RequestOptions {
  query: RequestDocument;
  variables?: any;
  preview: boolean;
  requestHeaders?: HeadersInit;
}

const request = ({
  query,
  variables,
  preview,
}: RequestOptions): Promise<any> => {
  const endpoint = preview ? config.datoCms.preview : config.datoCms.default;

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${config.datoCms.apiKey}`,
    },
  });
  return client.request(query, variables);
};

export default request;
