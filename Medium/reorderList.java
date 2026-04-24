/**
 * Leetcode-143
 * Reorder List
 * https://leetcode.com/problems/reorder-list/description/
 * #Linked List
 */


class Solution {

       public ListNode reverseList(ListNode head) {
        ListNode curr = head;
        ListNode next = head;
        ListNode prev = null;

        if(head == null || head.next == null){
            return head;
        }

        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

      public void reorderList(ListNode head) {
        if(head == null || head.next == null){
            return;
        }
        ListNode mid = middleNode(head);
        ListNode headSecond = reverseList(mid);
        ListNode headFirst = head;
        ListNode temp;

        while(headFirst != null && headSecond != null){
            temp = headFirst.next;
            headFirst.next = headSecond;
            headFirst = temp;

            temp = headSecond.next;
            headSecond.next = headFirst;
            headSecond = temp;
        }

        if(headFirst != null){
            headFirst.next = null;
        }
    }
   
}