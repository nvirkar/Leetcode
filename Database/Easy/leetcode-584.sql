/**
 * Leetcode-584
 * Find Customer Referee
 * https://leetcode.com/problems/find-customer-referee/description/
 * Easy
 */

select name 
from Customer
where referee_id not in (2)
or referee_id is null;