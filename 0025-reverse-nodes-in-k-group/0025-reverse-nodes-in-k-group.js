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
var reverseKGroup = function(head, k) {
    // A dummy node helps simplify pointer operations. Think of it like a helper at the front of the train—it doesn’t hold a passenger but helps link compartments.
    let dummy = new ListNode(0);
    dummy.next = head;
    let previousGroup = dummy;

    while(true){
        //This locates the kth node ahead of previousGroup: From dummy → 1 → 2 → 3
        let kth = getkth(previousGroup, k);
        if(!kth)break;


        let nextGroup = kth.next;// nextGroup = node 4
        let prev = nextGroup; // prev = node 4
        let curr = previousGroup.next;  // curr = node 1

        while(curr !== nextGroup){ // it means we react to the next group point 
            let temp = curr.next; // store the next of curr pointer to make the next current
            curr.next = prev; // for example we have linkedlist like 1->2->3->4->5 k = 3 then next group will start from 4 after 3rd Node so if we reverse till 3 then 3-2-1-4-5 after 1 - 4 will come so we first join the curr.next pointer to the 4 which we store as prev as after that 1 will become prev why is that as 2 is next current and 2 will join to 1 due to that 1 will become previous for next iteration.
            prev = curr; // current will become previous as describe above 
            curr = temp; // new current will be next of head as head is the current previously
        }
        let temp = previousGroup.next; //  Save original head (now tail)
        previousGroup.next = kth; // Connect previousGroup → new head
        previousGroup = temp; // Move to tail for next group
    }
    return dummy.next;//dummy.next is the new head of the fully transformed linked list
};

function getkth(curr, k){
    while(curr && k > 0){
        curr = curr.next;
        k--;
    }
    return curr;
}