## Schema

Create Database burgers_db;

Use burgers_db;

Create Table burgers (
   buger_id int Not NULL AUTO_INCREMENT Primary Key,
   burger_name varchar(100) not NULL,
   devoured Boolean Not NULL default 0
);