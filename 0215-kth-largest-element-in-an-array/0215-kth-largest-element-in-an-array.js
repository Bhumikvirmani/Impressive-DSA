/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MinPriority{
    constructor() {
        this.heap = [];
    }

    // Helper methods to calculate parent and children indices
    parent(idx) { return Math.floor((idx - 1) / 2); }
    leftChild(idx) { return 2 * idx + 1; }
    rightChild(idx) { return 2 * idx + 2; }

    // Swap elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert element and heapify up to maintain min-heap
    enqueue(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    // Moves element at idx up to maintain heap property
    heapifyUp(idx) {
        while (idx > 0 && this.heap[idx] < this.heap[this.parent(idx)]) {
            this.swap(idx, this.parent(idx));
            idx = this.parent(idx);
        }
    }

    // Remove and return the min element (root)
    dequeue() {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.heapifyDown(0);
        return min;
    }

    // Moves element at idx down to maintain heap property
    heapifyDown(idx) {
        let smallest = idx;
        const left = this.leftChild(idx);
        const right = this.rightChild(idx);

        if (left < this.size() && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.size() && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== idx) {
            this.swap(idx, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Peek min element without removing
    front() {
        return this.size() === 0 ? undefined : { element: this.heap[0] };
    }

    // Get size of heap
    size() {
        return this.heap.length;
    }
}

// Function to find k-th largest element using MinPriorityQueue
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriority();

    for (const num of nums) {
        minHeap.enqueue(num);

        // Keep heap size at most k
        if (minHeap.size() > k) {
            minHeap.dequeue();
        }
    }

    // The root of the min-heap is the k-th largest element
    return minHeap.front().element;
};
    

    