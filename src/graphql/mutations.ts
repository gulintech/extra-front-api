/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addStrategyLevel = /* GraphQL */ `
  mutation AddStrategyLevel($input: UpdateStrategyLevelInput!) {
    addStrategyLevel(input: $input) {
      strategyId
      id
      level
      takeProfit
      priceShift
      martingale
    }
  }
`;
export const updateStrategyLevel = /* GraphQL */ `
  mutation UpdateStrategyLevel($input: UpdateStrategyLevelInput!) {
    updateStrategyLevel(input: $input) {
      strategyId
      id
      level
      takeProfit
      priceShift
      martingale
    }
  }
`;
export const deleteStrategyLevel = /* GraphQL */ `
  mutation DeleteStrategyLevel($input: DeleteStrategyLevelInput!) {
    deleteStrategyLevel(input: $input) {
      strategyId
      id
      level
      takeProfit
      priceShift
      martingale
    }
  }
`;
export const addPortoflio = /* GraphQL */ `
  mutation AddPortoflio($input: UpdatePortfolioInput!) {
    addPortoflio(input: $input) {
      id
      trdPair
      exchange {
        clientId
        id
        kind
        publicKey
        lastTransferMoment
        totalTransferredUSDT
        totalInitialMargin
        totalMaintMargin
        totalWalletBalance
        totalUnrealizedProfit
        totalMarginBalance
        totalPositionInitialMargin
        totalOpenOrderInitialMargin
        totalCrossWalletBalance
        totalCrossUnPnl
        availableBalance
        maxWithdrawAmount
      }
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
      orders {
        id
        orderId
        time
        status
        dir
        price
        qty
        volume
        kind
        type
        fulfilled
        qtyChange
        linked
        trdPair
        trdAmount
      }
      trades {
        orderId
        id
        price
        qty
        time
        dir
        trdPair
      }
      bid
      ask
      strategy {
        id
        levels {
          strategyId
          id
          level
          takeProfit
          priceShift
          martingale
        }
      }
    }
  }
`;
export const addClient = /* GraphQL */ `
  mutation AddClient($input: AddClientInput!) {
    addClient(input: $input)
  }
`;
export const addNewOrder = /* GraphQL */ `
  mutation AddNewOrder($input: AddNewOrderInput!) {
    addNewOrder(input: $input) {
      id
      orderId
      time
      status
      dir
      price
      qty
      volume
      kind
      type
      fulfilled
      qtyChange
      linked
      trdPair
      trdAmount
    }
  }
`;
export const addNewLog = /* GraphQL */ `
  mutation AddNewLog($input: AddNewLogInput!) {
    addNewLog(input: $input) {
      clientId
      timestamp
      src
      srcId
      info
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      id
      orderId
      time
      status
      dir
      price
      qty
      volume
      kind
      type
      fulfilled
      qtyChange
      linked
      trdPair
      trdAmount
    }
  }
`;
export const updatePortoflio = /* GraphQL */ `
  mutation UpdatePortoflio($input: UpdatePortfolioInput!) {
    updatePortoflio(input: $input) {
      id
      trdPair
      exchange {
        clientId
        id
        kind
        publicKey
        lastTransferMoment
        totalTransferredUSDT
        totalInitialMargin
        totalMaintMargin
        totalWalletBalance
        totalUnrealizedProfit
        totalMarginBalance
        totalPositionInitialMargin
        totalOpenOrderInitialMargin
        totalCrossWalletBalance
        totalCrossUnPnl
        availableBalance
        maxWithdrawAmount
      }
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
      orders {
        id
        orderId
        time
        status
        dir
        price
        qty
        volume
        kind
        type
        fulfilled
        qtyChange
        linked
        trdPair
        trdAmount
      }
      trades {
        orderId
        id
        price
        qty
        time
        dir
        trdPair
      }
      bid
      ask
      strategy {
        id
        levels {
          strategyId
          id
          level
          takeProfit
          priceShift
          martingale
        }
      }
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder($input: DeleteOrderInput!) {
    deleteOrder(input: $input) {
      id
      orderId
      time
      status
      dir
      price
      qty
      volume
      kind
      type
      fulfilled
      qtyChange
      linked
      trdPair
      trdAmount
    }
  }
`;
export const addNewTrade = /* GraphQL */ `
  mutation AddNewTrade($input: AddNewTradeInput) {
    addNewTrade(input: $input) {
      orderId
      id
      price
      qty
      time
      dir
      trdPair
    }
  }
`;
export const addOrderState = /* GraphQL */ `
  mutation AddOrderState($input: AddOrderStateInput) {
    addOrderState(input: $input) {
      id
      orderId
      time
      status
      dir
      price
      qty
      volume
      kind
      type
      fulfilled
      qtyChange
      linked
      trdPair
      trdAmount
    }
  }
`;
export const addExchange = /* GraphQL */ `
  mutation AddExchange($input: AddExchangeInput!) {
    addExchange(input: $input) {
      clientId
      id
      kind
      publicKey
      lastTransferMoment
      totalTransferredUSDT
      totalInitialMargin
      totalMaintMargin
      totalWalletBalance
      totalUnrealizedProfit
      totalMarginBalance
      totalPositionInitialMargin
      totalOpenOrderInitialMargin
      totalCrossWalletBalance
      totalCrossUnPnl
      availableBalance
      maxWithdrawAmount
    }
  }
`;
export const updateOrderBook = /* GraphQL */ `
  mutation UpdateOrderBook($input: [OrderBookInput]) {
    updateOrderBook(input: $input) {
      exchange
      pair
      quote
      base
      bidQty
      bidPrice
      askQty
      askPrice
    }
  }
`;
export const deletePortfolio = /* GraphQL */ `
  mutation DeletePortfolio($input: DeletePortfolioInput!) {
    deletePortfolio(input: $input) {
      id
      trdPair
      exchange {
        clientId
        id
        kind
        publicKey
        lastTransferMoment
        totalTransferredUSDT
        totalInitialMargin
        totalMaintMargin
        totalWalletBalance
        totalUnrealizedProfit
        totalMarginBalance
        totalPositionInitialMargin
        totalOpenOrderInitialMargin
        totalCrossWalletBalance
        totalCrossUnPnl
        availableBalance
        maxWithdrawAmount
      }
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
      orders {
        id
        orderId
        time
        status
        dir
        price
        qty
        volume
        kind
        type
        fulfilled
        qtyChange
        linked
        trdPair
        trdAmount
      }
      trades {
        orderId
        id
        price
        qty
        time
        dir
        trdPair
      }
      bid
      ask
      strategy {
        id
        levels {
          strategyId
          id
          level
          takeProfit
          priceShift
          martingale
        }
      }
    }
  }
`;
export const deleteExchange = /* GraphQL */ `
  mutation DeleteExchange($input: DeleteExchangeInput!) {
    deleteExchange(input: $input) {
      clientId
      id
      kind
      publicKey
      lastTransferMoment
      totalTransferredUSDT
      totalInitialMargin
      totalMaintMargin
      totalWalletBalance
      totalUnrealizedProfit
      totalMarginBalance
      totalPositionInitialMargin
      totalOpenOrderInitialMargin
      totalCrossWalletBalance
      totalCrossUnPnl
      availableBalance
      maxWithdrawAmount
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient($input: UpdateClientInput!) {
    updateClient(input: $input) {
      id
      status
      secretArn
      exchanges {
        clientId
        id
        kind
        publicKey
        lastTransferMoment
        totalTransferredUSDT
        totalInitialMargin
        totalMaintMargin
        totalWalletBalance
        totalUnrealizedProfit
        totalMarginBalance
        totalPositionInitialMargin
        totalOpenOrderInitialMargin
        totalCrossWalletBalance
        totalCrossUnPnl
        availableBalance
        maxWithdrawAmount
      }
      portfolios {
        id
        trdPair
        exchange {
          clientId
          id
          kind
          publicKey
          lastTransferMoment
          totalTransferredUSDT
          totalInitialMargin
          totalMaintMargin
          totalWalletBalance
          totalUnrealizedProfit
          totalMarginBalance
          totalPositionInitialMargin
          totalOpenOrderInitialMargin
          totalCrossWalletBalance
          totalCrossUnPnl
          availableBalance
          maxWithdrawAmount
        }
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
        orders {
          id
          orderId
          time
          status
          dir
          price
          qty
          volume
          kind
          type
          fulfilled
          qtyChange
          linked
          trdPair
          trdAmount
        }
        trades {
          orderId
          id
          price
          qty
          time
          dir
          trdPair
        }
        bid
        ask
        strategy {
          id
          levels {
            strategyId
            id
            level
            takeProfit
            priceShift
            martingale
          }
        }
      }
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
export const portfolioChanged = /* GraphQL */ `
  mutation PortfolioChanged(
    $ownerId: ID!
    $operation: CRUD
    $portfolio: UpdatePortfolioInput
  ) {
    portfolioChanged(
      ownerId: $ownerId
      operation: $operation
      portfolio: $portfolio
    ) {
      operation
      ownerId
      portfolio {
        id
        trdPair
        exchange {
          clientId
          id
          kind
          publicKey
          lastTransferMoment
          totalTransferredUSDT
          totalInitialMargin
          totalMaintMargin
          totalWalletBalance
          totalUnrealizedProfit
          totalMarginBalance
          totalPositionInitialMargin
          totalOpenOrderInitialMargin
          totalCrossWalletBalance
          totalCrossUnPnl
          availableBalance
          maxWithdrawAmount
        }
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
        orders {
          id
          orderId
          time
          status
          dir
          price
          qty
          volume
          kind
          type
          fulfilled
          qtyChange
          linked
          trdPair
          trdAmount
        }
        trades {
          orderId
          id
          price
          qty
          time
          dir
          trdPair
        }
        bid
        ask
        strategy {
          id
          levels {
            strategyId
            id
            level
            takeProfit
            priceShift
            martingale
          }
        }
      }
    }
  }
