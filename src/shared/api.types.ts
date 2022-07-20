/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateStrategyLevelInput = {
  strategyId?: string | null,
  id?: string | null,
  level?: number | null,
  takeProfit?: number | null,
  priceShift?: number | null,
  martingale?: number | null,
};

export type StrategyLevel = {
  __typename: "StrategyLevel",
  strategyId?: string | null,
  id?: string | null,
  level?: number | null,
  takeProfit?: number | null,
  priceShift?: number | null,
  martingale?: number | null,
};

export type DeleteStrategyLevelInput = {
  strategyId?: string | null,
  id?: string | null,
};

export type UpdatePortfolioInput = {
  clientId?: string | null,
  id: string,
  name?: string | null,
  trdPair?: string | null,
  exchange?: string | null,
  status?: string | null,
  buy?: boolean | null,
  sell?: boolean | null,
  onlyClose?: boolean | null,
  cooldown?: number | null,
  amount?: number | null,
  volume?: number | null,
  level?: number | null,
  takeProfit?: number | null,
  priceShift?: number | null,
  martingale?: number | null,
  limit?: number | null,
  positionControl?: string | null,
  initialVolume?: number | null,
  initialVolumeEUR?: number | null,
  fixedVolume?: number | null,
  fixedAmount?: number | null,
  lastTradeMoment?: number | null,
  bid?: number | null,
  ask?: number | null,
  initialPrice?: number | null,
  strategy?: string | null,
};

export type Portfolio = {
  __typename: "Portfolio",
  id: string,
  trdPair?: string | null,
  exchange?: Exchange | null,
  name?: string | null,
  status?: string | null,
  buy?: boolean | null,
  sell?: boolean | null,
  onlyClose?: boolean | null,
  cooldown?: number | null,
  initialVolume?: number | null,
  initialVolumeEUR?: number | null,
  fixedVolume?: number | null,
  fixedAmount?: number | null,
  initialPrice?: number | null,
  positionControl?: string | null,
  amount?: number | null,
  volume?: number | null,
  level?: number | null,
  takeProfit?: number | null,
  priceShift?: number | null,
  martingale?: number | null,
  limit?: number | null,
  lastTradeMoment?: number | null,
  orders?:  Array<Order | null > | null,
  trades?:  Array<Trade | null > | null,
  bid?: number | null,
  ask?: number | null,
  strategy?: Strategy | null,
};

export type Exchange = {
  __typename: "Exchange",
  clientId?: string | null,
  id: string,
  kind: ExchangeEnum,
  publicKey?: string | null,
  lastTransferMoment?: number | null,
  totalTransferredUSDT?: number | null,
  totalInitialMargin?: number | null,
  totalMaintMargin?: number | null,
  totalWalletBalance?: number | null,
  totalUnrealizedProfit?: number | null,
  totalMarginBalance?: number | null,
  totalPositionInitialMargin?: number | null,
  totalOpenOrderInitialMargin?: number | null,
  totalCrossWalletBalance?: number | null,
  totalCrossUnPnl?: number | null,
  availableBalance?: number | null,
  maxWithdrawAmount?: number | null,
};

export enum ExchangeEnum {
  binance_usdfut = "binance_usdfut",
  mock = "mock",
}


export type Order = {
  __typename: "Order",
  id: string,
  orderId?: string | null,
  time?: string | null,
  status?: string | null,
  dir?: string | null,
  price?: number | null,
  qty?: number | null,
  volume?: number | null,
  kind?: OrderKind | null,
  type?: string | null,
  fulfilled?: number | null,
  qtyChange?: number | null,
  linked?: string | null,
  trdPair?: string | null,
  trdAmount?: number | null,
};

export enum OrderKind {
  master = "master",
  slave = "slave",
  initial = "initial",
}


export type Trade = {
  __typename: "Trade",
  orderId: string,
  id?: string | null,
  price?: number | null,
  qty?: number | null,
  time?: number | null,
  dir?: string | null,
  trdPair?: string | null,
};

export type Strategy = {
  __typename: "Strategy",
  id?: string | null,
  levels?:  Array<StrategyLevel | null > | null,
};

export type AddClientInput = {
  status?: string | null,
  secretArn?: string | null,
};

export type AddNewOrderInput = {
  portfolioId: string,
  id: string,
  orderId?: string | null,
  dir?: string | null,
  price?: number | null,
  qty?: number | null,
  volume?: number | null,
  kind?: OrderKind | null,
  type?: string | null,
  fulfilled?: number | null,
  qtyChange?: number | null,
  linked?: string | null,
  trdPair?: string | null,
  trdAmount?: number | null,
};

export type AddNewLogInput = {
  clientId?: string | null,
  timestamp?: string | null,
  src?: string | null,
  srcId?: string | null,
  info?: string | null,
};

