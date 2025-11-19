-- Create a table named departments with id, name, and description.
-- Insert three sample departments.

create database departments;
use departments;
create table students(
student_id Int primary key auto_increment,
student_name varchar(50),
student_description varchar(50),
student_dept varchar(50)
);
select *from students;
insert into students(student_name,student_description,student_dept) values("Hema","Good","IT")
insert into students(student_name,student_description,student_dept) values("Harini","Good","IT")
insert into students(student_name,student_description,student_dept) values("Dharshi","Good","IT")
insert into students(student_name,student_description,student_dept) values("Aarthi","Good","MCA")

-- Write a query to show only students from the users table.
select student_name from students;

-- Add a new column phone to users.
alter table students add phone int(10);
update students set phone=6677 where student_name="Harini";

-- Write a JOIN query to list all students and the courses they are enrolled in.

create table classes(class_id int primary key ,class_name varchar(50));
create table students1(student_id int primary key,student_name varchar(50),class_id int);
insert into classes values(1,"class A");
insert into students1 values(101,"kavi",1);
select student_name,class_name from students1 join classes on students1.class_id=classes.class_id;