/**
 * Leetcode-25
 * Reverse Nodes in k-Group
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 * #Linked List
 */

class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if(k<=1 || head == null){
            return head;
        }

        ListNode prev = null;
        ListNode curr = head;
        outerloop:
        while(true){
            ListNode last = prev;
            ListNode newEnd = curr;
            ListNode next = curr;
            for(int i=0; curr != null && i< k ;i++){
                next = next.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            if(last != null){
                last.next = prev;
            }else{
                head = prev;
            }

            newEnd.next = curr;

            if(curr == null){
                break outerloop;
            }
            prev =  newEnd;
            ListNode temp = curr;
            for(int i=0;i< k-1;i++){
                temp = temp.next;
                if(temp == null){
                    break outerloop;
                }
            }
        }
        return head;
    }
}