export type Log = {
  __typename: "Log",
  clientId?: string | null,
  timestamp?: string | null,
  src?: string | null,
  srcId?: string | null,
  info?: string | null,
};

export type UpdateOrderInput = {
  portfolioId: string,
  id: string,
  fulfilled?: number | null,
  qtyChange?: number | null,
  linked?: string | null,
  price?: number | null,
};

export type DeleteOrderInput = {
  portfolioId: string,
  id: string,
};

export type AddNewTradeInput = {
  portfolioId: string,
  id?: string | null,
  orderId: string,
  price?: number | null,
  qty?: number | null,
  time?: number | null,
  dir?: string | null,
  trdPair?: string | null,
};

export type AddOrderStateInput = {
  portfolioId: string,
  time: string,
  id: string,
  orderId?: string | null,
  dir?: string | null,
  price?: number | null,
  qty?: number | null,
  volume?: number | null,
  kind?: OrderKind | null,
  type?: string | null,
  fulfilled?: number | null,
  qtyChange?: number | null,
  linked?: string | null,
  status?: string | null,
};

export type AddExchangeInput = {
  clientId?: string | null,
  id?: string | null,
  kind?: ExchangeEnum | null,
  publicKey?: string | null,
  secretKey?: string | null,
  lastTransferMoment?: number | null,
  totalTransferredUSDT?: number | null,
  totalInitialMargin?: number | null,
  totalMaintMargin?: number | null,
  totalWalletBalance?: number | null,
  totalUnrealizedProfit?: number | null,
  totalMarginBalance?: number | null,
  totalPositionInitialMargin?: number | null,
  totalOpenOrderInitialMargin?: number | null,
  totalCrossWalletBalance?: number | null,
  totalCrossUnPnl?: number | null,
  availableBalance?: number | null,
  maxWithdrawAmount?: number | null,
};

export type OrderBookInput = {
  exchange?: string | null,
  pair?: string | null,
  quote?: string | null,
  base?: string | null,
  bidQty?: number | null,
  bidPrice?: number | null,
  askQty?: number | null,
  askPrice?: number | null,
};

export type OrderBook = {
  __typename: "OrderBook",
  exchange?: string | null,
  pair?: string | null,
  quote?: string | null,
  base?: string | null,
  bidQty?: number | null,
  bidPrice?: number | null,
  askQty?: number | null,
  askPrice?: number | null,
};

export type DeletePortfolioInput = {
  id: string,
};

export type DeleteExchangeInput = {
  id: string,
};

export type UpdateClientInput = {
  id?: string | null,
  status?: string | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  status?: string | null,
  secretArn?: string | null,
  exchanges?:  Array<Exchange | null > | null,
  portfolios?:  Array<Portfolio | null > | null,
  logs?:  Array<Log | null > | null,
};

export enum CRUD {
  create = "create",
  delete = "delete",
  update = "update",
}


export type PortfolioChangedPayload = {
  __typename: "PortfolioChangedPayload",
  operation?: CRUD | null,
  ownerId: string,
  portfolio?: Portfolio | null,
};

export type OrderChangedPayload = {
  __typename: "OrderChangedPayload",
  operation?: CRUD | null,
  ownerId: string,
  order?: Order | null,
};

export type TradeChangedPayload = {
  __typename: "TradeChangedPayload",
  operation?: CRUD | null,
  ownerId: string,
  trade?: Trade | null,
};

export type LogChangedPayload = {
  __typename: "LogChangedPayload",
  operation?: CRUD | null,
  ownerId: string,
  log?: Log | null,
};

export type ExchangeChangedPayload = {
  __typename: "ExchangeChangedPayload",
  operation?: CRUD | null,
  ownerId: string,
  exchange?: Exchange | null,
};

export type GetExchangeInput = {
  clientId: string,
  id?: string | null,
};

export type GetPortfolioInput = {
  clientId: string,
  portfolioId?: string | null,
};

export type GetInitialVolumeInput = {
  exchange?: string | null,
  pair?: string | null,
  volume?: number | null,
  quote?: string | null,
};

export type GetStrategyLevelInput = {
  strategyId: string,
  id?: string | null,
};

export type SymbolInfoInput = {
  exchange?: string | null,
  pair?: string | null,
  volume?: number | null,
  quote?: string | null,
};

export type SymbolInfo = {
  __typename: "SymbolInfo",
  exchange?: string | null,
  pair?: string | null,
  deliveryDate?: number | null,
  askPrice?: number | null,
  bidPrice?: number | null,
  minNotional?: number | null,
  priceTickSize?: number | null,
  base?: string | null,
  quote?: string | null,
  quantityMinSize?: number | null,
  contractType?: string | null,
  quoteVolume?: number | null,
  minQuoteVolume?: number | null,
};

export type AddStrategyLevelMutationVariables = {
  input: UpdateStrategyLevelInput,
};

