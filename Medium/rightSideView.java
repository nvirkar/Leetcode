/**
 * Leetcode-199
 * Binary Tree Right Side View
 * https://leetcode.com/problems/binary-tree-right-side-view/description
 * #Tree
 */

class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();

        if(root == null){
            return result;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            int level = queue.size();
            
            for(int i=0;i< level;i++){
                TreeNode currentNode = queue.remove();
                if(i == level-1){
                    result.add(currentNode.val);
                }
                if(currentNode.left != null){
                    queue.add(currentNode.left);
                }
                if(currentNode.right != null){
                    queue.add(currentNode.right);
                }
            }
        }
        return result;
    }
}