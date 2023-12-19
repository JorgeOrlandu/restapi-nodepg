CREATE DATABASE nodepgapi;

create table users(
	id serial primary key,
	name varchar(40),
	email text
);

insert into users(name, email) values
('jorge', 'jorge@arada.cl'),
('orlando', 'orlando@arada.cl');

select * from users;