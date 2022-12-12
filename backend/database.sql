drop database if exists shoelando_db;

CREATE DATABASE shoelando_db;

USE shoelando_db;

CREATE TABLE `customer` (
  `customer_id` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fname` char(20) NOT NULL,
  `lname` char(20) NOT NULL,
  `address`char(50) NOT NULL,
  `email` char(50) DEFAULT NULL,
  `zip` char(5) DEFAULT NULL,
  `city` char(15) DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  `subscribe` char(1) DEFAULT NULL,
  `admin` INT(1)
  );

CREATE TABLE `post` (
  `zip` char(5) NOT NULL,
  `city` char(15) DEFAULT NULL
) ;

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `customer_id` SMALLINT NOT NULL,
  `orderdate` datetime NOT NULL
);

CREATE TABLE `orderrow` (
  `order_id` int(11) NOT NULL,
  `rownumber` smallint(6) NOT NULL ,
  `product_id` int(11) NOT NULL,
  `amount` int
);

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `productname` char(20) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `category_id` SMALLINT(6) NOT NULL,
  `subcategory_id` SMALLINT(6)
);

CREATE TABLE `category` (
  `category_id` smallint(6) NOT NULL,
  `categoryname` char(20) DEFAULT NULL
) ;

CREATE TABLE `subcategory` (
  `subcategory_id` SMALLINT(6) NOT NULL,
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
  ADD PRIMARY KEY AUTO_INCREMENT (`order_id`),
  ADD KEY `customer_id` (`customer_id`);


-- Indexes for table `tilausrivi`

ALTER TABLE `orderrow`
  ADD PRIMARY KEY AUTO_INCREMENT (`order_id`,`rownumber`),
  ADD KEY `product_id` (`product_id`);

-- Indexes for table `product`

ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

-- Indexes for table `category`

ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

-- Indexes and constraint for table `subcategory`

ALTER TABLE `subcategory`
	ADD PRIMARY KEY (`subcategory_id`),
    ADD KEY `category_id` (`category_id`);

-- Constraints for table `subcategory`
ALTER TABLE `subcategory`
	ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

-- Constraints for table `customer`

-- ALTER TABLE `customer`
  -- ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`postnumber`) REFERENCES `post` (`postnumber`);

-- Constraints for table `order`

ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`);


-- Constraints for table `orderrow`

ALTER TABLE `orderrow`
  ADD CONSTRAINT `orderrow_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`),
  ADD CONSTRAINT `orderrow_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);


-- Constraints for table `product`

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`subcategory_id`);

INSERT INTO category (category_id, categoryname)
VALUES ('1', 'Kesäkengät'), ('2','Talvikengät'), ('3', 'Juhlakengät');
INSERT INTO subcategory (subcategory_id, subcategoryname, category_id)
VALUES (1, 'Tennarit', 1), (2, 'Sandaalit', 1), (3, 'Nilkkurit', 2), (4, 'Talvisaappaat', 2), (5, 'Korkokengät', 3), (6, 'Puvunkengät', 3);
INSERT INTO product (product_id, productname, price, category_id, subcategory_id)
VALUES (1, 'Tennari1', 25, 1, 1), (2, 'Tennari2', 75, 1, 1), (3, 'Sandaali1', 10, 1, 2), (4, 'Sandaali2', 25, 1, 2),
(5, 'Talvikenka1', 50, 2, null), (6, 'Talvikenkä2', 120, 2, null), (7, 'Korkkari1', 125, 3, 5), (8, 'Korkkari2', 250, 3, 5), (9, 'Puvunkenka1', 125, 3, 6), (10, 'Puvunkenka2', 250, 3, 6), 
(11, 'Tennari3', 25, 1, 1), (12, 'Tennari4', 75, 1, 1), (13, 'Sandaali3', 10, 1, 2), (14, 'Sandaali4', 25, 1, 2);
INSERT INTO customer (fname, lname, email, password, admin)
VALUES ('Ylläpito', 'Maisteri', 'admin@admin', '$2y$10$eNAxooWSvnHdqXcbuCqxEutdkCjVcsW/ykkjf9B25JsjNLlSQnA5.', 1);