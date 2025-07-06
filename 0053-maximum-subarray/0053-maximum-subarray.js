/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0],maximum = nums[0];
    for(let i = 1; i < nums.length; i++){
        maximum = Math.max(nums[i], maximum + nums[i]);
        maxSum = Math.max(maxSum,maximum);
    }
    return maxSum;
};