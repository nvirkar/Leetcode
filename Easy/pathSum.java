/**
 * Leetcode-112
 * Path Sum
 * https://leetcode.com/problems/path-sum/description
 * #Tree
 */

class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null){
            return false;
        }

        if(root.val == targetSum && root.right == null && root.left == null){
            return true;
        }

        boolean left = hasPathSum(root.left, targetSum - root.val);
        boolean right = hasPathSum(root.right, targetSum - root.val);

        return left || right;

    }
}