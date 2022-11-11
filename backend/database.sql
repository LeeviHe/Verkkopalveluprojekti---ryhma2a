drop database if exists shoelando_db;

CREATE DATABASE shoelando_db;

CREATE TABLE `customer` (
  `customerid` char(6) NOT NULL,
  `customername` char(20) NOT NULL,
  `password` char(15) DEFAULT NULL,
  `address` char(50) DEFAULT NULL,
  `postnumber` char(5) DEFAULT NULL,
  `postdistrict` char(15) DEFAULT NULL);

CREATE TABLE `post` (
  `postnumber` char(5) NOT NULL,
  `postdistrict` char(15) DEFAULT NULL
) ;

CREATE TABLE `order` (
  `ordernumber` int(11) NOT NULL,
  `customerid` char(6) NOT NULL,
  `orderdate` datetime NOT NULL,
  `status` char(1) DEFAULT NULL,
  `savedate` datetime DEFAULT NULL
);

CREATE TABLE `orderrow` (
  `ordernumber` int(11) NOT NULL,
  `rownumber` smallint(6) NOT NULL,
  `productnumber` int(11) NOT NULL,
  `items` int(11) NOT NULL
);

CREATE TABLE `product` (
  `productnumber` int(11) NOT NULL,
  `productname` char(20) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `categorynumber` smallint(6) NOT NULL
);

CREATE TABLE `category` (
  `categorynumber` smallint(6) NOT NULL,
  `categoryname` char(10) DEFAULT NULL
) ;

-- Indexes for table `customer`
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerid`),
  ADD KEY `postnumber` (`postnumber`);


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

-- Constraints for table `customer`

ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`postnumber`) REFERENCES `post` (`postnumber`);

-- Constraints for table `order`

ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerid`) REFERENCES `customer` (`customerid`);


-- Constraints for table `orderrow`

ALTER TABLE `orderrow`
  ADD CONSTRAINT `orderrow_ibfk_1` FOREIGN KEY (`ordernumber`) REFERENCES `order` (`ordernumber`),
  ADD CONSTRAINT `orderrow_ibfk_2` FOREIGN KEY (`productnumber`) REFERENCES `product` (`productnumber`);


-- Constraints for table `product`

ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categorynumber`) REFERENCES `category` (`categorynumber`);