`;
export const orderChanged = /* GraphQL */ `
  mutation OrderChanged(
    $ownerId: ID!
    $operation: CRUD
    $order: AddNewOrderInput
  ) {
    orderChanged(ownerId: $ownerId, operation: $operation, order: $order) {
      operation
      ownerId
      order {
        id
        orderId
        time
        status
        dir
        price
        qty
        volume
        kind
        type
        fulfilled
        qtyChange
        linked
        trdPair
        trdAmount
      }
    }
  }
`;
export const tradeChanged = /* GraphQL */ `
  mutation TradeChanged(
    $ownerId: ID!
    $operation: CRUD
    $trade: AddNewTradeInput
  ) {
    tradeChanged(ownerId: $ownerId, operation: $operation, trade: $trade) {
      operation
      ownerId
      trade {
        orderId
        id
        price
        qty
        time
        dir
        trdPair
      }
    }
  }
`;
export const logChanged = /* GraphQL */ `
  mutation LogChanged($ownerId: ID!, $operation: CRUD, $log: AddNewLogInput) {
    logChanged(ownerId: $ownerId, operation: $operation, log: $log) {
      operation
      ownerId
      log {
        clientId
        timestamp
        src
        srcId
        info
      }
    }
  }
`;
export const exchangeChanged = /* GraphQL */ `
  mutation ExchangeChanged(
    $ownerId: ID!
    $operation: CRUD
    $exchange: AddExchangeInput
  ) {
    exchangeChanged(
      ownerId: $ownerId
      operation: $operation
      exchange: $exchange
    ) {
      operation
      ownerId
      exchange {
        clientId
        id
        kind
        publicKey
        lastTransferMoment
        totalTransferredUSDT
        totalInitialMargin
        totalMaintMargin
        totalWalletBalance
        totalUnrealizedProfit
        totalMarginBalance
        totalPositionInitialMargin
        totalOpenOrderInitialMargin
        totalCrossWalletBalance
        totalCrossUnPnl
        availableBalance
        maxWithdrawAmount
      }
    }
  }
`;
export const updateExchange = /* GraphQL */ `
  mutation UpdateExchange($input: AddExchangeInput!) {
    updateExchange(input: $input) {
      clientId
      id
      kind
      publicKey
      lastTransferMoment
      totalTransferredUSDT
      totalInitialMargin
      totalMaintMargin
      totalWalletBalance
      totalUnrealizedProfit
      totalMarginBalance
      totalPositionInitialMargin
      totalOpenOrderInitialMargin
      totalCrossWalletBalance
      totalCrossUnPnl
      availableBalance
      maxWithdrawAmount
    }
  }
`;
