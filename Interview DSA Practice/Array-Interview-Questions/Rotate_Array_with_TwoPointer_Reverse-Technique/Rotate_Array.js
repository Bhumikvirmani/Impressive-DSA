const readline = require("readline");

/**
 * Sets up CLI input/output
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Wraps readline.question into a Promise for async/await usage
 * @param {string} query - The prompt to display
 * @return {Promise<string>}
 */
const ask = (query) => new Promise(resolve => rl.question(query, resolve));

/**
 * Rotates an array to the right by k steps using cyclic replacement algorithm
 * This performs the operation in-place with O(1) extra space.
 *
 * @param {number[]} nums - The array to rotate
 * @param {number} k - Number of steps to rotate
 * @return {number[]} The mutated nums array
 */
function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    let count = 0;

    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];

        do {
            const next = (current + k) % n;
            const temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }

    return nums;
}

/**
 * Asynchronously prompts user for array rotation input and displays result
 */
(async () => {
    // Step 1: Get array size
    const lenStr = await ask("Enter array length: ");
    const N = parseInt(lenStr);

    // Step 2: Get rotation count
    const kStr = await ask("Enter number of steps to rotate: ");
    const K = parseInt(kStr);

    // Step 3: Get array values
    const valuesStr = await ask(` Enter ${N} space-separated elements: `);
    const nums = valuesStr.trim().split(" ").map(Number);

    // Validation
    if (nums.length !== N) {
        console.log(`You entered ${nums.length} values. Expected ${N}.`);
        rl.close();
        return;
    }

    // Step 4: Rotate and output
    rotate(nums, K);
    console.log("Rotated array:", nums);

    rl.close();
})();
/**
 * Rotates the array to the right by k steps using in-place reversal.
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]} Modified in-place
 */
// Method 2: Reversal Technique 
// function rotateInPlace(nums, k) {
//     let n = nums.length;
//     k %= n; // Normalize rotation

//     reverse(nums, 0, n - 1);     // Step 1: reverse full array
//     reverse(nums, 0, k - 1);     // Step 2: reverse first k elements
//     reverse(nums, k, n - 1);     // Step 3: reverse remaining elements

//     return nums;
// }

// /**
//  * Helper to reverse a portion of the array.
//  * @param {number[]} nums
//  * @param {number} start
//  * @param {number} end
//  */
// function reverse(nums, start, end) {
//     while (start < end) {
//         let temp = nums[end];
//         nums[end] = nums[start];
//         nums[start] = temp;
//         start++;
//         end--;
//     }
// }