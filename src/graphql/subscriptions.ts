/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      type
      email
      name
      image
      networth
      portfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      type
      email
      name
      image
      networth
      portfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      type
      email
      name
      image
      networth
      portfolioCoins {
        items {
          id
          amount
          userId
          coinId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePortfolioCoin = /* GraphQL */ `
  subscription OnCreatePortfolioCoin {
    onCreatePortfolioCoin {
      id
      amount
      userId
      user {
        id
        type
        email
        name
        image
        networth
        portfolioCoins {
          nextToken
        }
        createdAt
        updatedAt
      }
      coinId
      coin {
        id
        cgId
        name
        symbol
        image
        currentPrice
        valueChange24H
        valueChange1D
        valueChange7D
        priceHistoryString
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePortfolioCoin = /* GraphQL */ `
  subscription OnUpdatePortfolioCoin {
    onUpdatePortfolioCoin {
      id
      amount
      userId
      user {
        id
        type
        email
        name
        image
        networth
        portfolioCoins {
          nextToken
        }
        createdAt
        updatedAt
      }
      coinId
      coin {
        id
        cgId
        name
        symbol
        image
        currentPrice
        valueChange24H
        valueChange1D
        valueChange7D
        priceHistoryString
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePortfolioCoin = /* GraphQL */ `
  subscription OnDeletePortfolioCoin {
    onDeletePortfolioCoin {
      id
      amount
      userId
      user {
        id
        type
        email
        name
        image
        networth
        portfolioCoins {
          nextToken
        }
        createdAt
        updatedAt
      }
      coinId
      coin {
        id
        cgId
        name
        symbol
        image
        currentPrice
        valueChange24H
        valueChange1D
        valueChange7D
        priceHistoryString
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCoin = /* GraphQL */ `
  subscription OnCreateCoin {
    onCreateCoin {
      id
      cgId
      name
      symbol
      image
      currentPrice
      valueChange24H
      valueChange1D
      valueChange7D
      priceHistoryString
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCoin = /* GraphQL */ `
  subscription OnUpdateCoin {
    onUpdateCoin {
      id
      cgId
      name
      symbol
      image
      currentPrice
      valueChange24H
      valueChange1D
      valueChange7D
      priceHistoryString
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCoin = /* GraphQL */ `
  subscription OnDeleteCoin {
    onDeleteCoin {
      id
      cgId
      name
      symbol
      image
      currentPrice
      valueChange24H
      valueChange1D
      valueChange7D
      priceHistoryString
      createdAt
      updatedAt
    }
  }
`;
