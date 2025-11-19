-- Extend the edu_platform database by adding a assignments table.
create database edu_platform;
use edu_platform;
create table assignment(
student_id Int primary key auto_increment,
student_name varchar(50),
student_course varchar(50),
lesson_id int
);
select *from assignment;
insert into assignment(student_name,student_course,lesson_id) values("Hema","IT",1)
insert into assignment(student_name,student_course,lesson_id) values("Harini","IT",2)
insert into assignment(student_name,student_course,lesson_id) values("Dharshi","IT",3)
insert into assignment(student_name,student_course,lesson_id) values("Aarthi","MCA",4)
-- Create sample assignments and link them to lessons.

create table lesson(
lesson_id int primary key auto_increment,
lesson_name varchar(50));

insert into lesson(lesson_name) values("Artificial intelligent")
select assignment.student_name,assignment.student_course,lesson.lesson_name from assignment join lesson on assignment.lesson_id=lesson.lesson_id;

-- Build a query that lists all assignments for a course.

-- Add foreign keys to enforce relationships between lessons and assignments.
SELECT a.student_id,a.student_name,a.assignment_mark,l.lesson_name, FROM assignments a JOIN lesson l ON a.lesson_id = l.lesson_id WHERE a.subject_name ='Maths';
alter table assignments
add constraint fk_assignments_lesson
foreign key(lesson_id)
references lesson(lesson_id);



