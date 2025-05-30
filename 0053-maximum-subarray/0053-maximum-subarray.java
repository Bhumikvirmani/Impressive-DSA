class Solution {
    public int maxSubArray(int[] nums) {
        // int maxi = Integer.MIN_VALUE;

        // for(int i = 0 ; i < nums.length; i++){
        //     int sum = 0;
        //     for(int j = i; j < nums.length; j++){
        //         sum += nums[j];
        //         maxi = Math.max(maxi,sum);
        //     }
        // }
        // return maxi;
        // long maxi = Long.MIN_VALUE;
        int maxSum = Integer.MIN_VALUE,  start = 0, end = 0, currentSum = 0, tempStart= 0;

        for(int i= 0; i < nums.length; i++){
            if(currentSum <= 0){
                currentSum = nums[i];
                tempStart = i;
            }else{
                currentSum += nums[i];
            }

            if(currentSum > maxSum){
                maxSum = currentSum;
                start = tempStart;
                end = i;
            }
        }
        return maxSum;

    }
}