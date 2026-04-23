public class LL {

    private Node head;
    private Node tail;
    private int size;

    public LL(){
        this.size = 0;
    }

    public void insertFirst (int val){
        Node node = new Node(val);
        node.next = head;
        head = node;
        size++;
    }

    public void insertLast(int val){
       Node node = new Node(val);
       Node temp = head;
       while(temp.next != null){
           temp = temp.next;
       }
       temp.next = node;
       size++;
    }

    public void insert(int val, int index){
        if(index == 0){
            insertFirst(val);
            return;
        }
        if(index == size){
            insertLast(val);
            return;
        }

        Node temp = head;
        for(int i=1; i< index;i++){
            temp = temp.next;
        }

        Node node = new Node(val,temp.next);

        temp.next = node;
        size++;

    }

    public int deleteFirst(){
       int val = head.value;
       head = head.next;
       if(head == null){
           tail = null;
       }
       size--;
       return  val;
    }

    public int deleteLast(){
        if(size <=1){
            return deleteFirst();
        }

        Node temp = head;
        Node prev = head;
        while(temp.next != null){
            prev = temp;
            temp = temp.next;

        }
        prev.next = null;
        size--;
        return  temp.value;
    }
    
    public int delete(int index){
        if(index ==0){
            return deleteFirst();
        }

        Node temp = head;
        Node prev = head;
        for(int i=0;i< index;i++){
            prev = temp;
            temp = temp.next;
            
        }
        prev.next = temp.next;
        size--;
        return temp.value;
    }


    public Node get(int index){
        Node node = head;
        for(int i=0;i< index;i++){
            node = node.next;
        }
        return  node;
    }




    public void display(){
        Node temp = head;

        while(temp != null){
            System.out.print(temp.value + "-> ");
            temp = temp.next;
        }
        System.out.println("END");
    }



    private class Node{
        private int value;
        private Node next;

        public Node(int value){
            this.value = value;
        }

        public Node(int value, Node next){
            this.value = value;
            this.next = next;
        }
    }
}
