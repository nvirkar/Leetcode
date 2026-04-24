public class MergeSort {

    public ListNode sortList (ListNode head){
        if(head == null || head.next == null){
            return  head;
        }
        ListNode slow = head;
        ListNode fast = head;
        ListNode temp = head;

        while(fast !=null && fast.next != null){
            temp = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        temp.next = null;

        ListNode left = sortList(head);
        ListNode right = sortList(slow);

        return  mergeTwoLists(left,right);

    }


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



    public class ListNode {
      int val;
     ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
  }
}
