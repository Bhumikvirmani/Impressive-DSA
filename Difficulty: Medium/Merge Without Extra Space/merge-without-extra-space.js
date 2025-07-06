class Solution {
    mergeArrays(a, b) {
        // Time Complexity: O((n + m) * log(n + m))
        // This method is based on the Gap Method (inspired by Shell Sort)
        // It merges two sorted arrays in-place by repeatedly comparing elements at a fixed gap
        // and reducing the gap until it becomes zero.
        const n = a.length;
        const m = b.length;
        // Initialize the first gap as the ceiling of half the combined length

        let gap = this.nextGap(n + m);
        
        // Loop until the gap is reduced to 0 (fully sorted)
        while(gap > 0){
            let i = 0, j = gap;
            // Compare and swap elements that are 'gap' apart in the virtual combined array
            while(j < n + m){
                // Retrieve value at position i (from a or b)
                let val1 = i < n ? a[i] : b[i - n];
                // Retrieve value at position j (from a or b)
                let val2 = j < n ? a[j] : b[j - n];

                // If out-of-order, swap based on actual source arrays
                if (val1 > val2) {
                    if (i < n && j < n) {
                        // Both elements in array a
                        [a[i], a[j]] = [a[j], a[i]];
                    } else if (i < n && j >= n) {
                        // i in a[], j in b[]
                        [a[i], b[j - n]] = [b[j - n], a[i]];
                    } else {
                        // Both elements in b[]
                        [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
                    }
                }
                i++;
                j++;
            }
            // Reduce the gap for the next iteration
            gap = this.nextGap(gap);
        }
    }
    // Helper to calculate next gap by halving and rounding up
    nextGap(gap){
        if(gap <= 1)return 0;
        return Math.ceil(gap / 2);
    }
}
