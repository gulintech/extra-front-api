import { IHeadCell } from "../../components/nTable/NTable.types";

export const PortfolioQuery = /* GraphQL */ `
  query GetClientData($input: ID) {
    getClientData(input: $input) {
      portfolios {
        id
        trdPair
        name
        status
        buy
        sell
        onlyClose
        cooldown
        initialVolume
        initialVolumeEUR
        fixedVolume
        fixedAmount
        initialPrice
        positionControl
        amount
        volume
        level
        takeProfit
        priceShift
        martingale
        limit
        lastTradeMoment
        bid
        ask
      }
    }
  }
`;

export type IPortfolio = {
  __typename: "Portfolio";
  id: string;
  trdPair?: string | null;
  name?: string | null;
  status?: string | null;
  buy?: boolean | null;
  sell?: boolean | null;
  onlyClose?: boolean | null;
  cooldown?: number | null;
  initialVolume?: number | null;
  initialVolumeEUR?: number | null;
  fixedVolume?: number | null;
  fixedAmount?: number | null;
  initialPrice?: number | null;
  positionControl?: string | null;
  amount?: number | null;
  volume?: number | null;
  level?: number | null;
  takeProfit?: number | null;
  priceShift?: number | null;
  martingale?: number | null;
  limit?: number | null;
  lastTradeMoment?: number | null;
  bid?: number | null;
  ask?: number | null;
};

export type IPortfolioResponse = {
  getClientData?: {
    portfolios?: Array<IPortfolio> | null;
  } | null;
};

export const LogColumns: IHeadCell<IPortfolio>[] = [
  {
    id: "name",
    label: "Portfolio name",
    numeric: false,
    disablePadding: false,
  },
  {
    id: "trdPair",
    label: "Trade pair",
    numeric: false,
    disablePadding: false,
  },
];
