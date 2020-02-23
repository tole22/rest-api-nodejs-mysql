CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
    );
    
    DESCRIBE employees;
    INSERT INTO employees values
		('1', 'Maxi', 1234),
        ('2', 'Eri', 12345);
    
    SELECT * FROM employees;
    
    ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'tole22';
    flush privileges;