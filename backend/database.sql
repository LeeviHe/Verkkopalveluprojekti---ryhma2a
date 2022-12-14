drop database if exists shoelando_db;

CREATE DATABASE shoelando_db;

USE shoelando_db;

CREATE TABLE `customer` (
  `customer_id` SMALLINT PRIMARY KEY AUTO_INCREMENT,
  `fname` char(20) NOT NULL,
  `lname` char(20) NOT NULL,
  `address`char(50) NOT NULL,
  `email` char(50) DEFAULT NULL UNIQUE,
  `zip` char(5) DEFAULT NULL,
  `city` char(15) DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  `subscribe` char(1) DEFAULT NULL,
  `admin` INT(1)
  );

  CREATE TABLE `customer_order`(
  `customerorder_id` SMALLINT PRIMARY KEY AUTO_INCREMENT,
  `fname` char(20) NOT NULL,
  `lname` char(20) NOT NULL,
  `address`char(50) NOT NULL,
  `email` char(50) DEFAULT NULL UNIQUE,
  `zip` char(5) DEFAULT NULL,
  `city` char(15) DEFAULT NULL
  );


CREATE TABLE `post` (
  `zip` char(5) NOT NULL,
  `city` char(15) DEFAULT NULL
) ;

CREATE TABLE `order` (
  `id` int primary key AUTO_INCREMENT,
  `order_date` timestamp default current_timestamp,
  `customerorder_id` SMALLINT NOT NULL
);

CREATE TABLE `orderrow` (
  `order_id` int NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int not null
);

CREATE TABLE `product` (
  `product_id` int(11) primary key AUTO_INCREMENT,
  `brand` char(20),
  `productname` char(20) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `category_id` SMALLINT(6) NOT NULL,
  `subcategory_id` SMALLINT(6),
  `img` VARCHAR(128)
);

CREATE TABLE `category` (
  `category_id` smallint(6) PRIMARY KEY AUTO_INCREMENT,
  `categoryname` char(20) DEFAULT NULL
) ;

CREATE TABLE `subcategory` (
  `subcategory_id` SMALLINT(6) PRIMARY KEY AUTO_INCREMENT,
  `subcategoryname` char(20) DEFAULT NULL,
  `category_id` SMALLINT(6)
);

-- Indexes for table `customer`
 -- ALTER TABLE `customer`
   -- ADD PRIMARY KEY (`customerid`),
   -- ADD KEY `postnumber` (`postnumber`);


-- Indexes for table `post`

ALTER TABLE `post`
  ADD PRIMARY KEY (`zip`);


-- Indexes for table `tilaus`


ALTER TABLE `order`
   add constraint `order_ifbfk_1` foreign KEY (`customerorder_id`) references `customer_order` (`customerorder_id`);
   
   
   -- Constraints for table `orderrow`



-- Indexes for table `product`

ALTER TABLE `product`
  ADD KEY `category_id` (`category_id`);

-- Indexes for table `category`


-- Indexes and constraint for table `subcategory`

ALTER TABLE `subcategory`
  ADD KEY `category_id` (`category_id`);

-- Constraints for table `subcategory`
ALTER TABLE `subcategory`
	ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

-- Constraints for table `customer`

-- ALTER TABLE `customer`
  -- ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`postnumber`) REFERENCES `post` (`postnumber`);

-- Constraints for table `product`


ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`subcategory_id`);
  
  
  ALTER TABLE `orderrow`
  ADD CONSTRAINT `orderrow_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  add constraint `orderrow_ifbfk_3` foreign KEY (`product_id`) references `product` (`product_id`);


INSERT INTO category (categoryname)
VALUES ('Kesäkengät'), ('Talvikengät'), ('Juhlakengät');
INSERT INTO subcategory (subcategoryname, category_id)
VALUES ('Tennarit', 1), ('Sandaalit', 1), ('Nilkkurit', 2), ('Talvisaappaat', 2), ('Korkokengät', 3), ('Puvunkengät', 3);
INSERT INTO product (brand, productname, price, category_id, subcategory_id, img)
VALUES ('Adidas', 'Lite Racer Adapt', 149.99, 1, 1, 'adidas1.png'), ('Adidas', 'Ace Tango', 75, 1, 1, 'adidas4.png'), ('SeeByChloe', 'Gema leather mules', 139.99, 1, 2, 'Sandal1.png'), ('Havaianas', 'Top-Tiras Ballet', 23.50, 1, 2, 'Sandal2.png'), 
('DeeZee', 'Nilkkurit', 99.45, 2, 4, 'Long Wintershoe 4.png'), ('Merrel', 'Bravada Edge 2', 129, 2, 3, 'Short Wintershoe 4.png'), ('Prada', 'korkokengät', 850, 3, 5, 'Highheel.png'), ('Evita Lisa', 'korkokengät', 210, 3, 5, 'Highheel2.png'), ('Topman', 'juhlakenkä ruskea', 149, 3, 6, 'Suit Shoe1.png'), ('Topman', 'juhlakenkä musta', 95, 3, 6, 'Suit Shoe2.png'), 
('Adidas', 'Original Superstar', 119.99, 1, 1, 'adidas5.png'), ('Air Jordan', '1 Mid', 200, 1, 1, 'nike3.png'), ('Birkenstock', 'Arizona Oiled Black', 90, 1, 2, 'Sandal3.png'), ('Aree', 'Re:Designed', 84.90, 1, 2, 'Sandal4.png');
INSERT INTO customer (fname, lname, email, password, admin)
VALUES ('Ylläpito', 'Maisteri', 'admin@admin', '$2y$10$eNAxooWSvnHdqXcbuCqxEutdkCjVcsW/ykkjf9B25JsjNLlSQnA5.', 1);