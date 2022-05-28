export const LogsQuery = /* GraphQL */ `
  query GetClientData($input: ID) {
    getClientData(input: $input) {
      logs {
        clientId
        timestamp
        src
        srcId
        info
      }
    }
  }
`;

export type ILogsResponse = {
  getClientData?: {
    logs?: Array<{
      __typename: "Log";
      clientId?: string | null;
      timestamp?: string | null;
      src?: string | null;
      srcId?: string | null;
      info?: string | null;
    } | null> | null;
  } | null;
};
