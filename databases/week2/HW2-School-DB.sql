create database School;
use school;

create table class(
id int unsigned auto_increment primary key, 
name varchar(100) not null,
start_date date,
end_date date );

-- altering column datatype and showing table description
alter table class
modify column end_date datetime ;
desc class;



create table student(
id int unsigned auto_increment primary key, 
name varchar(255) not null,
email varchar(255),
phone varchar(255),
class_id int unsigned not null,
CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE);

insert into class(
name,
start_date,
end_date)
values('Full Stack',now(),'2020-05-15 12:00:00');

insert into class(
name,
start_date,
end_date)
values('CV writing','2020-01-01 17:00:00','2020-01-02 20:00:00');

insert into class(
name,
start_date,
end_date)
values('Project','2020-02-01 12:00:00','2020-04-15 17:00:00');

insert into student(
name,
email,
phone,
class_id) 
values('Humayun','h@hotmail.com','0045-45342345',1);

insert into student(
name,
email,
phone,
class_id) 
values('Adil','a@hotmail.com','0045-453445564',2);
insert into student(
name,
email,
phone,
class_id) 
values('Zabeha','z@hotmail.com','0045-45340045',3);
insert into student(
name,
email,
phone,
class_id) 
values('Ammara','am@hotmail.com','0045-467842345',1);

-- indexing column name in student table
CREATE INDEX index_name
ON student (name);

-- adding new column 'status' in  table 'class'
alter table class
add status enum('not-started', 'ongoing', 'finished');
desc student;

select * from student;
select * from class;
truncate student;