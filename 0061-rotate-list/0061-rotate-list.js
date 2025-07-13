/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // Edge case: empty list, single node, or zero rotations
    if (!head || !head.next || k === 0) return head;

    // Step 1: Compute length and keep reference to the tail
    // Why: We need list length to calculate k % length and locate rotation point
    let length = 1;
    let fast = head;
    while (fast.next) {
        fast = fast.next;
        length++;
    }

    // Step 2: Reduce unnecessary rotations
    // Why: Rotating k times is equivalent to rotating (k % length) times
    k = k % length;
    if (k === 0) return head;

    // Step 3: Find new tail node (length - k steps from head)
    // Why: The node after this will be the new head after rotation
    let slow = head;
    for (let i = 1; i < length - k; i++) {
        slow = slow.next;
    }

    // Step 4: Rewire pointers to rotate list
    let temp = slow.next;      // New head
    slow.next = null;          // Break link to form new tail
    fast.next = head;          // Connect old tail to old head
    head = temp;               // Update head reference

    // Final rotated list
    return head;

};