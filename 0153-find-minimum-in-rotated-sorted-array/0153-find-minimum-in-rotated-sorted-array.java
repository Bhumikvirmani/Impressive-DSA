class Solution {
    public int findMin(int[] nums) {
        // Initialize two pointers for the binary search.
        int left = 0, right = nums.length - 1;

        while(left < right){
            // If the subarray [left, right] is already sorted,
            // then the leftmost element is the minimum.
            if(nums[left] < nums[right]){
                return nums[left];
            }
            // Calculate the middle index.
            int mid = left +(right - left)/ 2;
            // If the mid element is greater than the rightmost element,
            // it means the minimum is somewhere to the right of mid.
            if(nums[mid] > nums[right]){
                left = mid + 1;
            }else{
                // Otherwise, the minimum is at mid or to its left.
                right = mid;
            }
        }
        return nums[left];
    }
}
