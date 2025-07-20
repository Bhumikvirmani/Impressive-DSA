/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // This will hold all unique subsets
    const result = [];

    // Sort the array so that duplicates are adjacent
    // Enables us to skip over duplicate branches in backtracking
    nums.sort((a, b) => a - b);

    // Kick off the recursive backtracking from index 0 with an empty tempList
    backtracking(result, [], nums, 0);

    // Return the collected subsets
    return result;
};

/**
 * Recursive helper to build subsets.
 *
 * @param {number[][]} result     - Accumulator for all subsets
 * @param {number[]}   tempList   - Current subset being built
 * @param {number[]}   nums       - Sorted input array
 * @param {number}     start      - Next index in nums to consider
 */
function backtracking(result, tempList, nums, start) {
    // At each call, push a copy of tempList into result.
    // This captures the subset formed so far (including the empty set).
    result.push([...tempList]);

    // Explore further elements to add to the current subset
    for (let i = start; i < nums.length; i++) {
        // Skip duplicates:
        // If the current element is the same as the previous one
        // and we are at the same recursive depth (i > start),
        // then including nums[i] here would recreate a subset
        // we've already generated in a previous loop iteration.
        if (i > start && nums[i] === nums[i - 1]) continue;

        // Include nums[i] in the current subset
        tempList.push(nums[i]);

        // Recurse to build all subsets that include nums[i].
        // We pass `i + 1` so that next calls only consider elements
        // to the right of the current index, ensuring we don't reuse it.
        backtracking(result, tempList, nums, i + 1);

        // Backtrack step:
        // Remove the last element before the next for-loop iteration
        // This restores tempList to its state at function entry.
        tempList.pop();
    }
}


