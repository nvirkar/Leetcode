// Leetcode-143
// Reorder List
// https://leetcode.com/problems/reorder-list/description/


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
        ListNode mid = middleNode(head);
        ListNode firstHead = head;
        ListNode secondHead = reverseList(mid);
        ListNode temp;
        while(firstHead !=null && secondHead !=null){
            temp = firstHead.next;
            firstHead.next = secondHead;
            firstHead = temp;
            
            temp = secondHead.next;
            secondHead.next = firstHead;
            secondHead = temp;

        }
        
            if(firstHead != null){
                firstHead.next = null;
            }
    }
   
}