import { useGetData } from "../../shared/useGetData";
import { ILogsResponse, LogsQuery } from "./logs.query";

export function Logs() {
  const dataState = useGetData<ILogsResponse>(LogsQuery);
  // const dataState = getFakedLogs();
  return <>logs</>;
}

const getFakedLogs = () => {
  return {
    isLoading: false,
    data: {
      getClientData: {
        logs: [
          {
            timestamp: "1",
            src: "test",
            srcId: "dsfdbdf",
            info: "some longer desc",
          },
        ],
      },
    },
    error: undefined,
  };
};
