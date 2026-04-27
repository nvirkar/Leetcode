public class customStack {

    protected  int[] data;
    private static final int DEFAULT_SIZE = 10;
    int ptr = -1;

    customStack(){
        this(DEFAULT_SIZE);
    }

    customStack(int size){
        this.data = new int[size];
    }

    public boolean push(int item){

        if(isFull()){
            System.out.println("Stack is full");
            return  false;
        }

        ptr++;
        this.data[ptr] = item;
        return  true;
    }

    public int pop() throws Exception{
        if(isEmpty()){
            throw new Exception("Cannot pop from empty stack");
        }
//        int removed = data[ptr];
//        ptr--;
//        return  removed;

        return  data[ptr--];
    }

    public int peek() throws Exception{
        if(isEmpty()){
            throw new Exception("Cannot peep from empty stack");
        }
        return  data[ptr];
    }



    public boolean isFull(){
        return  ptr == data.length -1; // ptr is at last index
    }

    private boolean isEmpty(){
        return  ptr == -1;
    }


}
