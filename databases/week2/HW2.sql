insert into 
task(title,
 description, 
 created, 
 updated, 
 due_Date, 
 status_ID, 
 user_ID)
 values('help kids', 'help them reading, writing and doing HW',now(),now(),'2019-11-22 23:00:00',1,5);
 

update 
task set title = "Working with Kids"
where id=37;


update 
task set due_date = "2019-11-23 11:00:00"
where id=37;

update 
task set status_id = 2
where id=37;

update 
task set status_id = 3
where id=37;

delete 
from task
where id=37;

-- select * from task order by created desc;
-- select * from status;



