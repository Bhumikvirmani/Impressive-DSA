/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1)return nums;

    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    return mergeArray(left, right);
};

function mergeArray(left, right){
    const result = [];
    let i = 0, j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i), right.slice(j));
}