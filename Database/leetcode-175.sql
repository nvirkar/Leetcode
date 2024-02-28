-- https://leetcode.com/problems/combine-two-tables/
-- Combine Two Tables

select P.firstName, P.lastName, A.city, A.state
from Person P left join Address A
on P.personId = A.personId;