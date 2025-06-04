/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        // We are gonna use the Two Pointer one will iterate the odd index and even will iterate the even index and we will take one temp variable to store the pointer of the even head so that even can iterate the even head will be used to join the node of odd with it whenever required 

        if(head == null || head.next == null)return head;

        // odd will point to the odd nodes and even will points to even Nodes 
        ListNode odd = head, even = head.next, headeven = even;
        while(even != null && even.next != null){
            // odd will point and jump two steps as well as even 
            odd.next = odd.next.next;
            even.next = even.next.next;
            // then update the state of odd/ even to new Node
            odd = odd.next;
            even = even.next;
        }
        // then connect the odd with the even head at last so that even nodes moves to the last place after Odd Nodes
        odd.next = headeven;
        return head;
    }
}