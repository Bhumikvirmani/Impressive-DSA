/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Edge case: Empty list or single node is always a palindrome
    if (!head || !head.next) return true;

    // Step 1: Use two pointers to find the middle of the list
    // slow moves one step, fast moves two steps
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;           // moves one step
        fast = fast.next.next;      // moves two steps
    }
    // At this point, slow is at the middle of the list

    // Step 2: Reverse the second half of the list starting from slow
    let prev = null;
    while (slow) {
        let temp = slow.next;       // store next node
        slow.next = prev;           // reverse current pointer
        prev = slow;                // move prev forward
        slow = temp;                // move to next node
    }
    // prev now points to the head of reversed second half

    // Step 3: Compare first half and reversed second half
    let left = head, right = prev;
    while (right) {                 // right is shorter or equal
        if (left.val !== right.val) return false;  // mismatch found
        left = left.next;           // move forward
        right = right.next;         // move forward
    }

    // If all matched, it's a palindrome
    return true;
};