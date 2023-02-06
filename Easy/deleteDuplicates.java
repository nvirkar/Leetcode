// Leetcode-83
//  Remove Duplicates from Sorted List
//  https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/


class Solution {
   public ListNode deleteDuplicates(ListNode head) {
       ListNode temp = head;
       if(head == null){
           return head;
       }
       while(temp.next != null){
           if(temp.val == temp.next.val){
               temp.next = temp.next.next;
           }else{
               temp = temp.next;
           }
       }
       return head;
    }
}