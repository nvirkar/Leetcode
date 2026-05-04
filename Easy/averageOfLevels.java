/**
 * Leetcode-637
 * Average of Levels in Binary Tree
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 * #Tree
 */

class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> result = new ArrayList<>();

        if(root == null){
            return result;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            int level = queue.size();
            double levelSum = 0;
            for(int i=0;i< level;i++){
                TreeNode currentNode = queue.remove();
                levelSum = levelSum + currentNode.val;
                if(currentNode.left != null){
                    queue.add(currentNode.left);
                }
                if(currentNode.right != null){
                    queue.add(currentNode.right);
                }
            }
            result.add(levelSum/level);
        }
        return result;
    }
}