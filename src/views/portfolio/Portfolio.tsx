import { NTable } from "../../components/nTable/NTable";
import { useGetData } from "../../shared/useGetData";
import { IPortfolio, IPortfolioResponse, LogColumns, PortfolioQuery } from "./portfolio.entity";

export function Portfolio() {
  const dataState = useGetData<IPortfolioResponse>(PortfolioQuery);
  // const dataState = getFakedLogs();
  return (
    <NTable
      title="List of logs"
      columns={LogColumns}
      defaultOrder="desc"
      defaultOrderBy="name"
      rows={prepareRows(dataState.data?.getClientData?.portfolios ?? [])}
    />
  );
}

const prepareRows = (logs: IPortfolio[]): (IPortfolio & { _rowName: string })[] => {
  return logs.map((log) => {
    return { ...log, _rowName: Math.random().toString() };
  });
};
