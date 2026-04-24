/**
 * Leetcode-61
 * Rotate List
 * https://leetcode.com/problems/rotate-list/description/
 * #Linked List
 */

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
         if(k <=0 || head == null || head.next == null){
            return head;
        }

        int length = 0;
        ListNode temp = head;
        ListNode originalEnd = head;
        while(temp != null){
            originalEnd = temp;
            length = length + 1;
            temp = temp.next;
        }

        int rotations = k % length;
        originalEnd.next = head;

        int skip = length - rotations;
        temp = head;
        for(int i=0; i< skip -1 ;i++){
            temp = temp.next;
        }
        head = temp.next;
        temp.next = null;
        return head;
    }
}