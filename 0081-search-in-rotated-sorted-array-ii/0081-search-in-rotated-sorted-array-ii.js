/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] === target) {
            return true;
        }
        // Handle triplicate ambiguity
        if(nums[low] === nums[mid] && nums[mid] === nums[high]) {
            low++;
            high--;
        }
        // Left half is sorted
        else if(nums[low] <= nums[mid]) {
            if(nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if(nums[mid] < target && target <= nums[high]) {
                low = mid + 1;     // <-- fixed variable name
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
};
