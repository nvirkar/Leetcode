public class Main {
    public static void main(String[] args) {

        singleLL();
//        doubleLL();
//      circularLL();
    }

    public static void circularLL(){
        CLL list = new CLL();
        list.insert(23);
        list.insert(3);
        list.insert(19);
        list.insert(75);

        list.display();
        list.delete(19);
        list.display();

    }

    public static void doubleLL(){
        DLL list = new DLL();
        list.insertFirst(3);
        list.insertFirst(2);
        list.insertFirst(8);
        list.insertFirst(17);
        list.insertLast(99);
        list.insertAfter(99,65);

        list.display();
    }

    public static void singleLL(){
        LL list = new LL();
        list.insertFirst(3);
        list.insertFirst(2);
        list.insertFirst(8);
        list.insertFirst(17);
        list.insertLast(99);
        list.insert(100,3);
        list.display();
        System.out.println(list.deleteFirst());
        list.display();
        System.out.println(list.delete(2));
        list.display();
        list.insertRecursion(70,2);
        list.display();
    }

}
