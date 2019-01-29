DROP DATABASE IF EXISTS booklist_db;
CREATE DATABASE booklist_db;

USE booklist_db;

SELECT * FROM booklist;

DROP TABLE IF EXISTS booklist;
CREATE TABLE booklist (
	id int NOT NULL AUTO_INCREMENT,
	book_name VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    have_read BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
); 