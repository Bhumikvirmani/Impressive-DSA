/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for(let i = 0; i < prices.length; i++)
    {
        if(prices[i] - min > max)
        {
              max = prices[i] - min;
        }
        if(prices[i] < min)
        {
            min = prices[i];
        }
    }
    return max;
};