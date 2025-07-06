/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //  Method 1: Using Reverse and Two Pointer 
    // let n = nums.length;
    // k %= n; // Get the Point of How much we have to rotate and check if its not get over the size of the array 
    // reverse(nums,0, n-1); // reverse the whole array 
    // reverse(nums, 0, k-1); // reverse till the point of k 
    // reverse(nums, k, n-1);// reverse the other part after k till length of the array
    // return nums;

    const n = nums.length;
    k %= n;
    let count = 0;
    //  cyclic replacement algo 
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
};

// function reverse(nums, start, end){
//     while(start < end){
//         let temp = nums[end];
//         nums[end] = nums[start];
//         nums[start] = temp;
//         start++;
//         end--;
//     }
// }
