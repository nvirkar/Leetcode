// Leetcode-61
// Rotate List
// https://leetcode.com/problems/rotate-list/description/

class Solution {
       public ListNode rotateRight(ListNode head, int k) {
        if(head ==  null || head.next == null){
            return head;
        }

        int length = 0;
        ListNode temp = head;
        while(temp != null){
            temp = temp.next;
            length++;
        }

        if(k % length != 0){
            k = k % length;
        }
        
        ListNode curr = head;
        ListNode next = curr.next;
        
        while(k!=0){
            while(next.next!=null){
                curr = next;
                next = next.next;
            }
            curr.next = null;
            next.next = head;
            head = next;
            k--;
        }
        return head;
        
    }
}