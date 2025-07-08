/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const nextGreater = new Map();
    const stack = [];

    for(const num of nums2){
        while(stack.length && stack[stack.length - 1] < num){
            const smaller = stack.pop();
            nextGreater.set(smaller,num);
        }
        stack.push(num);
    }
    return nums1.map(value => nextGreater.get(value)?? -1);
};