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
        Node node = new Node(val, null);
      if(head == null){
        head = node;
        return;
      }
      Node temp = head;
      while(temp.next != null){
          temp= temp.next;
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

    // insert using recursion

    public void insertRecursion(int val , int index){
        head  = insertRecursion(val,index, head);
    }

    public Node insertRecursion(int val, int index,Node temp){
        if(index == 0){
            Node node = new Node(val, temp);
            size++;
            return node;
        }
        temp.next = insertRecursion(val,index -1 ,temp.next);
        return temp;
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

    // problems
    public Node deleteDuplicates(Node head){
        if(head == null){
            return head;
        }
        Node temp = head;
        while(temp.next != null){
            if(temp.value == temp.next.value){
                temp.next = temp.next.next;
            }else{
                temp = temp.next;
            }
        }
        return head;
    }

    // merge

    public static LL merge(LL first, LL second){
        Node f = first.head;
        Node s = second.head;

        LL ans  = new LL();

        while(f != null && s != null){
            if(f.value < s.value){
                ans.insertLast(f.value);
                f = f.next;
            }else{
                ans.insertLast(s.value);
                s=s.next;
            }
        }
        while(f!=null){
            ans.insertLast(f.value);
            f = f.next;
        }
        while(s!=null){
            ans.insertLast(s.value);
            s=s.next;
        }

        return ans;

    }


    public static void main(String[] args) {
//        LL list = new LL();
//        list.insertLast(1);
//        list.insertLast(1);
//        list.insertLast(2);
//        list.insertLast(4);
//        list.insertLast(4);
//        list.display();
//        list.deleteDuplicates(list.head);
//        list.display();

        LL first = new LL();
        LL second = new LL();

        first.insertLast(1);
        first.insertLast(3);
        first.insertLast(5);

        second.insertLast(1);
        second.insertLast(2);
        second.insertLast(9);
        second.insertLast(4);

        first.display();
        second.display();

        LL ans = LL.merge(first,second);
        ans.display();
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
