/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {

        // this aglo is called Tortoise and Hare Algorithm
        if(head == null)return false;

        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;// move one step
            fast = fast.next.next;// move two step

            // If slow and fast meet, there is a cycle.
            if(slow == fast){
                return true;
            }
        }
        // Fast reached the end; no cycle.
        return false;
    }
}