const findMaxProfit = (prices) => {
  if(prices.length === 0) {
    return [];
  }

  let buyIndex;
  let currentSellIndex = prices.length - 1;
  let sellIndex;
  let sellPrice = prices[prices.length - 1];
  let maxDiff = Number.MIN_VALUE;

  for(let index=prices.length - 2; index>=0; index--) {
    const price = prices[index];
    if(price >= sellPrice) {
      sellPrice = price;
      currentSellIndex = index;
    } else {
      const currentDiff = (sellPrice - price);
      if (currentDiff > maxDiff) {
        maxDiff = currentDiff;
        sellIndex = currentSellIndex;
        buyIndex = index;
      }
    }
  }
  if(maxDiff === Number.MIN_VALUE) {
    return [];
  }

  return [buyIndex, sellIndex];
};

export default findMaxProfit;
