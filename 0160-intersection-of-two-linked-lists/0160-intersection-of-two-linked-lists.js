/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // why I iterate more then its length bc they are not starting at the same point when they 
    // both start at the same point and keep skipping the value till they both point to the 
    // same node. But if there is no intersection then both will point to null at the same time.
    // I am using here two pointer pattern for iterating both linkedlist individually
    let i = headA, b = headB;

    while(i !== b){
        i = i ? i.next : headB;
        b = b ? b.next : headA;
    }
    return i;
};