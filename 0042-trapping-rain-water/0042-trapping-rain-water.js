/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // Method 1: // This method uses two arrays to precompute the maximum bar height to the left and right of each index.
    // At each point i, the trapped water is determined by the minimum of maxLeft[i] and maxRight[i]
    // Because that minimum height tells us how high the water can sit at index i.
    // If minHeight <= height[i], it means no water is trapped at that point.
    // Else, water trapped = minHeight - height[i]
    // ----------------------------------------------------------------------------

    // if (height.length === 0) return 0;

    // const n = height.length;

    // Step 1: Create arrays to store max height to the left and right of each index
    // const maxLeft = new Array(n).fill(0);
    // const maxRight = new Array(n).fill(0);

    // Fill maxLeft: track tallest bar from the left up to each index
    // maxLeft[0] = height[0];
    // for (let i = 1; i < n; i++) {
        // maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
    // }

    // Fill maxRight: track tallest bar from the right up to each index
    // maxRight[n - 1] = height[n - 1];
    // for (let i = n - 2; i >= 0; i--) {
        // maxRight[i] = Math.max(maxRight[i + 1], height[i]);
    // }

    // Step 2: Calculate trapped water at each index using min(maxLeft, maxRight)
    // let totalWater = 0;
    // for (let i = 0; i < n; i++) {
        // const waterAtI = Math.min(maxLeft[i], maxRight[i]) - height[i];
        // totalWater += waterAtI;
    // }

    // Final result: total trapped water across all indices
    // return totalWater;
    //-------------------------------------------------------------------------------


    // Method 2: // This method optimizes space by removing the need for maxLeft and maxRight arrays.
    // Instead, it uses two pointers: left and right.
    // We also maintain leftMax and rightMax, which store the tallest bars seen so far from both sides.
    // The trick is: always process the side with the smaller height first, because that's the limiting wall.
    // Water trapped at current index = limiting wall height - current bar height


    const n = height.length;

    // Initialize two pointers: left starts at 0, right at end of array
    let left = 0, right = n - 1;

    // Track the tallest wall seen so far from both sides
    let leftmax = 0, rightmax = 0;

    // Accumulator to keep track of total trapped water
    let total = 0;

    // Loop until both pointers meet
    while (left < right) {
        // Decide which side to process based on the smaller height
        if (height[left] < height[right]) {
            // If current left bar is taller than leftmax, update leftmax
            // Otherwise, water trapped = leftmax - current height
            leftmax = Math.max(leftmax, height[left]);
            total += leftmax - height[left];
            left++; // Move left pointer forward
        } else {
            // If current right bar is taller than rightmax, update rightmax
            // Otherwise, water trapped = rightmax - current height
            rightmax = Math.max(rightmax, height[right]);
            total += rightmax - height[right];
            right--; // Move right pointer backward
        }
    }

    // Return the final result: total amount of trapped rain water
    return total;

};