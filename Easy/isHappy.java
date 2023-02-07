// Leetcode-202
// Happy Number
// https://leetcode.com/problems/happy-number/description/


class Solution {
  public static boolean isHappy(int n) {
        int fast = n;
        int slow = n;
        do{
            slow = getSquareOfDigit(slow);
            fast = getSquareOfDigit(getSquareOfDigit(fast));
        }while(fast != slow);
        if(fast ==1)
        return true;
        return false;
    }

    public static int getSquareOfDigit(int n){
        int sum =0;
        while(n > 0){
            int digit = n %10;
            sum = sum + digit * digit;
            n = n/10;
        }
        return sum;
    }
}