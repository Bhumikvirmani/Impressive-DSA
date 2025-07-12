/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // we Can use horse torse approch when both meet at some point that means there is a cycle

    let slow = head, fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast)return true;
    }
    return false;

    // I use hashmap and set that will keep track the values of linkedlist into it and if it seen again it will print true;

    // But this solution take the space complexity of O(n) to optimize this into O(1)
    // let seenMap = new Map();
    // while(head){
    //     if(seenMap.has(head))return true;
    //     seenMap.set(head,true);
    //     head = head.next;
    // }
    // return false;
    // let seen = new Set();
    // while(head){
    //     if(seen.has(head))return true;
    //     seen.add(head);
    //     head = head.next;
    // }
    // return false;
};