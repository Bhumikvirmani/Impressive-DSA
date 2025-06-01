class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        Arrays.sort(nums);
        int n = nums.length;
        for(int i = 0; i < n-2; i++){
            // Skip duplicates for the first element
            if(i > 0 && nums[i] == nums[i - 1])continue;
            int target = -nums[i];
            int left = i + 1;
            int right = n -1;

            while(left < right){
                int sum = nums[left] + nums[right];
                if(sum == target){
                    ans.add(Arrays.asList(nums[i], nums[left],nums[right]));

                    // Skip duplicates for left pointer
                    while(left < right && nums[left] == nums[left + 1]) left++;
                    // Skip duplicates for right pointer
                    while(left < right && nums[right] == nums[right-1])right--;

                    left++;
                    right--;
                }
                else if(sum > target){
                    if(nums[right] == nums[right- 1])right--;
                    right--;
                }
                else{
                    if(nums[left] == nums[left+1])left++;
                    left++;
                }
            }  
        }
        return ans;
    }
}
