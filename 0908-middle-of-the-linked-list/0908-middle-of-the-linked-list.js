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
var middleNode = function(head) {
    // const newhead = null;
    // let temp = head;
    // let count = 0;
    // while(temp !== null){
    //     count++;
    //     temp = temp.next;
    // }
    // let middle = Math.floor(count / 2);
    // temp = head;
    // count = 0;
    // while(count < middle){
    //     count++;
    //     temp = temp.next;
    // }
    // return temp;
    let slow = head, fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};