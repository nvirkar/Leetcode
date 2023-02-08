// Leetcode-234
// Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/description/

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode curr = head;
        ListNode next = head;
        ListNode prev = null;

        if(head == null || head.next == null){
            return head;
        }

        while(curr!=null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public boolean isPalindrome(ListNode head) {
        ListNode mid = middleNode(head);
        ListNode headSecond = reverseList(mid);
        ListNode reverseHead = headSecond;

        while(head!= null && headSecond!= null){
            if(head.val != headSecond.val){
                break;
            }
            head = head.next;
            headSecond = headSecond.next;
        }

        reverseList(reverseHead);

        if(head == null || headSecond == null){
            return  true;
        }
        return false;
    }
}