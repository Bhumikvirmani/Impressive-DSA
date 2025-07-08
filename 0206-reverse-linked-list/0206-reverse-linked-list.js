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
var reverseList = function(head) {
    let temp = head;
    let nextNode = null, prev = null;
    while(temp !== null){
        nextNode = temp.next;// Save next node
        temp.next = prev;       // Reverse the link
        prev = temp;            // Move prev forward
        temp = nextNode;        // Move temp forward

    }
    return prev;// ← This is the new head of the reversed list
};