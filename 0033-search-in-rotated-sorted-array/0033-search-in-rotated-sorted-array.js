/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if left half is sorted
        if (nums[low] <= nums[mid]) {
            // Target in the left sorted half?
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;  // search left half
            } else {
                low = mid + 1;   // search right half
            }
        } 
        // Otherwise right half must be sorted
        else {
            // Target in the right sorted half?
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;  // search right half
            } else {
                high = mid - 1; // search left half
            }
        }
    }

    return -1; // target not found
};