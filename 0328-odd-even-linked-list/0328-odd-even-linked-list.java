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

        // Split the List into two half with the help of new LinkedList of oddNodes/ evenNodes and then add it into the result LinkedList Node by iterating into the both odd and evenNodes list and return the result head;
        if(head == null || head.next == null)return head;

        List<ListNode> oddNodes = new ArrayList<>();
        List<ListNode> evenNodes = new ArrayList<>();
        ListNode temp = head;
        int index = 1;
        while(temp != null){
            if(index % 2 != 0){
                oddNodes.add(temp);
            }else{
                evenNodes.add(temp);
            }
            temp = temp.next;
            index++;
        }

        ListNode newHead = oddNodes.get(0);
        ListNode current = newHead;

        for(int i = 1; i <oddNodes.size(); i++){
            current.next = oddNodes.get(i);
            current = current.next;
        }

        for(int i = 0; i <evenNodes.size(); i++){
            current.next = evenNodes.get(i);
            current = current.next;
        }
        current.next = null;
        return newHead;
        // We are gonna use the Two Pointer one will iterate the odd index and even will iterate the even index and we will take one temp variable to store the pointer of the even head so that even can iterate the even head will be used to join the node of odd with it whenever required 

    //     if(head == null || head.next == null)return head;

    //     // odd will point to the odd nodes and even will points to even Nodes 
    //     ListNode odd = head, even = head.next, headeven = even;
    //     while(even != null && even.next != null){
    //         // odd will point and jump two steps as well as even 
    //         odd.next = odd.next.next;
    //         even.next = even.next.next;
    //         // then update the state of odd/ even to new Node
    //         odd = odd.next;
    //         even = even.next;
    //     }
    //     // then connect the odd with the even head at last so that even nodes moves to the last place after Odd Nodes
    //     odd.next = headeven;
    //     return head;
    // }
        
    }
}

