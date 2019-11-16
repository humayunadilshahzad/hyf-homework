 -- 1 - tasks in the task table
 
 select * from task;

-- 2 - taskes having not a valid due date
select * from task
where due_date is null;

-- 3 - Find all the tasks that are marked as done
 select * 
 from task
 inner join status
 where task.status_id=status.id and status.name = 'done';

-- 4 - Find all the tasks that are not marked as done
 select * 
 from task
 inner join status
 where task.status_id=status.id and status.name != 'done';

-- 5 - Get all the tasks, sorted with the most recently created first
select *
from task
order by created desc;

-- 6 - Get the single most recently created task
 select *
 from task
 order by created desc
 limit 1;

-- 7 - Get the title and due date of all tasks where the title or description contains database
 select title,due_date
 from task
 where title like '%database%' or description like '%database%';

-- 8 - Get the title and status (as text) of all tasks
 select title, status.name as text
 from task
 inner join status
 where task.status_id= status.id;

-- 9 - Get the name of each status, along with a count of how many tasks have that status
 select status.name, count(task.status_id) as Count
 from task
 inner join status on task.status_id = status.id
 group by task.status_id;
 
-- 10 - Get the names of all statuses, sorted by the status with most tasks first
 select status.name, count(task.status_id) as Count
 from task
 inner join status on task.status_id = status.id
 group by task.status_id
 order by Count desc;
