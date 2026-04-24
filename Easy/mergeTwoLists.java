/**
 * Leetcode-21
 * Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 * #Linked List
 */


class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode();
        ListNode temp = head;

        while(list1 !=null && list2 != null){
            if(list1.val < list2.val){
                temp.next = new ListNode(list1.val);
                list1 = list1.next;
            }else{
                temp.next = new ListNode(list2.val);
                list2 = list2.next;
            }
            temp = temp.next;
        }
        while(list1 != null){
              temp.next = new ListNode(list1.val);
            list1 = list1.next;
            temp = temp.next;
        }

         while(list2 != null){
              temp.next = new ListNode(list2.val);
            list2 = list2.next;
            temp = temp.next;
        }
        
        return head.next;
    }
}