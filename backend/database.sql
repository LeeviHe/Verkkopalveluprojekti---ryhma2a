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
  `password` char(255) DEFAULT NULL
  );

  CREATE TABLE `customer_order`(
  `customerorder_id` SMALLINT PRIMARY KEY AUTO_INCREMENT,
  `fname` char(20) NOT NULL,
  `lname` char(20) NOT NULL,
  `address`char(50) NOT NULL,
  `email` char(50) DEFAULT NULL,
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
  `productname` char(30) NOT NULL,
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
VALUES 
('Kesäkengät'), 
('Talvikengät'), 
('Juhlakengät');
INSERT INTO subcategory (subcategoryname, category_id)
VALUES 
-- Kesäkengät
('Tennarit', 1), 
('Sandaalit', 1), 
-- Talvikengät
('Nilkkurit', 2), 
('Talvisaappaat', 2), 
-- Juhlakengät
('Korkokengät', 3), 
('Puvunkengät', 3);
INSERT INTO product (brand, productname, price, category_id, subcategory_id, img)
VALUES
-- KESÄKENGÄT
('SeeByChloe', 'GEMA LEATHER MULES', 139.99, 1, 2, 'Sandal1.png'),
('Adidas', 'ORIGINAL SUPERSTAR', 119.99, 1, 1, 'Sneaker2.png'),
('Havaianas', 'TOP-TIRAS BALLET', 23.50, 1, 2, 'Sandal2.png'),
('Nike', 'AIR 1 RETRO OG', 184.95, 1, 1, 'Sneaker3.png'),
('Puma', 'Lyhytvartiset tennarit', 44.99, 1, 1, 'Sneaker1.png'),
('Birkenstock', 'ARIZONA OILED BLACK', 90, 1, 2, 'Sandal3.png'),

-- TALVIKENGÄT
('Marco Tozzi', 'Nauhalliset nilkkurit', 94.95, 2, 3, 'Winter4.png'),
('Catmandoo', 'TANYA LL Talvisaappaat', 79, 2, 4, 'Boots4.png'),
('Timberland', '6 INCH WR BASIC', 219.95, 2, 3, 'Winter2.png'),
('Desdemona', 'HICKORY', 199, 2, 4, 'Boots3.png'),
('Bianco', 'Vuorelliset talvisaappaat', 199, 2, 4, 'Boots1.png'),
('Merrel', 'BRAVADA EDGE 2', 129, 2, 3, 'Winter3.png'),

-- JUHLAKENGÄT
('Next', 'Korolliset avokkaat', 56, 3, 5, 'Heel3.png'),
('Topman', 'Loaferit/pistokkaat', 95, 3, 6, 'Suit2.png'),
('Pier One', 'Loaferit/pistokkaat', 74.95, 3, 6, 'Suit3.png'),
('Evita Lisa', 'Korolliset avokkaat', 210, 3, 5, 'Heel2.png'),
('Topman', 'Klassiset nauhakengät', 149.99, 3, 6, 'Suit1.png'),
('Prada', 'Korolliset sandaalit', 850, 3, 5, 'Heel.png');

INSERT INTO customer (fname, lname, email, password)
VALUES ('Admin', 'Admin', 'admin', '$2y$10$UlCV/fOP/Fh335KtexekN.EK2/4AzzMoNhwX.4xDzqyK3OgQlzCbi');