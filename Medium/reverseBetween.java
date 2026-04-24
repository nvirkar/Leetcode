/**
 * Leetcode-92
 * Reverse Linked List II
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 * #Linked List
 */


class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
             if(left == right){
            return head;
        }

        ListNode prev = null;
        ListNode curr = head;

        for(int i=0; curr!= null && i< left-1;i++){
            prev = curr;
            curr = curr.next;
        }

        ListNode last = prev;
        ListNode next = curr;
        ListNode newEnd = curr;

        for(int i=0; curr!=null && i< right -left + 1;i++){
            next = next.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        if(last == null){
            head = prev;
        }else{
            last.next = prev;
        }

        newEnd.next =curr;
        return head;
    }
}