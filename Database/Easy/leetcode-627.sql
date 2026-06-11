/**
 * Leetcode-627
 * Swap Sex of Employees
 * https://leetcode.com/problems/swap-sex-of-employees/description/
 * Easy
 */

update salary 
set sex = case
    when sex = 'f' then 'm'
    when sex = 'm' then 'f'
end;