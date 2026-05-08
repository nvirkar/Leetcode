/**
 * Leetcode-230
 * Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/description
 * #Tree
 */

class Solution {
    int count = 0;

    public int kthSmallest(TreeNode root,int k){
        return helper(root,k).val;
    }

    public TreeNode helper(TreeNode root, int k) {
        if(root == null){
            return null;
        }
       
        TreeNode left = helper(root.left,k);
        if(left != null){
            return left;
        }
        count++;
        if(count == k){
            return root;
        }

        return helper(root.right , k);
    }
}