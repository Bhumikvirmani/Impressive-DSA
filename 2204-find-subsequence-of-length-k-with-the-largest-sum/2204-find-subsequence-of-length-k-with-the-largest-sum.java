class Solution {
    public int[] maxSubsequence(int[] nums, int k) {
//  why we dont use sliding window bc array is a subsequence not contiguous subarray
// so we use sorting to sort the whole array descendingly and then select the top k element and sort them with there original index
        int[][] indexNums = new int[nums.length][2];
        for(int i = 0; i < nums.length; i++){
            // Store value & index
            indexNums[i] = new int[]{nums[i],i};
        }
        // Sort by value descending
        Arrays.sort(indexNums,(a,b) -> Integer.compare(b[0],a[0]));
        // Select top k elements
        int[][] topk = Arrays.copyOfRange(indexNums,0, k);
        // Sort by original index
        Arrays.sort(topk, (a,b)-> Integer.compare(a[1],b[1]));

        // Convert the array into stream and as we need the array into the primitive strean 
        // and extracting the first integer from every stream and convert to array as ans 
        return Arrays.stream(topk).mapToInt(a -> a[0]).toArray();
    }
}