
import java.util.*;

public class InBuiltExamples {

    public static void main(String[] args) {
//        stack();
//        queue();

        deque();
    }

    static void deque(){
        Deque<Integer> deque = new ArrayDeque<>();

        deque.add(89);
        deque.addLast(78);
        deque.removeFirst();
    }


    static void queue(){
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(3);
        queue.add(6);
        queue.add(5);
        queue.add(19);
        queue.add(1);

        System.out.println(queue.remove());
        System.out.println(queue.remove());
    }

    static  void stack(){
        Stack<Integer> stack = new Stack<>();
        stack.push(34);
        stack.push(45);
        stack.push(2);
        stack.push(9);
        stack.push(18);

        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        System.out.println(stack.pop());
    }

}
