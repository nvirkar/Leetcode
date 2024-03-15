// 
// 
// 

/**
 * Leetcode-141
 * Linked List Cycle
 * https://leetcode.com/problems/linked-list-cycle/description/
 * #Linked List
 */


public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if(slow == fast){
                return true;
            }
        }
        return false;
    }
}