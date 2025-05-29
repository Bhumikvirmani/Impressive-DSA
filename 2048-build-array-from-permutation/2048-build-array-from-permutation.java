class Solution {
    public int[] buildArray(int[] nums) {
        // Using Recurssion
        int n = nums.length;
        createArray(nums,0, n);
        return nums;
    }
    private void createArray(int[] nums, int i, int e){
        if(i == e)return;
        int value = nums[nums[i]];
        createArray(nums,i+1, e);
        nums[i] = value;
    }
}