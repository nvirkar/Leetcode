/**
 * Leetcode-1290
 * Convert Binary Number in a Linked List to Integer
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
 * #Linked List
 */

class Solution {
    public int getDecimalValue(ListNode head) {
       ListNode temp = head;
       int length = 0;
       int sum = 0;
       while(temp.next !=null){
           length++;
           temp = temp.next;
       }
       temp = head;
        for(int i = length; i> -1; i--){
            sum = sum + temp.val * (int)Math.pow(2,i);
            temp = temp.next;
        }
       return sum;
    }
}