// Leetcode-206
// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

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
}