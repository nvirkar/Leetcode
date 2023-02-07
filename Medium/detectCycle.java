// Leetcode-142
// Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/description/


public class Solution {
 public ListNode detectCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        int length =0;

        while(fast!=null && fast.next != null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow) break;
        }
        if(fast == null || fast.next == null){
            return null;
        }
        
        // length of loop
        do{
            fast = fast.next;
            length++;

        }while(fast != slow);

        slow = head;
        while(length > 0){
            slow = slow.next;
            length--;
        }

       while (head != slow) {
            head = head.next;
            slow = slow.next;
        }
        return head;
    }
}