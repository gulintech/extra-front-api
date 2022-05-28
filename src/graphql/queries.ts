/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClientData = /* GraphQL */ `
  query GetClientData($input: ID) {
    getClientData(input: $input) {
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
export const getExchanges = /* GraphQL */ `
  query GetExchanges($input: GetExchangeInput!) {
    getExchanges(input: $input) {
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
export const getPortfolios = /* GraphQL */ `
  query GetPortfolios($input: GetPortfolioInput!) {
    getPortfolios(input: $input) {
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
export const getInitialVolume = /* GraphQL */ `
  query GetInitialVolume($input: GetInitialVolumeInput!) {
    getInitialVolume(input: $input)
  }
`;
export const getStrategyLevels = /* GraphQL */ `
  query GetStrategyLevels($input: GetStrategyLevelInput!) {
    getStrategyLevels(input: $input) {
      strategyId
      id
      level
      takeProfit
      priceShift
      martingale
    }
  }
`;
export const getSymbolInfo = /* GraphQL */ `
  query GetSymbolInfo($input: SymbolInfoInput!) {
    getSymbolInfo(input: $input) {
      exchange
      pair
      deliveryDate
      askPrice
      bidPrice
      minNotional
      priceTickSize
      base
      quote
      quantityMinSize
      contractType
      quoteVolume
      minQuoteVolume
    }
  }
`;
