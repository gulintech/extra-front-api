import { IHeadCell } from "../../components/nTable/NTable.types";

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
    logs?: Array<ILog> | null;
  } | null;
};

export type ILog = {
  clientId?: string | null;
  timestamp?: string | null;
  src?: string | null;
  srcId?: string | null;
  info?: string | null;
};

export const LogColumns: IHeadCell<ILog>[] = [
  {
    id: "clientId",
    label: "Client",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "srcId",
    label: "Source ID",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "src",
    label: "Source caption",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "info",
    label: "Info",
    numeric: false,
    disablePadding: false,
  },
];
