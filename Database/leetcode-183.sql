-- https://leetcode.com/problems/customers-who-never-order/
-- Customers Who Never Order

select C.name as Customers from
Customers C 
where C.id not in (select customerId from Orders)