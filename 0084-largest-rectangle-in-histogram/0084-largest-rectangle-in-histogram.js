/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // We use a stack to keep track of bars (with their index and height)
    let stack = [];
    // Variable to keep the maximum area found so far
    let maxArea = 0;

    // Loop through each bar, plus one extra time for height = 0 at the end
    for (let i = 0; i <= heights.length; i++) {
        // For the end, pretend there is a zero-height bar
        let currentHeight = (i === heights.length ? 0 : heights[i]);
        // Last index is where the rectangle for current bar can start
        let lastIndex = i;

        // Pop bars from the stack until the current bar is taller or stack is empty
        while (stack.length && stack[stack.length - 1].height > currentHeight) {
            // Pop top bar from stack (it is smaller than current)
            let { index, height } = stack.pop();

            // Width: from last popped index to current position i
            let width = i - index;

            // Calculate area with this height
            let area = height * width;

            // Update maxArea if this area is bigger than previous
            maxArea = Math.max(maxArea, area);

            // Remember the position of the popped bar
            lastIndex = index;
        }

        // Push the current bar onto the stack with last index (might be moved back)
        stack.push({ index: lastIndex, height: currentHeight });
    }

    // Return the biggest area found
    return maxArea;
};