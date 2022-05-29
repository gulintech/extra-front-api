export const getClientData = /* GraphQL */ `
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
