/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // Edge case: empty list or single node
    if (!head || !head.next) return head;

    // Step 1: Calculate the length of the linked list
    let length = 0, node = head;
    while (node) {
        length++;
        node = node.next;
    }

    // Dummy node simplifies edge case handling (e.g. updating head)
    const dummy = new ListNode(0);
    dummy.next = head;

    // Step 2: Bottom-up merge sort loop — sublist sizes: 1, 2, 4, ...
    for (let size = 1; size < length; size *= 2) {
        let cur = dummy.next;     // Starting point for this pass
        let tail = dummy;         // Tail of the merged list segment

        while (cur) {
            // Step 3: Split list into two parts of 'size' nodes each
            let left = cur;
            let right = split(left, size);   // Second chunk
            cur = split(right, size);        // Next pair for next iteration

            // Step 4: Merge the two sorted chunks
            const merged = mergeNode(left, right);

            // Step 5: Stitch the merged segment into the final list
            tail.next = merged.head;
            tail = merged.tail;
        }
    }

    // Return the new head of the sorted list
    return dummy.next;
};

function split(head,size){
    for(let i = 1; head && i < size; i++){ // here head ensure is not null if its null then no need to go for the next pointer ;
        head = head.next;
    }
    if(!head)return null;
    let second = head.next;//give the second half 
    head.next = null;
    return second;
}

function mergeNode(left,right){
    const dummy = new ListNode(0);
    let pointer = dummy;

    while(left && right){
        if(left.val < right.val){
            pointer.next = left;
            left = left.next;
        }else{
            pointer.next = right;
            right = right.next;
        }
        pointer = pointer.next;
    }

    pointer.next = left || right;

    while(pointer.next)pointer = pointer.next;
    return {head:dummy.next, tail: pointer};
}