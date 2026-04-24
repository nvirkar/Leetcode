/**
 * Leetcode-142
 * Linked List Cycle II
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 * #Linked List
 */


public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast= fast.next.next;

            if(slow == fast){
                break;
            }
        }

        if(fast == null || fast.next == null){
            return null;
        }

        int length = 0;
        do{
            length = length + 1;
            fast = fast.next;
        }while(fast != slow);

        ListNode  f = head;
        ListNode s = head;

        while(length !=0){
            s= s.next;
            length--;
        }

        while(f != s){
            f = f.next;
            s = s.next;
        }

        return f;
      
    }
}