/**
 * Leetcode-103
 * Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 * #Tree
 */

class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
     List<List<Integer>> result = new ArrayList<>();

        if(root == null){
            return result;
        }

        Deque<TreeNode> dequeue = new LinkedList<>();
        dequeue.addLast(root);
        Boolean reverse = false;
        while(!dequeue.isEmpty()){
            int level = dequeue.size();
            List<Integer> currentLevel = new ArrayList<>();
            for(int i=0;i< level;i++){
                if(!reverse){
                    TreeNode currentNode = dequeue.removeFirst();
                    currentLevel.add(currentNode.val);
                    if(currentNode.left != null){
                        dequeue.addLast(currentNode.left);
                        
                    }
                    if(currentNode.right != null){
                        dequeue.addLast(currentNode.right);
                    }
                }else{
                    TreeNode currentNode = dequeue.removeLast();
                    currentLevel.add(currentNode.val);
                    if(currentNode.right != null){
                        dequeue.addFirst(currentNode.right);
                    }
                    if(currentNode.left != null){
                        dequeue.addFirst(currentNode.left);   
                    }
                }
            }
            result.add(currentLevel);
            reverse = !reverse;
        }
        return result;   
    }
}