export type AddStrategyLevelMutation = {
  addStrategyLevel?:  {
    __typename: "StrategyLevel",
    strategyId?: string | null,
    id?: string | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
  } | null,
};

export type UpdateStrategyLevelMutationVariables = {
  input: UpdateStrategyLevelInput,
};

export type UpdateStrategyLevelMutation = {
  updateStrategyLevel?:  {
    __typename: "StrategyLevel",
    strategyId?: string | null,
    id?: string | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
  } | null,
};

export type DeleteStrategyLevelMutationVariables = {
  input: DeleteStrategyLevelInput,
};

export type DeleteStrategyLevelMutation = {
  deleteStrategyLevel?:  {
    __typename: "StrategyLevel",
    strategyId?: string | null,
    id?: string | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
  } | null,
};

export type AddPortoflioMutationVariables = {
  input: UpdatePortfolioInput,
};

export type AddPortoflioMutation = {
  addPortoflio?:  {
    __typename: "Portfolio",
    id: string,
    trdPair?: string | null,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
    name?: string | null,
    status?: string | null,
    buy?: boolean | null,
    sell?: boolean | null,
    onlyClose?: boolean | null,
    cooldown?: number | null,
    initialVolume?: number | null,
    initialVolumeEUR?: number | null,
    fixedVolume?: number | null,
    fixedAmount?: number | null,
    initialPrice?: number | null,
    positionControl?: string | null,
    amount?: number | null,
    volume?: number | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
    limit?: number | null,
    lastTradeMoment?: number | null,
    orders?:  Array< {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null > | null,
    trades?:  Array< {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null > | null,
    bid?: number | null,
    ask?: number | null,
    strategy?:  {
      __typename: "Strategy",
      id?: string | null,
      levels?:  Array< {
        __typename: "StrategyLevel",
        strategyId?: string | null,
        id?: string | null,
        level?: number | null,
        takeProfit?: number | null,
        priceShift?: number | null,
        martingale?: number | null,
      } | null > | null,
    } | null,
  } | null,
};

export type AddClientMutationVariables = {
  input: AddClientInput,
};

export type AddClientMutation = {
  addClient: string,
};

export type AddNewOrderMutationVariables = {
  input: AddNewOrderInput,
};

export type AddNewOrderMutation = {
  addNewOrder?:  {
    __typename: "Order",
    id: string,
    orderId?: string | null,
    time?: string | null,
    status?: string | null,
    dir?: string | null,
    price?: number | null,
    qty?: number | null,
    volume?: number | null,
    kind?: OrderKind | null,
    type?: string | null,
    fulfilled?: number | null,
    qtyChange?: number | null,
    linked?: string | null,
    trdPair?: string | null,
    trdAmount?: number | null,
  } | null,
};

export type AddNewLogMutationVariables = {
  input: AddNewLogInput,
};

export type AddNewLogMutation = {
  addNewLog?:  {
    __typename: "Log",
    clientId?: string | null,
    timestamp?: string | null,
    src?: string | null,
    srcId?: string | null,
    info?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    orderId?: string | null,
    time?: string | null,
    status?: string | null,
    dir?: string | null,
    price?: number | null,
    qty?: number | null,
    volume?: number | null,
    kind?: OrderKind | null,
    type?: string | null,
    fulfilled?: number | null,
    qtyChange?: number | null,
    linked?: string | null,
    trdPair?: string | null,
    trdAmount?: number | null,
  } | null,
};

export type UpdatePortoflioMutationVariables = {
  input: UpdatePortfolioInput,
};

export type UpdatePortoflioMutation = {
  updatePortoflio?:  {
    __typename: "Portfolio",
    id: string,
    trdPair?: string | null,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
    name?: string | null,
    status?: string | null,
    buy?: boolean | null,
    sell?: boolean | null,
    onlyClose?: boolean | null,
    cooldown?: number | null,
    initialVolume?: number | null,
    initialVolumeEUR?: number | null,
    fixedVolume?: number | null,
    fixedAmount?: number | null,
    initialPrice?: number | null,
    positionControl?: string | null,
    amount?: number | null,
    volume?: number | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
    limit?: number | null,
    lastTradeMoment?: number | null,
    orders?:  Array< {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null > | null,
    trades?:  Array< {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null > | null,
    bid?: number | null,
    ask?: number | null,
    strategy?:  {
      __typename: "Strategy",
      id?: string | null,
      levels?:  Array< {
        __typename: "StrategyLevel",
        strategyId?: string | null,
        id?: string | null,
        level?: number | null,
        takeProfit?: number | null,
        priceShift?: number | null,
        martingale?: number | null,
      } | null > | null,
    } | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    orderId?: string | null,
    time?: string | null,
    status?: string | null,
    dir?: string | null,
    price?: number | null,
    qty?: number | null,
    volume?: number | null,
    kind?: OrderKind | null,
    type?: string | null,
    fulfilled?: number | null,
    qtyChange?: number | null,
    linked?: string | null,
    trdPair?: string | null,
    trdAmount?: number | null,
  } | null,
};

export type AddNewTradeMutationVariables = {
  input?: AddNewTradeInput | null,
};

export type AddNewTradeMutation = {
  addNewTrade?:  {
    __typename: "Trade",
    orderId: string,
    id?: string | null,
    price?: number | null,
    qty?: number | null,
    time?: number | null,
    dir?: string | null,
    trdPair?: string | null,
  } | null,
};

export type AddOrderStateMutationVariables = {
  input?: AddOrderStateInput | null,
};

export type AddOrderStateMutation = {
  addOrderState?:  {
    __typename: "Order",
    id: string,
    orderId?: string | null,
    time?: string | null,
    status?: string | null,
    dir?: string | null,
    price?: number | null,
    qty?: number | null,
    volume?: number | null,
    kind?: OrderKind | null,
    type?: string | null,
    fulfilled?: number | null,
    qtyChange?: number | null,
    linked?: string | null,
    trdPair?: string | null,
    trdAmount?: number | null,
  } | null,
};

export type AddExchangeMutationVariables = {
  input: AddExchangeInput,
};

export type AddExchangeMutation = {
  addExchange?:  {
    __typename: "Exchange",
    clientId?: string | null,
    id: string,
    kind: ExchangeEnum,
    publicKey?: string | null,
    lastTransferMoment?: number | null,
    totalTransferredUSDT?: number | null,
    totalInitialMargin?: number | null,
    totalMaintMargin?: number | null,
    totalWalletBalance?: number | null,
    totalUnrealizedProfit?: number | null,
    totalMarginBalance?: number | null,
    totalPositionInitialMargin?: number | null,
    totalOpenOrderInitialMargin?: number | null,
    totalCrossWalletBalance?: number | null,
    totalCrossUnPnl?: number | null,
    availableBalance?: number | null,
    maxWithdrawAmount?: number | null,
  } | null,
};

export type UpdateOrderBookMutationVariables = {
  input?: Array< OrderBookInput | null > | null,
};

export type UpdateOrderBookMutation = {
  updateOrderBook?:  Array< {
    __typename: "OrderBook",
    exchange?: string | null,
    pair?: string | null,
    quote?: string | null,
    base?: string | null,
    bidQty?: number | null,
    bidPrice?: number | null,
    askQty?: number | null,
    askPrice?: number | null,
  } | null > | null,
};

export type DeletePortfolioMutationVariables = {
  input: DeletePortfolioInput,
};

export type DeletePortfolioMutation = {
  deletePortfolio?:  {
    __typename: "Portfolio",
    id: string,
    trdPair?: string | null,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
    name?: string | null,
    status?: string | null,
    buy?: boolean | null,
    sell?: boolean | null,
    onlyClose?: boolean | null,
    cooldown?: number | null,
    initialVolume?: number | null,
    initialVolumeEUR?: number | null,
    fixedVolume?: number | null,
    fixedAmount?: number | null,
    initialPrice?: number | null,
    positionControl?: string | null,
    amount?: number | null,
    volume?: number | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
    limit?: number | null,
    lastTradeMoment?: number | null,
    orders?:  Array< {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null > | null,
    trades?:  Array< {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null > | null,
    bid?: number | null,
    ask?: number | null,
    strategy?:  {
      __typename: "Strategy",
      id?: string | null,
      levels?:  Array< {
        __typename: "StrategyLevel",
        strategyId?: string | null,
        id?: string | null,
        level?: number | null,
        takeProfit?: number | null,
        priceShift?: number | null,
        martingale?: number | null,
      } | null > | null,
    } | null,
  } | null,
};

export type DeleteExchangeMutationVariables = {
  input: DeleteExchangeInput,
};

export type DeleteExchangeMutation = {
  deleteExchange?:  {
    __typename: "Exchange",
    clientId?: string | null,
    id: string,
    kind: ExchangeEnum,
    publicKey?: string | null,
    lastTransferMoment?: number | null,
    totalTransferredUSDT?: number | null,
    totalInitialMargin?: number | null,
    totalMaintMargin?: number | null,
    totalWalletBalance?: number | null,
    totalUnrealizedProfit?: number | null,
    totalMarginBalance?: number | null,
    totalPositionInitialMargin?: number | null,
    totalOpenOrderInitialMargin?: number | null,
    totalCrossWalletBalance?: number | null,
    totalCrossUnPnl?: number | null,
    availableBalance?: number | null,
    maxWithdrawAmount?: number | null,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    status?: string | null,
    secretArn?: string | null,
    exchanges?:  Array< {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null > | null,
    portfolios?:  Array< {
      __typename: "Portfolio",
      id: string,
      trdPair?: string | null,
      exchange?:  {
        __typename: "Exchange",
        clientId?: string | null,
        id: string,
        kind: ExchangeEnum,
        publicKey?: string | null,
        lastTransferMoment?: number | null,
        totalTransferredUSDT?: number | null,
        totalInitialMargin?: number | null,
        totalMaintMargin?: number | null,
        totalWalletBalance?: number | null,
        totalUnrealizedProfit?: number | null,
        totalMarginBalance?: number | null,
        totalPositionInitialMargin?: number | null,
        totalOpenOrderInitialMargin?: number | null,
        totalCrossWalletBalance?: number | null,
        totalCrossUnPnl?: number | null,
        availableBalance?: number | null,
        maxWithdrawAmount?: number | null,
      } | null,
      name?: string | null,
      status?: string | null,
      buy?: boolean | null,
      sell?: boolean | null,
      onlyClose?: boolean | null,
      cooldown?: number | null,
      initialVolume?: number | null,
      initialVolumeEUR?: number | null,
      fixedVolume?: number | null,
      fixedAmount?: number | null,
      initialPrice?: number | null,
      positionControl?: string | null,
      amount?: number | null,
      volume?: number | null,
      level?: number | null,
      takeProfit?: number | null,
      priceShift?: number | null,
      martingale?: number | null,
      limit?: number | null,
      lastTradeMoment?: number | null,
      orders?:  Array< {
        __typename: "Order",
        id: string,
        orderId?: string | null,
        time?: string | null,
        status?: string | null,
        dir?: string | null,
        price?: number | null,
        qty?: number | null,
        volume?: number | null,
        kind?: OrderKind | null,
        type?: string | null,
        fulfilled?: number | null,
        qtyChange?: number | null,
        linked?: string | null,
        trdPair?: string | null,
        trdAmount?: number | null,
      } | null > | null,
      trades?:  Array< {
        __typename: "Trade",
        orderId: string,
        id?: string | null,
        price?: number | null,
        qty?: number | null,
        time?: number | null,
        dir?: string | null,
        trdPair?: string | null,
      } | null > | null,
      bid?: number | null,
      ask?: number | null,
      strategy?:  {
        __typename: "Strategy",
        id?: string | null,
        levels?:  Array< {
          __typename: "StrategyLevel",
          strategyId?: string | null,
          id?: string | null,
          level?: number | null,
          takeProfit?: number | null,
          priceShift?: number | null,
          martingale?: number | null,
        } | null > | null,
      } | null,
    } | null > | null,
    logs?:  Array< {
      __typename: "Log",
      clientId?: string | null,
      timestamp?: string | null,
      src?: string | null,
      srcId?: string | null,
      info?: string | null,
    } | null > | null,
  } | null,
};

export type PortfolioChangedMutationVariables = {
  ownerId: string,
  operation?: CRUD | null,
  portfolio?: UpdatePortfolioInput | null,
};

export type PortfolioChangedMutation = {
  portfolioChanged?:  {
    __typename: "PortfolioChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      trdPair?: string | null,
      exchange?:  {
        __typename: "Exchange",
        clientId?: string | null,
        id: string,
        kind: ExchangeEnum,
        publicKey?: string | null,
        lastTransferMoment?: number | null,
        totalTransferredUSDT?: number | null,
        totalInitialMargin?: number | null,
        totalMaintMargin?: number | null,
        totalWalletBalance?: number | null,
        totalUnrealizedProfit?: number | null,
        totalMarginBalance?: number | null,
        totalPositionInitialMargin?: number | null,
        totalOpenOrderInitialMargin?: number | null,
        totalCrossWalletBalance?: number | null,
        totalCrossUnPnl?: number | null,
        availableBalance?: number | null,
        maxWithdrawAmount?: number | null,
      } | null,
      name?: string | null,
      status?: string | null,
      buy?: boolean | null,
      sell?: boolean | null,
      onlyClose?: boolean | null,
      cooldown?: number | null,
      initialVolume?: number | null,
      initialVolumeEUR?: number | null,
      fixedVolume?: number | null,
      fixedAmount?: number | null,
      initialPrice?: number | null,
      positionControl?: string | null,
      amount?: number | null,
      volume?: number | null,
      level?: number | null,
      takeProfit?: number | null,
      priceShift?: number | null,
      martingale?: number | null,
      limit?: number | null,
      lastTradeMoment?: number | null,
      orders?:  Array< {
        __typename: "Order",
        id: string,
        orderId?: string | null,
        time?: string | null,
        status?: string | null,
        dir?: string | null,
        price?: number | null,
        qty?: number | null,
        volume?: number | null,
        kind?: OrderKind | null,
        type?: string | null,
        fulfilled?: number | null,
        qtyChange?: number | null,
        linked?: string | null,
        trdPair?: string | null,
        trdAmount?: number | null,
      } | null > | null,
      trades?:  Array< {
        __typename: "Trade",
        orderId: string,
        id?: string | null,
        price?: number | null,
        qty?: number | null,
        time?: number | null,
        dir?: string | null,
        trdPair?: string | null,
      } | null > | null,
      bid?: number | null,
      ask?: number | null,
      strategy?:  {
        __typename: "Strategy",
        id?: string | null,
        levels?:  Array< {
          __typename: "StrategyLevel",
          strategyId?: string | null,
          id?: string | null,
          level?: number | null,
          takeProfit?: number | null,
          priceShift?: number | null,
          martingale?: number | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};

export type OrderChangedMutationVariables = {
  ownerId: string,
  operation?: CRUD | null,
  order?: AddNewOrderInput | null,
};

export type OrderChangedMutation = {
  orderChanged?:  {
    __typename: "OrderChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    order?:  {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null,
  } | null,
};

export type TradeChangedMutationVariables = {
  ownerId: string,
  operation?: CRUD | null,
  trade?: AddNewTradeInput | null,
};

export type TradeChangedMutation = {
  tradeChanged?:  {
    __typename: "TradeChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    trade?:  {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null,
  } | null,
};

export type LogChangedMutationVariables = {
  ownerId: string,
  operation?: CRUD | null,
  log?: AddNewLogInput | null,
};

export type LogChangedMutation = {
  logChanged?:  {
    __typename: "LogChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    log?:  {
      __typename: "Log",
      clientId?: string | null,
      timestamp?: string | null,
      src?: string | null,
      srcId?: string | null,
      info?: string | null,
    } | null,
  } | null,
};

export type ExchangeChangedMutationVariables = {
  ownerId: string,
  operation?: CRUD | null,
  exchange?: AddExchangeInput | null,
};

export type ExchangeChangedMutation = {
  exchangeChanged?:  {
    __typename: "ExchangeChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
  } | null,
};

export type UpdateExchangeMutationVariables = {
  input: AddExchangeInput,
};

export type UpdateExchangeMutation = {
  updateExchange?:  {
    __typename: "Exchange",
    clientId?: string | null,
    id: string,
    kind: ExchangeEnum,
    publicKey?: string | null,
    lastTransferMoment?: number | null,
    totalTransferredUSDT?: number | null,
    totalInitialMargin?: number | null,
    totalMaintMargin?: number | null,
    totalWalletBalance?: number | null,
    totalUnrealizedProfit?: number | null,
    totalMarginBalance?: number | null,
    totalPositionInitialMargin?: number | null,
    totalOpenOrderInitialMargin?: number | null,
    totalCrossWalletBalance?: number | null,
    totalCrossUnPnl?: number | null,
    availableBalance?: number | null,
    maxWithdrawAmount?: number | null,
  } | null,
};

export type GetClientDataQueryVariables = {
  input?: string | null,
};

export type GetClientDataQuery = {
  getClientData?:  {
    __typename: "Client",
    id: string,
    status?: string | null,
    secretArn?: string | null,
    exchanges?:  Array< {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null > | null,
    portfolios?:  Array< {
      __typename: "Portfolio",
      id: string,
      trdPair?: string | null,
      exchange?:  {
        __typename: "Exchange",
        clientId?: string | null,
        id: string,
        kind: ExchangeEnum,
        publicKey?: string | null,
        lastTransferMoment?: number | null,
        totalTransferredUSDT?: number | null,
        totalInitialMargin?: number | null,
        totalMaintMargin?: number | null,
        totalWalletBalance?: number | null,
        totalUnrealizedProfit?: number | null,
        totalMarginBalance?: number | null,
        totalPositionInitialMargin?: number | null,
        totalOpenOrderInitialMargin?: number | null,
        totalCrossWalletBalance?: number | null,
        totalCrossUnPnl?: number | null,
        availableBalance?: number | null,
        maxWithdrawAmount?: number | null,
      } | null,
      name?: string | null,
      status?: string | null,
      buy?: boolean | null,
      sell?: boolean | null,
      onlyClose?: boolean | null,
      cooldown?: number | null,
      initialVolume?: number | null,
      initialVolumeEUR?: number | null,
      fixedVolume?: number | null,
      fixedAmount?: number | null,
      initialPrice?: number | null,
      positionControl?: string | null,
      amount?: number | null,
      volume?: number | null,
      level?: number | null,
      takeProfit?: number | null,
      priceShift?: number | null,
      martingale?: number | null,
      limit?: number | null,
      lastTradeMoment?: number | null,
      orders?:  Array< {
        __typename: "Order",
        id: string,
        orderId?: string | null,
        time?: string | null,
        status?: string | null,
        dir?: string | null,
        price?: number | null,
        qty?: number | null,
        volume?: number | null,
        kind?: OrderKind | null,
        type?: string | null,
        fulfilled?: number | null,
        qtyChange?: number | null,
        linked?: string | null,
        trdPair?: string | null,
        trdAmount?: number | null,
      } | null > | null,
      trades?:  Array< {
        __typename: "Trade",
        orderId: string,
        id?: string | null,
        price?: number | null,
        qty?: number | null,
        time?: number | null,
        dir?: string | null,
        trdPair?: string | null,
      } | null > | null,
      bid?: number | null,
      ask?: number | null,
      strategy?:  {
        __typename: "Strategy",
        id?: string | null,
        levels?:  Array< {
          __typename: "StrategyLevel",
          strategyId?: string | null,
          id?: string | null,
          level?: number | null,
          takeProfit?: number | null,
          priceShift?: number | null,
          martingale?: number | null,
        } | null > | null,
      } | null,
    } | null > | null,
    logs?:  Array< {
      __typename: "Log",
      clientId?: string | null,
      timestamp?: string | null,
      src?: string | null,
      srcId?: string | null,
      info?: string | null,
    } | null > | null,
  } | null,
};

export type GetExchangesQueryVariables = {
  input: GetExchangeInput,
};

export type GetExchangesQuery = {
  getExchanges?:  Array< {
    __typename: "Exchange",
    clientId?: string | null,
    id: string,
    kind: ExchangeEnum,
    publicKey?: string | null,
    lastTransferMoment?: number | null,
    totalTransferredUSDT?: number | null,
    totalInitialMargin?: number | null,
    totalMaintMargin?: number | null,
    totalWalletBalance?: number | null,
    totalUnrealizedProfit?: number | null,
    totalMarginBalance?: number | null,
    totalPositionInitialMargin?: number | null,
    totalOpenOrderInitialMargin?: number | null,
    totalCrossWalletBalance?: number | null,
    totalCrossUnPnl?: number | null,
    availableBalance?: number | null,
    maxWithdrawAmount?: number | null,
  } | null > | null,
};

export type GetPortfoliosQueryVariables = {
  input: GetPortfolioInput,
};

export type GetPortfoliosQuery = {
  getPortfolios?:  Array< {
    __typename: "Portfolio",
    id: string,
    trdPair?: string | null,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
    name?: string | null,
    status?: string | null,
    buy?: boolean | null,
    sell?: boolean | null,
    onlyClose?: boolean | null,
    cooldown?: number | null,
    initialVolume?: number | null,
    initialVolumeEUR?: number | null,
    fixedVolume?: number | null,
    fixedAmount?: number | null,
    initialPrice?: number | null,
    positionControl?: string | null,
    amount?: number | null,
    volume?: number | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
    limit?: number | null,
    lastTradeMoment?: number | null,
    orders?:  Array< {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null > | null,
    trades?:  Array< {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null > | null,
    bid?: number | null,
    ask?: number | null,
    strategy?:  {
      __typename: "Strategy",
      id?: string | null,
      levels?:  Array< {
        __typename: "StrategyLevel",
        strategyId?: string | null,
        id?: string | null,
        level?: number | null,
        takeProfit?: number | null,
        priceShift?: number | null,
        martingale?: number | null,
      } | null > | null,
    } | null,
  } | null > | null,
};

export type GetInitialVolumeQueryVariables = {
  input: GetInitialVolumeInput,
};

export type GetInitialVolumeQuery = {
  getInitialVolume?: number | null,
};

export type GetStrategyLevelsQueryVariables = {
  input: GetStrategyLevelInput,
};

export type GetStrategyLevelsQuery = {
  getStrategyLevels?:  Array< {
    __typename: "StrategyLevel",
    strategyId?: string | null,
    id?: string | null,
    level?: number | null,
    takeProfit?: number | null,
    priceShift?: number | null,
    martingale?: number | null,
  } | null > | null,
};

export type GetSymbolInfoQueryVariables = {
  input: SymbolInfoInput,
};

export type GetSymbolInfoQuery = {
  getSymbolInfo?:  {
    __typename: "SymbolInfo",
    exchange?: string | null,
    pair?: string | null,
    deliveryDate?: number | null,
    askPrice?: number | null,
    bidPrice?: number | null,
    minNotional?: number | null,
    priceTickSize?: number | null,
    base?: string | null,
    quote?: string | null,
    quantityMinSize?: number | null,
    contractType?: string | null,
    quoteVolume?: number | null,
    minQuoteVolume?: number | null,
  } | null,
};

export type OnExchangeChangeSubscriptionVariables = {
  ownerId: string,
};

export type OnExchangeChangeSubscription = {
  onExchangeChange?:  {
    __typename: "ExchangeChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    exchange?:  {
      __typename: "Exchange",
      clientId?: string | null,
      id: string,
      kind: ExchangeEnum,
      publicKey?: string | null,
      lastTransferMoment?: number | null,
      totalTransferredUSDT?: number | null,
      totalInitialMargin?: number | null,
      totalMaintMargin?: number | null,
      totalWalletBalance?: number | null,
      totalUnrealizedProfit?: number | null,
      totalMarginBalance?: number | null,
      totalPositionInitialMargin?: number | null,
      totalOpenOrderInitialMargin?: number | null,
      totalCrossWalletBalance?: number | null,
      totalCrossUnPnl?: number | null,
      availableBalance?: number | null,
      maxWithdrawAmount?: number | null,
    } | null,
  } | null,
};

export type OnOrderChangeSubscriptionVariables = {
  ownerId: string,
};

export type OnOrderChangeSubscription = {
  onOrderChange?:  {
    __typename: "OrderChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    order?:  {
      __typename: "Order",
      id: string,
      orderId?: string | null,
      time?: string | null,
      status?: string | null,
      dir?: string | null,
      price?: number | null,
      qty?: number | null,
      volume?: number | null,
      kind?: OrderKind | null,
      type?: string | null,
      fulfilled?: number | null,
      qtyChange?: number | null,
      linked?: string | null,
      trdPair?: string | null,
      trdAmount?: number | null,
    } | null,
  } | null,
};

export type OnTradeChangeSubscriptionVariables = {
  ownerId: string,
};

export type OnTradeChangeSubscription = {
  onTradeChange?:  {
    __typename: "TradeChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    trade?:  {
      __typename: "Trade",
      orderId: string,
      id?: string | null,
      price?: number | null,
      qty?: number | null,
      time?: number | null,
      dir?: string | null,
      trdPair?: string | null,
    } | null,
  } | null,
};

export type OnLogAddedSubscriptionVariables = {
  ownerId: string,
};

export type OnLogAddedSubscription = {
  onLogAdded?:  {
    __typename: "LogChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    log?:  {
      __typename: "Log",
      clientId?: string | null,
      timestamp?: string | null,
      src?: string | null,
      srcId?: string | null,
      info?: string | null,
    } | null,
  } | null,
};

export type OnPortfolioChangeSubscriptionVariables = {
  ownerId: string,
};

export type OnPortfolioChangeSubscription = {
  onPortfolioChange?:  {
    __typename: "PortfolioChangedPayload",
    operation?: CRUD | null,
    ownerId: string,
    portfolio?:  {
      __typename: "Portfolio",
      id: string,
      trdPair?: string | null,
      exchange?:  {
        __typename: "Exchange",
        clientId?: string | null,
        id: string,
        kind: ExchangeEnum,
        publicKey?: string | null,
        lastTransferMoment?: number | null,
        totalTransferredUSDT?: number | null,
        totalInitialMargin?: number | null,
        totalMaintMargin?: number | null,
        totalWalletBalance?: number | null,
        totalUnrealizedProfit?: number | null,
        totalMarginBalance?: number | null,
        totalPositionInitialMargin?: number | null,
        totalOpenOrderInitialMargin?: number | null,
        totalCrossWalletBalance?: number | null,
        totalCrossUnPnl?: number | null,
        availableBalance?: number | null,
        maxWithdrawAmount?: number | null,
      } | null,
      name?: string | null,
      status?: string | null,
      buy?: boolean | null,
      sell?: boolean | null,
      onlyClose?: boolean | null,
      cooldown?: number | null,
      initialVolume?: number | null,
      initialVolumeEUR?: number | null,
      fixedVolume?: number | null,
      fixedAmount?: number | null,
      initialPrice?: number | null,
      positionControl?: string | null,
      amount?: number | null,
      volume?: number | null,
      level?: number | null,
      takeProfit?: number | null,
      priceShift?: number | null,
      martingale?: number | null,
      limit?: number | null,
      lastTradeMoment?: number | null,
      orders?:  Array< {
        __typename: "Order",
        id: string,
        orderId?: string | null,
        time?: string | null,
        status?: string | null,
        dir?: string | null,
        price?: number | null,
        qty?: number | null,
        volume?: number | null,
        kind?: OrderKind | null,
        type?: string | null,
        fulfilled?: number | null,
        qtyChange?: number | null,
        linked?: string | null,
        trdPair?: string | null,
        trdAmount?: number | null,
      } | null > | null,
      trades?:  Array< {
        __typename: "Trade",
        orderId: string,
        id?: string | null,
        price?: number | null,
        qty?: number | null,
        time?: number | null,
        dir?: string | null,
        trdPair?: string | null,
      } | null > | null,
      bid?: number | null,
      ask?: number | null,
      strategy?:  {
        __typename: "Strategy",
        id?: string | null,
        levels?:  Array< {
          __typename: "StrategyLevel",
          strategyId?: string | null,
          id?: string | null,
          level?: number | null,
          takeProfit?: number | null,
          priceShift?: number | null,
          martingale?: number | null,
        } | null > | null,
      } | null,
    } | null,
  } | null,
};
