/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        // Find middle index between low and high
        let mid = Math.floor((low + high) / 2);

        // Ensure mid is even, to represent the first element in a pair.
        // This is because pairs start at even indices, and second element at odd indices.
        if (mid % 2 === 1) {
            mid--;
        }

        // Check if the element at mid equals the next element (mid + 1)
        if (nums[mid] === nums[mid + 1]) {
            // If they are equal, this means the pair is intact at [mid, mid + 1].
            // The single element must be further right (after this pair),
            // so move the low pointer past this pair.
            low = mid + 2;
        } else {
            // If they are NOT equal, the single element is at mid or to the left.
            // So move the high pointer to mid.
            high = mid;
        }
    }

    // When low meets high, it points to the single element.
    return nums[low];
};