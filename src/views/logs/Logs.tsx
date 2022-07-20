import { NTable } from "../../components/nTable/NTable";
import { useGetData } from "../../shared/useGetData";
import { ILog, ILogsResponse, LogColumns, LogsQuery } from "./logs.entity";

export function Logs() {
  // const dataState = useGetData<ILogsResponse>(LogsQuery);
  const dataState = getFakedLogs();
  return (
    <NTable
      title="List of logs"
      columns={LogColumns}
      defaultOrder="desc"
      defaultOrderBy="timestamp"
      rows={prepareRows(dataState.data?.getClientData?.logs ?? [])}
    />
  );
}

const prepareRows = (logs: ILog[]): (ILog & { _rowName: string })[] => {
  return logs.map((log) => {
    return { ...log, _rowName: Math.random().toString() };
  });
};

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
          {
            timestamp: "2",
            src: "tes 2",
            srcId: "2 dsfdbdf",
            info: "some longer desc blabla",
          },
        ],
      },
    },
    error: undefined,
  };
};
