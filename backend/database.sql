drop database if exists shoelando_db;

CREATE DATABASE shoelando_db;

USE shoelando_db;

CREATE TABLE `customer` (
  `customerid` SMALLINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fname` char(20) NOT NULL,
  `lname` char(20) NOT NULL,
  `address`char(50) NOT NULL,
  `email` char(50) DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  `subscribe` char(1) DEFAULT NULL,
  `postnumber` char(5) DEFAULT NULL,
  `postdistrict` char(15) DEFAULT NULL);

CREATE TABLE `post` (
  `postnumber` char(5) NOT NULL,
  `postdistrict` char(15) DEFAULT NULL
) ;

CREATE TABLE `order` (
  `ordernumber` int(11) NOT NULL AUTO_INCREMENT,
  `customerid` SMALLINT NOT NULL,
  `orderdate` datetime NOT NULL
);

CREATE TABLE `orderrow` (
  `ordernumber` int(11) NOT NULL,
  `rownumber` smallint(6) NOT NULL AUTO_INCREMENT,
  `productnumber` int(11) NOT NULL,
  `amount` int
);

CREATE TABLE `product` (
  `productnumber` int(11) NOT NULL,
  `productname` char(20) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `categorynumber` SMALLINT(6) NOT NULL,
  `subcategorynumber` SMALLINT(6)
);

CREATE TABLE `category` (
  `categorynumber` smallint(6) NOT NULL,
  `categoryname` char(20) DEFAULT NULL
) ;

CREATE TABLE `subcategory` (
  `subcategorynumber` SMALLINT(6) NOT NULL,
  `subcategoryname` char(20) DEFAULT NULL,
  `categorynumber` SMALLINT(6)
);

-- Indexes for table `customer`
 -- ALTER TABLE `customer`
   -- ADD PRIMARY KEY (`customerid`),
   -- ADD KEY `postnumber` (`postnumber`);


-- Indexes for table `post`

ALTER TABLE `post`
  ADD PRIMARY KEY (`postnumber`);


-- Indexes for table `tilaus`

ALTER TABLE `order`
  ADD PRIMARY KEY (`ordernumber`),
  ADD KEY `customerid` (`customerid`);


-- Indexes for table `tilausrivi`

ALTER TABLE `orderrow`
  ADD PRIMARY KEY (`ordernumber`,`rownumber`),
  ADD KEY `productnumber` (`productnumber`);

-- Indexes for table `product`

ALTER TABLE `product`
  ADD PRIMARY KEY (`productnumber`),
  ADD KEY `categorynumber` (`categorynumber`);

-- Indexes for table `category`

ALTER TABLE `category`
  ADD PRIMARY KEY (`categorynumber`);

-- Indexes and constraint for table `subcategory`

ALTER TABLE `subcategory`
	ADD PRIMARY KEY (`subcategorynumber`),
    ADD KEY `categorynumber` (`categorynumber`);

-- Constraints for table `subcategory`
ALTER TABLE `subcategory`
	ADD CONSTRAINT `subcategory_ibfk_1` FOREIGN KEY (`categorynumber`) REFERENCES `category` (`categorynumber`);

-- Constraints for table `customer`

-- ALTER TABLE `customer`
  -- ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`postnumber`) REFERENCES `post` (`postnumber`);

-- Constraints for table `order`

ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customer` (`customerid`);


-- Constraints for table `orderrow`

ALTER TABLE `orderrow`
  ADD CONSTRAINT `orderrow_ibfk_1` FOREIGN KEY (`ordernumber`) REFERENCES `order` (`ordernumber`),
  ADD CONSTRAINT `orderrow_ibfk_2` FOREIGN KEY (`productnumber`) REFERENCES `product` (`productnumber`);


-- Constraints for table `product`

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categorynumber`) REFERENCES `category` (`categorynumber`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subcategorynumber`) REFERENCES `subcategory` (`subcategorynumber`);

INSERT INTO category (categorynumber, categoryname)
VALUES ('1', 'Kesäkengät'), ('2','Talvikengät'), ('3', 'Juhlakengät');
INSERT INTO subcategory (subcategorynumber, subcategoryname, categorynumber)
VALUES (1, 'Tennarit', 1), (2, 'Sandaalit', 1), (3, 'Korkokengät', 3), (4, 'Puvunkengät', 3);
INSERT INTO product (productnumber, productname, price, categorynumber, subcategorynumber)
VALUES (1, 'Tennari1', 25, 1, 1), (2, 'Tennari2', 75, 1, 1), (3, 'Sandaali1', 10, 1, 2), (4, 'Sandaali2', 25, 1, 2),
(5, 'Talvikenka1', 50, 2, null), (6, 'Talvikenkä2', 120, 2, null), (7, 'Korkkari1', 125, 3, 3), (8, 'Korkkari2', 250, 3, 3), (9, 'Puvunkenka1', 125, 3, 4), (10, 'Puvunkenka2', 250, 3, 4), 
(11, 'Tennari3', 25, 1, 1), (12, 'Tennari4', 75, 1, 1), (13, 'Sandaali3', 10, 1, 2), (14, 'Sandaali4', 25, 1, 2);