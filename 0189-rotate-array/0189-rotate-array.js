/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length;
    k %= n;
    reverse(nums,0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
    return nums;
};

function reverse(nums, start, end){
    while(start < end){
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;
    }
}