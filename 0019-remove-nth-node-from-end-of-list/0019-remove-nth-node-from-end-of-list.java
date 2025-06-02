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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int length = 0;
        ListNode temp = head;

        // First pass: Calculate the length of the list
        while(temp != null){
            length++;
            temp = temp.next;
        }

        // If we need to remove the first node
        if(length == n){
            return head.next;
        }
        // Second pass: Find the node before the one to be removed
        temp = head;
        for(int i = 0; i < length- n - 1; i++){
            temp = temp.next;
        }
        // Remove the nth node
        temp.next = temp.next.next;
        return head;
    }
}