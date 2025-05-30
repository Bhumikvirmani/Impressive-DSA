class Solution {
    public int maxProduct(int[] nums) {
        // Prefix PostFix Product
        // int maxProduct = nums[0];
        // int forwardProduct = 1, backwardProduct = 1;

        // for (int i = 0; i < nums.length; i++) {
        //     forwardProduct = (forwardProduct == 0) ? 1 : forwardProduct;
        //     forwardProduct *= nums[i];
        //     maxProduct = Math.max(maxProduct, forwardProduct);
        // }

        // for (int i = nums.length - 1; i >= 0; i--) {
        //     backwardProduct = (backwardProduct == 0) ? 1 : backwardProduct;
        //     backwardProduct *= nums[i];
        //     maxProduct = Math.max(maxProduct, backwardProduct);
        // }

        // return maxProduct;

        //Kadanes Algorithm used 
        int maxProduct = nums[0];
        int currentMax = nums[0]; 
        int currentMin = nums[0]; 

        for (int i = 1; i < nums.length; i++) {
            int tempMax = currentMax;
            currentMax = Math.max(nums[i], Math.max(tempMax * nums[i], currentMin * nums[i]));
            currentMin = Math.min(nums[i], Math.min(tempMax * nums[i], currentMin * nums[i]));
            maxProduct = Math.max(maxProduct, currentMax);
        }

        return maxProduct;
    }
}