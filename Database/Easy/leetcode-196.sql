/**
 * Leetcode-196
 * Delete Duplicate Emails
 * https://leetcode.com/problems/delete-duplicate-emails/
 * Easy
 */

delete
from Person
where id not in (
    select id from (
        select min(id) as id
        from Person
        group by email
    )temp
);