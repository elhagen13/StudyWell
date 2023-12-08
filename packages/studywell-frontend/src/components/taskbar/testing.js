class ShareSaleException extends Error {
  constructor(symbol, sharesToSell, sharesOwned) {
    super(
      `Cannot sell ${sharesToSell} shares of ${symbol}. Only ${sharesOwned} shares are owned.`,
    );
    this.name = "ShareSaleException";
  }
}

class Portfolio {
  constructor() {
    this.portfolio = new Map();
  }

  getPortfolio() {
    return this.portfolio;
  }

  isEmpty() {
    if (this.portfolio.size === 0) {
      return true;
    }
    return false;
  }

  getTickerCount() {
    //returns size of (num keys) map (unique ticker symbols)
    return this.portfolio.size;
  }

  purchase(symbol, shares) {
    // if symbol not in list, add it w number of shares and if it is just increment it
    this.portfolio.set(symbol, shares);
  }

  sell(symbol, shares) {
    const oldShares = this.portfolio.get(symbol);
    //if num of shares is 0, then delete it
    if (oldShares >= shares) {
      if (oldShares - shares === 0) {
        this.portfolio.delete(symbol);
      } else {
        this.portfolio.set(symbol, oldShares - shares);
      }
    } else {
      throw new ShareSaleException(symbol, shares, oldShares);
    }
  }

  getNumShares(symbol) {
    return this.portfolio.get(symbol);
  }
}

export default { Portfolio, ShareSaleException };
