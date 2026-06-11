/**
 * Leetcode-183
 * Customers Who Never Order
 * https://leetcode.com/problems/customers-who-never-order/
 * Easy
 */

select name as Customers 
from Customers
where id not in (select customerId from Orders);