class Solution {
    public int[] maxSubsequence(int[] nums, int k) {
        
        PriorityQueue<int[]> topMinHeap = new PriorityQueue<>((a,b)-> a[0]-b[0]);
        
        // Step 1: Add elements to minHeap while keeping track of indices
        for(int i= 0; i< nums.length; i++){
            topMinHeap.offer(new int[]{nums[i],i});
            if(topMinHeap.size()>k){
                topMinHeap.poll();// Remove smallest element when size exceeds k
            }
        }
        // Step 2: Extract top k elements
        List<int[]> topk = new ArrayList<>(topMinHeap);
        // Step 3: Sort extracted elements by their original index
        topk.sort(Comparator.comparingInt(a->a[1])); 
        // Step 4: Convert the result to an integer array
        return topk.stream().mapToInt(a -> a[0]).toArray();
    }
}