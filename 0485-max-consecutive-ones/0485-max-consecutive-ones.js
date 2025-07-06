/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let current = 0;

    nums.forEach(value => {
        if (value === 1) {
            current++;
            max = Math.max(max, current);
        } else {
            current = 0;  // reset when hitting a 0
        }
    });

    return max;
};