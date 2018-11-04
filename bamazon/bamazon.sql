DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);



INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Tide - 10 lbs", "Household Goods", 20.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Macbook Air - 2018", "Computers", 2500.00, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Kindle Fire - 2018", "Computers", 99.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Alexa Dot - 2018", "Computers", 49.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Pampers - 24 Pack", "Household Goods", 49.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "MySQL Coding in a Nutshell", "Book", 49.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "How to Code Bamazon", "Book", 29.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Node Inquirer & Me - An Query Based Autobiography", "Book", 49.99, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "DJI Phantom 1 Drone", "Toys", 999.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Handlebars - BMX", "Bicycle Parts", 49.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, "Handlebars - Beard & Mustache Trimmer", "Household Goods", 0.99, 1000);
