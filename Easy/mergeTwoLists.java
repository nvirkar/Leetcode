// Leetcode-21
// Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/description/


class Solution {
   public ListNode mergeTwoLists(ListNode head1, ListNode head2) {
        ListNode head  = new ListNode();
        ListNode temp = head;

        while(head1 != null && head2 !=null){
            if(head1.val < head2.val){
                temp.next = new ListNode(head1.val);
                head1 = head1.next;
            }else{
                temp.next = new ListNode(head2.val);
                head2 = head2.next;
            }
            temp = temp.next;
        }

        while(head1 != null){
            temp.next = new ListNode(head1.val);
            head1 = head1.next;
            temp = temp.next;
        }


        while(head2 != null){
            temp.next = new ListNode(head2.val);
            head2 = head2.next;
            temp = temp.next;
        }
        return  head.next;
    }
}