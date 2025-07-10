/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // In one pass we can use Horse Torso pattern also known as Fast - Slow Pattern 
    // Why is that? Because here the nth node has to be deleted from the back
    // First I thought to run one loop to get the length, then one more loop till before the nth
    // But if someone is run first till the nth point, and another follows behind with a gap of n...
    // ...we can land exactly one node before the target—perfect spot to delete

    // Dummy node helps in handling edge cases like deleting the head
    let dummy = new ListNode(-1);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    // Move horse (fast) n+1 steps ahead so torso (slow) sits right before the node to delete
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Keep both moving until horse reaches the end
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Now torso is just before the target node, perform deletion
    slow.next = slow.next.next;

    // Return new head
    return dummy.next;
};