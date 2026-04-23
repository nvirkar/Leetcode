public class CLL {

    private Node head;
    private Node tail;

    public CLL(){
        this.head = null;
        this.tail = null;
    }

    public void insert(int val){
        Node node = new Node(val);
        if(head == null){
            head = node;
            tail = node;
            return;
        }
        tail.next = node;
        node.next = head;
        tail = node;
    }

    public void display(){
        Node temp = head;

        if(head != null){
            do{
                System.out.print(temp.val + " -> ");
                temp= temp.next;
            }while(temp !=head);
        }
        System.out.println();
    }

    public void delete(int val){
        Node temp  =head;
        if(temp == null){
            return;
        }
        if(temp.val == val){
           head = head.next;
           tail.next = head;
           return;
        }

        Node prev = temp;

        while(temp.val != val){
          prev = temp;
          temp = temp.next;
        }
        prev.next = temp.next;
    }




    private class Node{
        int val;
        Node next;

        public Node(int val){
            this.val = val;
        }


    }
}
