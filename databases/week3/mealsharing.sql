create database mealsharing_db;
use mealsharing_db;
-- drop database mealsharing_db;
-- creating table 'meal'
create table meal(
id int unsigned auto_increment primary key, 
title varchar(255) not null,
description text(255),
location varchar(255) not null,
when_date datetime not null,
max_reservations int not null,
price decimal(4,2) not null,
created_date datetime);

alter table meal 
modify column price decimal (4.2);
-- creating table 'reservation'
create table reservation(
id int unsigned auto_increment primary key, 
number_of_guests int not null,
meal_id int unsigned not null,
created_date datetime,
CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE);

-- creating table 'review'
create table review(
id int unsigned auto_increment primary key, 
title varchar(255) not null,
descriotion text not null,
meal_id int unsigned not null,
stars int not null,
created_date datetime,
CONSTRAINT `fk_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE);

-- quering meals
select *
from meal;

insert into meal(
title,
description,
location,
when_date,
max_reservations,
price,
created_date) 
values('Pakistani food get together','one dish','Rødovre','2020-01-01 16:00:00',30,150,now());


insert into meal(
title,
description,
location,
when_date,
max_reservations,
price,
created_date) 
values('Spicy Mix ','one dish','Husem','2020-01-01 17:00:00',20,75.5,now());

select *
from meal
where id=1;

update meal
set description = 'new description'
where id=2;

delete
from meal
where id = 3;

-- quering Reservation table

select *
from reservation;

insert into reservation(
number_of_guests,
meal_id,
created_date)
values(2,2,now());


select *
from reservation
where id=1;

update reservation
set number_of_guests=1
where id=5;

delete 
from reservation
where id=2;

-- quering Reviews table

select *
from review;

insert into review(
title,
descriotion,
meal_id,
stars,
created_date)
values('true taste','every thing was too good',2,5,now());



select *
from review
where id=1;

update review
set title='bit extra spicy'
where id=1;

delete 
from reservation
where id=2;

-- additional queries

select *
from meal
where price < 100;

---- one missing ---

select *
from meal
where title like '%spicy%';

select *
from meal;

select *
from meal
where created_date between  '2019-11-29 20:23:09' and '2019-11-29 20:30:08';

-- another way to query same as above

select *
from meal
where created_date >  '2019-11-29 20:23:08' and created_date < '2019-11-29 20:30:08';

select *
from meal
limit 1;

select *
from meal
inner join review
on meal.id=review.meal_id
where stars = 5;

select *
from reservation
where meal_id=1
order by created_date desc;

select meal.id,meal.title,meal.description, avg(stars) as rating
from meal
inner join review
on meal.id=review.meal_id
group by review.meal_id
order by rating desc;
