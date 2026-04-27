public class QueueMain {
    public static void main(String[] args) throws Exception {


//        customQueue();
        circularQueue();
    }

    static void customQueue() throws Exception{
        customQueue queue = new customQueue(5);

        queue.insert(3);
        queue.insert(6);
        queue.insert(5);
        queue.insert(19);
        queue.insert(1);
        queue.display();

        System.out.println(queue.remove());
        queue.display();
    }

    static void circularQueue() throws Exception{
        CircularQueue queue = new CircularQueue(5);

        queue.insert(3);
        queue.insert(6);
        queue.insert(5);
        queue.insert(19);
        queue.insert(1);
        queue.display();

        System.out.println(queue.remove());
        queue.insert(133);
        queue.display();

        System.out.println(queue.remove());
        queue.insert(99);
        queue.display();
    }


}
