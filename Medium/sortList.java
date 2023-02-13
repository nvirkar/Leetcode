// Leetcode-148
// Sort List
// https://leetcode.com/problems/sort-list/description/

class Solution {
     public ListNode sortList(ListNode head) {
        if(head == null || head.next == null){
             return head;
        }
        ListNode slow = head;
        ListNode fast = head;
        ListNode temp = head;
        while(fast != null && fast.next != null){
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;
        ListNode left_list = sortList(head);
        ListNode right_list = sortList(slow);
        return merge(left_list,right_list);
    }

    public ListNode merge(ListNode l1,ListNode l2){
        ListNode current_list = new ListNode(0);
        ListNode temp = current_list;

        while(l1 != null && l2 != null){
            if(l1.val < l2.val){
                temp.next = l1;
                l1 = l1.next;
            }else{
                temp.next = l2;
                l2 = l2.next;
            }
            temp = temp.next;
        }

        while(l1 != null){
            temp.next = l1;
            l1 = l1.next;
            temp = temp.next;
        }

        while(l2 != null){
            temp.next = l2;
            l2 = l2.next;
            temp = temp.next;
        }
        return current_list.next;
    }
}