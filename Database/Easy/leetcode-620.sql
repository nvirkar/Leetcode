/**
 * Leetcode-620
 * Not Boring Movies
 * https://leetcode.com/problems/not-boring-movies/
 * Easy
 */

select * 
from Cinema
where description != "boring" and id % 2 = 1
order by rating desc 