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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Creating a dummy node as a starting point
        ListNode dummy = new ListNode(-1);
        ListNode current = dummy;

        // - This loop processes nodes as long as both lists have elements.
        // Once one of the lists is null, the loop exits.
        // The remaining nodes in either list1 or list2 are already sorted, so we simply attach the rest.

        while(list1 != null && list2 != null){
            if(list1.val < list2.val){
                current.next = list1;
                list1 = list1.next;
            }
            else{
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        // Attach remaining nodes from list1 or list2
        if(list1 != null){
            current.next = list1;
        }
        else{
            current.next = list2;
        }
        // Return merged list starting at first valid node
        return dummy.next;
    }
    
}