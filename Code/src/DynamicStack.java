public class DynamicStack extends customStack{
    public DynamicStack(){
        super();
    }
    public DynamicStack(int size){
        super(size);
    }

    @Override
    public boolean push(int item) {
        if(this.isFull()){
            int[] temp = new int[data.length * 2];

            // copy all previous in new data

            for(int i=0;i< data.length;i++){
                temp[i] = data[i];

            }
            data = temp;
        }
        // at this point simply add
        // insert item
        return  super.push(item);
    }
}
