/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onExchangeChange = /* GraphQL */ `
  subscription OnExchangeChange($ownerId: ID!) {
    onExchangeChange(ownerId: $ownerId) {
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
export const onOrderChange = /* GraphQL */ `
  subscription OnOrderChange($ownerId: ID!) {
    onOrderChange(ownerId: $ownerId) {
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
export const onTradeChange = /* GraphQL */ `
  subscription OnTradeChange($ownerId: ID!) {
    onTradeChange(ownerId: $ownerId) {
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
export const onLogAdded = /* GraphQL */ `
  subscription OnLogAdded($ownerId: ID!) {
    onLogAdded(ownerId: $ownerId) {
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
export const onPortfolioChange = /* GraphQL */ `
  subscription OnPortfolioChange($ownerId: ID!) {
    onPortfolioChange(ownerId: $ownerId) {
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
