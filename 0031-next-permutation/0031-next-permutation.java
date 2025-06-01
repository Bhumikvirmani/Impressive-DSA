class Solution {
    public void nextPermutation(int[] nums) {
        int n = nums.length;
        if (n <= 1) return;
        int i = n-1;


        while(i > 0 && nums[i] <= nums[i - 1]){
            i--;
        }
        // Step 2: If pivot is found, find the rightmost element greater than pivot
        if(i > 0){
            int index = i;

            for(int j = n - 1; j >= i; j--){
                if(nums[j] > nums[i - 1]){
                    index = j;
                    break;
                }
            }
            swap(nums, i-1 , index);
        }
        // Step 3: Reverse the suffix starting at i+1
        reverse(nums, i, n - 1);
    }
    private void swap(int[] nums, int i, int j){
            int temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
        }

    private void reverse(int[] nums, int i, int j){
        while(i < j){
            swap(nums,i, j);
            i++;
            j--;
        }
    }
}