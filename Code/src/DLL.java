public class DLL {
    private Node head;

    public void insertFirst(int val){
        Node node = new Node(val);
        node.next = head;
        node.prev = null;

        if(head != null){
            head.prev = node;
        }
        head = node;
    }

    public void display(){
        Node node = head;
        Node last = head;
        while(node !=null){
            System.out.print(node.value +"-> ");
            last = node;
            node = node.next;
        }
        System.out.print("END");
        System.out.println();

        System.out.println("Reverse ");
        while(last != null){
            System.out.print(last.value +" <-");
            last = last.prev;
        }
        System.out.print("START");
    }


    public void insertLast(int val){
        Node node = new Node(val);
        Node last = head;
        node.next = null;

        if(head ==null){
            node.prev = null;
            head = node;
            return;
        }

        while(last.next != null){
            last = last.next;
        }
        last.next = node;
        node.prev = last;
    }

    public void insertAfter(int after, int val){
        Node temp = head;
        while(temp.value != after){
            temp = temp.next;
        }
        Node node = new Node(val);

        node.next = temp.next;
        if(temp.next == null){
            temp.next = node;
            node.prev = temp;

            return;
        }
        temp.next.prev = node;
        temp.next = node;
        node.prev = temp;
    }




    private class Node {
        int value;
        Node prev;
        Node next;
        public Node(int val){
            this.value = val;
        }

        public Node (int val, Node next, Node prev){
            this.value = val;
            this.next = next;
            this.prev = prev;
        }

    }
}
