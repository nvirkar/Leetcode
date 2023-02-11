// Leetcode-25
// Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

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
            ListNode next = curr.next;
            for(int i=0; curr!=null && i < k;i++){
                curr.next = prev;
                prev = curr;
                curr = next;
                if(next != null)
                    next = next.next;
            }
            if(last != null){
                last.next = prev;
            }else{
                head = prev;
            }
            newEnd.next = curr;

            if(curr == null){
                break;
            }
            prev = newEnd;
            ListNode temp = curr;
            // jumps is always 1 less than node
            for(int i = 0; i<k-1;i++){
                temp = temp.next;
                if(temp == null){
                    break outerloop;
                }
            }
        }
        return  head;
      }
}