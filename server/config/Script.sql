DROP DATABASE IF EXISTS bkzone_2022;
CREATE DATABASE bkzone_2022;
USE bkzone_2022;
DROP TABLE IF EXISTS `OrderDetail`;
DROP TABLE IF EXISTS `Orders`;
DROP TABLE IF EXISTS `Comment`;
DROP TABLE IF EXISTS `News`;
DROP TABLE IF EXISTS `Product`;
DROP TABLE IF EXISTS `Admin`;
DROP TABLE IF EXISTS `Address`;
DROP TABLE IF EXISTS `Customer`;
CREATE TABLE `Customer` (
  `id` int AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `birthday` timestamp,
  `username` varchar(255),
  `password` varchar(255),
  `address` varchar(255),
  PRIMARY KEY (id)
);
CREATE TABLE `Product` (
  `id` int AUTO_INCREMENT,
  `name` varchar(255),
  `thumbnail` varchar(255),
  `price` integer,
  `quantity` integer,
  `brand` varchar(255),
  `cpu` varchar(255),
  `gpu` varchar(255),
  `ram` varchar(255),
  `disk` varchar(255),
  `screen_size` varchar(255),
  `screen_tech` varchar(255),
  `weight` integer,
  `os` varchar(255),
  `overall_rating` float,
  `num_rates` integer,
  `description` varchar(255),
  PRIMARY KEY (id)
);
CREATE TABLE `Orders` (
  `id` int AUTO_INCREMENT,
  `customer_id` int,
  `address` varchar(255),
  `receiverName` varchar(255),
  `phoneNumber`  varchar(255),
  `paymentMethod` varchar(255),
  `create_at` Datetime,
  `last_update` timestamp,
  `status` varchar(255),
  `total_product` integer,
  `total_order_money` integer,
   PRIMARY KEY(id)
);
CREATE TABLE `OrderDetail` (
  `order_id` int,
  `product_id` int,
  `quantity` integer,
  `total_money` integer,
  PRIMARY KEY (`order_id`, `product_id`)
);
CREATE TABLE `Comment` (
  `id` int AUTO_INCREMENT,
  `product_id` int,
  `customer_id` int,
  `admin_id` int,
  `comment` varchar(255),
  `updated_at` timestamp,
  `status` varchar(255),
  PRIMARY KEY (id)
);
CREATE TABLE `Admin` (
  `id` int AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  PRIMARY KEY (id)
);
CREATE TABLE `News` (
  `id` int AUTO_INCREMENT,
  `admin_id` int,
  `title` varchar(255),
  `thumbnail` varchar(255),
  `content` longtext,
  PRIMARY KEY(id)
);

CREATE TABLE `Address` (
	`id` int AUTO_INCREMENT, 
	`user_id` int , 
	`city` varchar(255), 
	`district` varchar(255) , 
	`ward` varchar(255), 
	`specificAddress` varchar(255), 
	`phoneNumber` varchar(255) , 
	`receiverName` varchar(255) , 
	`type` BIT,

	PRIMARY KEY(id)

);
CREATE TABLE `Resource` (
  `id` int not null auto_increment,
  `name` varchar(255),
  `data` longtext,
  PRIMARY KEY(id)
);

ALTER TABLE `Orders` ADD FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`) ON DELETE CASCADE;

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`order_id`) REFERENCES `Orders` (`id`) ON DELETE CASCADE;

ALTER TABLE `OrderDetail` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE;

ALTER TABLE `Comment` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`) ON DELETE CASCADE;

ALTER TABLE `Comment` ADD FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`) ON DELETE CASCADE;

ALTER TABLE `Comment` ADD FOREIGN KEY (`admin_id`) REFERENCES `Admin` (`id`) ON DELETE CASCADE;

ALTER TABLE `News` ADD FOREIGN KEY (`admin_id`) REFERENCES `Admin` (`id`) ON DELETE CASCADE;

ALTER TABLE `address` ADD FOREIGN KEY (`user_id`) REFERENCES `Customer` (`id`) ON DELETE CASCADE;


INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',24279787,22,'Apple','Intel Core i5 3.1GHz','Intel Iris Plus Graphics 650','8GB','256GB SSD','13.3','IPS Panel Retina Display 2560x1600',1.37,'macOS',1,795);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire 3','https://anphat.com.vn/media/product/39134_35206_1.png',29843996,25,'Acer','AMD A9-Series 9420 3GHz','AMD Radeon R5','4GB','500GB HDD','15.6','1366x768',2.1,'Windows',5,312);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',31172929,20,'Apple','Intel Core i7 2.2GHz','Intel Iris Pro Graphics','16GB','256GB Flash Storage','15.4','IPS Panel Retina Display 2880x1800',2.04,'Mac OS',2,758);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook Macbook Air','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',29012085,13,'Apple','Intel Core i5 1.8GHz','Intel HD Graphics 6000','8GB','256GB Flash Storage','13.3','1440x900',1.34,'macOS',2,915);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Ultrabook ZenBook UX430UN','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',46780635,14,'Asus','Intel Core i7 8550U 1.8GHz','Nvidia GeForce MX150','16GB','512GB SSD','14','Full HD 1920x1080',1.3,'Windows',1,172);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Ultrabook Swift 3','https://anphat.com.vn/media/product/39134_35206_1.png',47378628,16,'Acer','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','14','IPS Panel Full HD 1920x1080',1.6,'Windows',0,704);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',48274972,10,'HP','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','4GB','500GB HDD','15.6','1366x768',1.86,'No OS',4,54);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',41290194,13,'HP','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','4GB','500GB HDD','15.6','Full HD 1920x1080',1.86,'No OS',1,540);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',36356939,10,'Apple','Intel Core i7 2.8GHz','AMD Radeon Pro 555','16GB','256GB SSD','15.4','IPS Panel Retina Display 2880x1800',1.83,'macOS',1,949);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',46044776,21,'Dell','Intel Core i3 6006U 2GHz','AMD Radeon R5 M430','4GB','256GB SSD','15.6','Full HD 1920x1080',2.2,'Windows',1,239);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook 12"','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',22021377,6,'Apple','Intel Core M m3 1.2GHz','Intel HD Graphics 615','8GB','256GB SSD','12','IPS Panel Retina Display 2304x1440',0.92,'macOS',2,261);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',28475687,26,'Apple','Intel Core i5 2.3GHz','Intel Iris Plus Graphics 640','8GB','256GB SSD','13.3','IPS Panel Retina Display 2560x1600',1.37,'macOS',4,791);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',39812301,14,'Dell','Intel Core i7 7500U 2.7GHz','AMD Radeon R5 M430','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.2,'Windows',1,32);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',47586012,10,'Apple','Intel Core i7 2.9GHz','AMD Radeon Pro 560','16GB','512GB SSD','15.4"','IPS Panel Retina Display 2880x1800',1.83,'macOS',5,115);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 320-15IKB','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',34465581,27,'Lenovo','Intel Core i3 7100U 2.4GHz','Nvidia GeForce 940MX','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'No OS',1,539);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook XPS 13','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',27432627,21,'Dell','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','128GB SSD','13.3"','IPS Panel Full HD / Touchscreen 1920x1080',1.22,'Windows',3,217);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Netbook Vivobook E200HA','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',42040436,20,'Asus','Intel Atom x5-Z8350 1.44GHz','Intel HD Graphics 400','2GB','32GB Flash Storage','11.6"','1366x768',0.98,'Windows',5,106);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Gaming Legion Y520-15IKBN','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',37186008,20,'Lenovo','Intel Core i5 7300HQ 2.5GHz','Nvidia GeForce GTX 1050','8GB','128GB SSD + 1TB HDD','15.6"','IPS Panel Full HD 1920x1080',2.5,'Windows',1,811);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 255 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',49932005,6,'HP','AMD E-Series E2-9000e 1.5GHz','AMD Radeon R2','4GB','500GB HDD','15.6"','1366x768',1.86,'No OS',2,749);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell 2 in 1 Convertible Inspiron 5379','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',23879508,16,'Dell','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','13.3"','Full HD / Touchscreen 1920x1080',1.62,'Windows',4,973);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Ultrabook 15-BS101nv (i7-8550U/8GB/256GB/FHD/W10)','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',24243017,8,'HP','Intel Core i7 8550U 1.8GHz','Intel HD Graphics 620','8GB','256GB SSD','15.6"','Full HD 1920x1080',1.91,'Windows',3,882);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',43834134,25,'Dell','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','4GB','1TB HDD','15.6"','1366x768',2.3,'Windows',4,462);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Air','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',43786919,28,'Apple','Intel Core i5 1.6GHz','Intel HD Graphics 6000','8GB','128GB Flash Storage','13.3"','1440x900',1.35,'Mac OS',5,263);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 5570','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',28313252,23,'Dell','Intel Core i5 8250U 1.6GHz','AMD Radeon 530','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.2,'Windows',5,587);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook Latitude 5590','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',42968995,23,'Dell','Intel Core i7 8650U 1.9GHz','Intel UHD Graphics 620','8GB','256GB SSD + 256GB SSD','15.6"','Full HD 1920x1080',1.88,'Windows',3,89);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook ProBook 470','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',44767118,8,'HP','Intel Core i5 8250U 1.6GHz','Nvidia GeForce 930MX','8GB','1TB HDD','17.3"','Full HD 1920x1080',2.5,'Windows',1,14);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Chuwi Notebook LapBook 15.6"','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',44664915,25,'Chuwi','Intel Atom x5-Z8300 1.44GHz','Intel HD Graphics','4GB','64GB Flash Storage','15.6"','Full HD 1920x1080',1.89,'Windows',5,799);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook E402WA-GA010T (E2-6110/2GB/32GB/W10)','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',39988801,5,'Asus','AMD E-Series E2-6110 1.5GHz','AMD Radeon R2','2GB','32GB Flash Storage','14.0"','1366x768',1.65,'Windows',1,120);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 17-ak001nv (A6-9220/4GB/500GB/Radeon','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',24062620,29,'HP','AMD A6-Series 9220 2.5GHz','AMD Radeon 530','4GB','500GB HDD','17.3"','Full HD 1920x1080',2.71,'Windows',0,769);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook XPS 13','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',42506906,13,'Dell','Intel Core i7 8550U 1.8GHz','Intel UHD Graphics 620','16GB','512GB SSD','13.3"','Touchscreen / Quad HD+ 3200x1800',1.2,'Windows',0,118);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Air','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',48138234,23,'Apple','Intel Core i5 1.6GHz','Intel HD Graphics 6000','8GB','256GB Flash Storage','13.3"','1440x900',1.35,'Mac OS',3,143);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 120S-14IAP','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',32045046,11,'Lenovo','Intel Celeron Dual Core N3350 1.1GHz','Intel HD Graphics 500','4GB','64GB Flash Storage','14.0"','1366x768',1.44,'Windows',5,270);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire 3','https://anphat.com.vn/media/product/39134_35206_1.png',47139700,22,'Acer','Intel Core i3 7130U 2.7GHz','Intel HD Graphics 620','4GB','1TB HDD','15.6"','1366x768',2.1,'Linux',1,369);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 5770','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',39615468,7,'Dell','Intel Core i5 8250U 1.6GHz','AMD Radeon 530','8GB','128GB SSD + 1TB HDD','17.3"','IPS Panel Full HD 1920x1080',2.8,'Windows',4,899);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',33407263,17,'HP','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','4GB','1TB HDD','15.6"','1366x768',1.86,'Windows',3,128);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook ProBook 450','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',37869526,8,'HP','Intel Core i5 8250U 1.6GHz','Nvidia GeForce 930MX','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.1,'Windows',0,609);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook X540UA-DM186 (i3-6006U/4GB/1TB/FHD/Linux)','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',32064837,29,'Asus','Intel Core i3 6006U 2GHz','Intel HD Graphics 620','4GB','1TB HDD','15.6"','Full HD 1920x1080',2,'Linux',5,99);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Gaming Inspiron 7577','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',48799281,5,'Dell','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1060','16GB','256GB SSD + 1TB HDD','15.6"','IPS Panel Full HD 1920x1080',2.65,'Windows',3,989);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook X542UQ-GO005 (i5-7200U/8GB/1TB/GeForce','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',41043128,5,'Asus','Intel Core i5 7200U 2.5GHz','Nvidia GeForce 940MX','8GB','1TB HDD','15.6"','1366x768',2.3,'Linux',3,383);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire A515-51G','https://anphat.com.vn/media/product/39134_35206_1.png',46707463,14,'Acer','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','4GB','256GB SSD','15.6"','IPS Panel Full HD 1920x1080',2.2,'Windows',2,531);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell 2 in 1 Convertible Inspiron 7773','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',34076703,6,'Dell','Intel Core i5 8250U 1.6GHz','Nvidia GeForce 150MX','12GB','1TB HDD','17.3"','Full HD / Touchscreen 1920x1080',2.77,'Windows',2,546);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',42017075,18,'Apple','Intel Core i5 2.0GHz','Intel Iris Graphics 540','8GB','256GB SSD','13.3"','IPS Panel Retina Display 2560x1600',1.37,'macOS',4,949);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 320-15ISK','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',27107572,22,'Lenovo','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','4GB','128GB SSD','15.6"','1366x768',2.2,'No OS',4,94);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Gaming Rog Strix','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',44837743,22,'Asus','AMD Ryzen 1700 3GHz','AMD Radeon RX 580','8GB','256GB SSD + 1TB HDD','17.3"','Full HD 1920x1080',3.2,'Windows',5,258);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',29522368,22,'Dell','Intel Core i5 7200U 2.5GHz','AMD Radeon R5 M430','4GB','256GB SSD','15.6"','Full HD 1920x1080',2.3,'Windows',4,472);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook X751NV-TY001T (N4200/4GB/1TB/GeForce','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',34098579,8,'Asus','Intel Pentium Quad Core N4200 1.1GHz','Nvidia GeForce 920MX','4GB','1TB HDD','17.3"','1366x768',2.8,'Windows',0,573);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo 2 in 1 Convertible Yoga Book','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',40967303,6,'Lenovo','Intel Atom x5-Z8550 1.44GHz','Intel HD Graphics 400','4GB','64GB Flash Storage','10.1"','IPS Panel Touchscreen 1920x1200',0.69,'Android',4,721);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire A515-51G','https://anphat.com.vn/media/product/39134_35206_1.png',36236075,26,'Acer','Intel Core i7 8550U 1.8GHz','Nvidia GeForce MX150','8GB','256GB SSD','15.6"','IPS Panel Full HD 1920x1080',2.2,'Windows',0,406);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 255 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',39352807,25,'HP','AMD A6-Series 9220 2.5GHz','AMD Radeon R4 Graphics','4GB','256GB SSD','15.6"','Full HD 1920x1080',1.86,'Windows',3,61);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook ProBook 430','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',38078778,10,'HP','Intel Core i7 8550U 1.8GHz','Intel UHD Graphics 620','8GB','512GB SSD','13.3"','Full HD 1920x1080',1.49,'Windows',4,491);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire 3','https://anphat.com.vn/media/product/39134_35206_1.png',33447230,17,'Acer','Intel Core i3 7100U 2.4GHz','Intel HD Graphics 620','4GB','1TB HDD','15.6"','1366x768',2.4,'Windows',3,331);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3576','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',33276384,18,'Dell','Intel Core i7 8550U 1.8GHz','AMD Radeon 520','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.13,'Windows',0,764);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 15-bs002nv (i3-6006U/4GB/128GB/FHD/W10)','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',21859239,8,'HP','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','4GB','128GB SSD','15.6"','Full HD 1920x1080',1.91,'Windows',5,841);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook VivoBook Max','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',36201633,11,'Asus','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','4GB','256GB SSD','15.6"','1366x768',2,'Windows',0,593);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('MSI Gaming GS73VR 7RG','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',45768410,17,'MSI','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1070','16GB','256GB SSD + 2TB HDD','17.3"','Full HD 1920x1080',2.43,'Windows',4,406);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook X541UA-DM1897 (i3-6006U/4GB/256GB/FHD/Linux)','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',29107227,29,'Asus','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','4GB','256GB SSD','15.6"','Full HD 1920x1080',2,'Linux',4,286);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 5770','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',33630584,8,'Dell','Intel Core i7 8550U 1.8GHz','AMD Radeon 530','16GB','256GB SSD + 2TB HDD','17.3"','Full HD 1920x1080',2.8,'Windows',2,550);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook Vostro 5471','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',40780604,7,'Dell','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','14.0"','Full HD 1920x1080',1.7,'Windows',1,85);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 520S-14IKB','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',26601516,17,'Lenovo','Intel Core i3 7130U 2.7GHz','Intel HD Graphics 620','8GB','256GB SSD','14.0"','IPS Panel Full HD 1920x1080',1.7,'No OS',0,29);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook UX410UA-GV350T (i5-8250U/8GB/256GB/FHD/W10)','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',26223059,7,'Asus','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','14.0"','Full HD 1920x1080',1.4,'Windows',5,837);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',21699828,10,'HP','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','8GB','256GB SSD','15.6"','Full HD 1920x1080',1.86,'Windows',2,531);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Ultrabook ZenBook Pro','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',26579662,26,'Asus','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1050 Ti','16GB','512GB SSD','15.6"','Full HD 1920x1080',1.8,'Windows',2,154);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',34146136,7,'HP','Intel Core i3 6006U 2GHz','AMD Radeon 520','4GB','500GB HDD','15.6"','1366x768',1.86,'Windows',4,300);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook Stream 14-AX040wm','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',35789412,8,'HP','Intel Celeron Dual Core N3060 1.6GHz','Intel HD Graphics 400','4GB','32GB SSD','14.0"','1366x768',1.44,'Windows',4,386);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook V310-15ISK (i5-7200U/4GB/1TB/FHD/W10)','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',34739275,30,'Lenovo','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','4GB','1TB HDD','15.6"','Full HD 1920x1080',1.9,'Windows',4,53);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Gaming FX753VE-GC093 (i7-7700HQ/12GB/1TB/GeForce','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',40327989,9,'Asus','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1050 Ti','12GB','1TB HDD','17.3"','Full HD 1920x1080',3,'Linux',0,239);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Microsoft Ultrabook Surface Laptop','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',43193227,22,'Microsoft','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','4GB','128GB SSD','13.5"','Touchscreen 2256x1504',1.252,'Windows',2,901);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook Inspiron 5370','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',33927995,27,'Dell','Intel Core i7 8550U 1.8GHz','AMD Radeon 530','8GB','256GB SSD','13.3"','IPS Panel Full HD 1920x1080',1.4,'Windows',0,395);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 5570','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',49050226,30,'Dell','Intel Core i7 8550U 1.8GHz','AMD Radeon 530','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.2,'Windows',5,42);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('MSI Gaming GL72M 7RDX','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',40301451,18,'MSI','Intel Core i5 7300HQ 2.5GHz','Nvidia GeForce GTX 1050','8GB','128GB SSD + 1TB HDD','17.3"','Full HD 1920x1080',2.7,'Windows',0,223);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire E5-475','https://anphat.com.vn/media/product/39134_35206_1.png',31227683,21,'Acer','Intel Core i3 6006U 2GHz','Intel HD Graphics 520','8GB','1TB HDD','14.0"','1366x768',2.1,'Windows',1,178);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Gaming FX503VD-E4022T (i7-7700HQ/8GB/1TB/GeForce','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',46598879,6,'Asus','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1050','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'Windows',1,603);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 320-15IKBN','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',25217523,8,'Lenovo','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','8GB','2TB HDD','15.6"','Full HD 1920x1080',2.2,'No OS',2,300);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 5570','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',35781853,8,'Dell','Intel Core i7 8550U 1.8GHz','Intel UHD Graphics 620','8GB','128GB SSD + 1TB HDD','15.6"','Full HD 1920x1080',2.02,'Windows',1,627);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire A515-51G-32MX','https://anphat.com.vn/media/product/39134_35206_1.png',47913469,22,'Acer','Intel Core i3 7130U 2.7GHz','Nvidia GeForce MX130','4GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'Windows',0,640);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook ProBook 470','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',31089934,22,'HP','Intel Core i5 8250U 1.6GHz','Nvidia GeForce 930MX','8GB','128GB SSD + 1TB HDD','17.3"','Full HD 1920x1080',2.5,'Windows',0,705);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook Latitude 5590','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',30394829,28,'Dell','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','15.6"','IPS Panel Full HD 1920x1080',1.88,'Windows',1,276);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Apple Ultrabook MacBook 12"','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',35888765,14,'Apple','Intel Core i5 1.3GHz','Intel HD Graphics 615','8GB','512GB SSD','12.0"','IPS Panel Retina Display 2304x1440',0.92,'macOS',1,575);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook ProBook 440','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',26725770,30,'HP','Intel Core i5 8250U 1.6GHz','Intel HD Graphics 620','8GB','256GB SSD','14.0"','Full HD 1920x1080',1.63,'Windows',4,623);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Lenovo Notebook IdeaPad 320-15AST','https://media.istockphoto.com/id/171313585/photo/front-view-of-modern-laptop.jpg?s=170667a&w=0&k=20&c=Y8ECE54jJY9BJ-Rr3i4Ekn9M-1vA195AYJSfOspZHao=',48290866,8,'Lenovo','AMD A6-Series 9220 2.5GHz','AMD R4 Graphics','4GB','128GB SSD','15.6"','Full HD 1920x1080',2.2,'Windows',5,225);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire 3','https://anphat.com.vn/media/product/39134_35206_1.png',41438305,13,'Acer','AMD A9-Series 9420 3GHz','AMD Radeon R5','4GB','1TB HDD','15.6"','1366x768',2.1,'Windows',3,574);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Gaming Inspiron 7577','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',37672698,5,'Dell','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1050 Ti','16GB','128GB SSD + 1TB HDD','15.6"','IPS Panel Full HD 1920x1080',2.65,'Windows',1,579);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Ultrabook Pavilion 15-CK000nv','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',26446181,11,'HP','Intel Core i7 8550U 1.8GHz','Nvidia GeForce GTX 940MX','8GB','256GB SSD','15.6"','IPS Panel Full HD 1920x1080',1.83,'Windows',2,455);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 250 G6','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',44168368,9,'HP','Intel Core i5 7200U 2.5GHz','Intel HD Graphics 620','8GB','256GB SSD','15.6"','Full HD 1920x1080',1.96,'Windows',2,294);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Gaming FX503VM-E4007T (i7-7700HQ/16GB/1TB','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',21068678,30,'Asus','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1060','16GB','128GB SSD + 1TB HDD','15.6"','IPS Panel Full HD 1920x1080',2.2,'Windows',1,824);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Ultrabook XPS 13','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',29411889,13,'Dell','Intel Core i7 8550U 1.8GHz','Intel UHD Graphics 620','8GB','256GB SSD','13.3"','IPS Panel Full HD 1920x1080',1.21,'Windows',1,166);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Gaming FX550IK-DM018T (FX-9830P/8GB/1TB/Radeon','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',37170765,13,'Asus','AMD FX 9830P 3GHz','AMD Radeon RX 560','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.45,'Windows',5,343);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer Notebook Aspire 5','https://anphat.com.vn/media/product/39134_35206_1.png',24281856,25,'Acer','Intel Core i7 8550U 1.8GHz','Nvidia GeForce MX150','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'Windows',5,801);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook Probook 430','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',29013790,13,'HP','Intel Core i7 8550U 1.8GHz','Intel UHD Graphics 620','16GB','512GB SSD','13.3"','Full HD 1920x1080',1.49,'Windows',4,227);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Gaming Inspiron 7577','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',21651448,14,'Dell','Intel Core i5 7300HQ 2.5GHz','Nvidia GeForce GTX 1060','8GB','256GB SSD','15.6"','Full HD 1920x1080',2.65,'Windows',0,315);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Ultrabook Zenbook UX430UA','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',29547496,21,'Asus','Intel Core i7 7500U 2.7GHz','Intel HD Graphics 620','8GB','256GB SSD','14.0"','Full HD 1920x1080',1.25,'Windows',4,873);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Acer 2 in 1 Convertible Spin 5','https://anphat.com.vn/media/product/39134_35206_1.png',45075485,29,'Acer','Intel Core i5 8250U 1.6GHz','Intel UHD Graphics 620','8GB','256GB SSD','13.3"','IPS Panel Full HD / Touchscreen 1920x1080',1.5,'Windows',0,209);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',42258463,13,'Dell','Intel Core i7 7500U 2.7GHz','AMD Radeon R5 M430','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'Linux',1,129);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3567','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',47740793,25,'Dell','Intel Core i3 6006U 2GHz','AMD Radeon R5 M430','4GB','256GB SSD','15.6"','Full HD 1920x1080',2.2,'Linux',2,383);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Asus Notebook X541UV-DM1439T (i3-7100U/6GB/256GB/GeForce','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',34358983,23,'Asus','Intel Core i3 7100U 2.4GHz','Nvidia GeForce 920M','6GB','256GB SSD','15.6"','Full HD 1920x1080',2,'Windows',4,860);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Gaming Omen 15-ce007nv','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',28334041,19,'HP','Intel Core i7 7700HQ 2.8GHz','Nvidia GeForce GTX 1050','12GB','128GB SSD + 1TB HDD','15.6"','IPS Panel Full HD 1920x1080',2.62,'Windows',2,517);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 15-bs017nv (i7-7500U/8GB/256GB/Radeon','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',48475354,16,'HP','Intel Core i7 7500U 2.7GHz','AMD Radeon 530','8GB','256GB SSD','15.6"','Full HD 1920x1080',1.91,'Windows',1,416);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Notebook 15-bw000nv (E2-9000e/4GB/500GB/Radeon','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',46203266,8,'HP','AMD E-Series E2-9000e 1.5GHz','AMD Radeon R2','4GB','500GB HDD','15.6"','Full HD 1920x1080',2.1,'Windows',2,267);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('Dell Notebook Inspiron 3576','https://cdn.ankhang.vn/media/product/20971_laptop_dell_latitude_3520_1.jpg',36210912,12,'Dell','Intel Core i5 8250U 1.6GHz','AMD Radeon 520','8GB','1TB HDD','15.6"','Full HD 1920x1080',2.2,'Linux',2,694);
INSERT INTO Product (name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates) VALUES ('HP Ultrabook Envy 13-ad009n','https://cdn.tgdd.vn/Products/Images/44/284190/hp-15s-fq2662tu-i3-6k795pa-020722-020019-600x600.jpg',33584414,8,'HP','Intel Core i7 7500U 2.7GHz','Nvidia GeForce MX150','8GB','256GB SSD','13.3"','IPS Panel Full HD 1920x1080',1.38,'Windows',5,235);

INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'James',
    'Butt',
    '504-845-1427',
    'jbutt@gmail.com',
    '1973-04-06',
    'jamesbutt',
    'jamesbutt26760',
    '6649 N Blue Gum St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Josephine',
    'Darakjy',
    '810-374-9840',
    'josephine_darakjy@darakjy.org',
    '2009-03-06',
    'josephinedarakjy',
    'josephinedarakjy39878',
    '4 B Blue Ridge Blvd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Art',
    'Venere',
    '856-264-4130',
    'art@venere.org',
    '1971-12-16',
    'artvenere',
    'artvenere26283',
    '8 W Cerritos Ave #54'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Lenna',
    'Paprocki',
    '907-921-2010',
    'lpaprocki@hotmail.com',
    '2008-09-14',
    'lennapaprocki',
    'lennapaprocki39705',
    '639 Main St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Donette',
    'Foller',
    '513-549-4561',
    'donette.foller@cox.net',
    '1970-05-08',
    'donettefoller',
    'donettefoller25696',
    '34 Center St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Simona',
    'Morasca',
    '419-800-6759',
    'simona@morasca.com',
    '1970-08-03',
    'simonamorasca',
    'simonamorasca24322',
    '3 Mcauley Dr'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Mitsue',
    'Tollner',
    '773-924-8565',
    'mitsue_tollner@yahoo.com',
    '1974-05-09',
    'mitsuetollner',
    'mitsuetollner27158',
    '7 Eads St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Leota',
    'Dilliard',
    '408-813-1105',
    'leota@hotmail.com',
    '2010-07-21',
    'leotadilliard',
    'leotadilliard40380',
    '7 W Jackson Blvd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Sage',
    'Wieser',
    '605-794-4895',
    'sage_wieser@cox.net',
    '1984-03-19',
    'sagewieser',
    'sagewieser30760',
    '5 Boston Ave #88'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Kris',
    'Marrier',
    '410-804-4694',
    'kris@gmail.com',
    '2010-08-05',
    'krismarrier',
    'krismarrier40395',
    '228 Runamuck Pl #2808'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Minna',
    'Amigon',
    '215-422-8694',
    'minna_amigon@yahoo.com',
    '1998-04-03',
    'minnaamigon',
    'minnaamigon35888',
    '2371 Jerrold Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Abel',
    'Maclead',
    '631-677-3675',
    'amaclead@gmail.com',
    '1981-12-09',
    'abelmaclead',
    'abelmaclead29929',
    '37275 St  Rt 17m M'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Kiley',
    'Caldarera',
    '310-254-3084',
    'kiley.caldarera@aol.com',
    '1987-06-01',
    'kileycaldarera',
    'kileycaldarera31929',
    '25 E 75th St #69'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Graciela',
    'Ruta',
    '440-579-7763',
    'gruta@cox.net',
    '1990-02-12',
    'gracielaruta',
    'gracielaruta20132',
    '98 Connecticut Ave Nw'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Cammy',
    'Albares',
    '956-841-7216',
    'calbares@gmail.com',
    '1990-04-29',
    'cammyalbares',
    'cammyalbares19478',
    '56 E Morehead St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Mattie',
    'Poquette',
    '602-953-6360',
    'mattie@aol.com',
    '1990-08-07',
    'mattiepoquette',
    'mattiepoquette20308',
    '73 State Road 434 E'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Meaghan',
    'Garufi',
    '931-235-7959',
    'meaghan@hotmail.com',
    '2004-11-12',
    'meaghangarufi',
    'meaghangarufi38303',
    '69734 E Carrillo St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Gladys',
    'Rim',
    '414-377-2880',
    'gladys.rim@rim.org',
    '1983-01-05',
    'gladysrim',
    'gladysrim30321',
    '322 New Horizon Blvd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Yuki',
    'Whobrey',
    '313-341-4470',
    'yuki_whobrey@aol.com',
    '2005-11-13',
    'yukiwhobrey',
    'yukiwhobrey38669',
    '1 State Route 27'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Fletcher',
    'Flosi',
    '815-426-5657',
    'fletcher.flosi@yahoo.com',
    '2010-11-29',
    'fletcherflosi',
    'fletcherflosi40511',
    '394 Manchester Blvd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Bette',
    'Nicka',
    '610-492-4643',
    'bette_nicka@cox.net',
    '1990-09-04',
    'bettenicka',
    'bettenicka25085',
    '6 S 33rd St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Veronika',
    'Inouye',
    '408-813-4592',
    'vinouye@aol.com',
    '1990-06-05',
    'veronikainouye',
    'veronikainouye24628',
    '6 Greenleaf Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Willard',
    'Kolmetz',
    '972-896-4882',
    'willard@hotmail.com',
    '1990-01-16',
    'willardkolmetz',
    'willardkolmetz32889',
    '618 W Yakima Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Maryann',
    'Royster',
    '518-448-8982',
    'mroyster@royster.com',
    '2002-05-17',
    'maryannroyster',
    'maryannroyster37393',
    '74 S Westgate St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Alisha',
    'Slusarski',
    '732-635-3453',
    'alisha@slusarski.com',
    '1993-01-30',
    'alishaslusarski',
    'alishaslusarski33999',
    '3273 State St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Allene',
    'Iturbide',
    '715-530-9863',
    'allene_iturbide@cox.net',
    '2009-01-19',
    'alleneiturbide',
    'alleneiturbide39832',
    '1 Central Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Chanel',
    'Caudy',
    '913-899-1103',
    'chanel.caudy@caudy.org',
    '1990-07-29',
    'chanelcaudy',
    'chanelcaudy28700',
    '86 Nw 66th St #8673'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Ezekiel',
    'Chui',
    '410-235-8738',
    'ezekiel@chui.com',
    '2005-05-22',
    'ezekielchui',
    'ezekielchui38494',
    '2 Cedar Ave #84'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Willow',
    'Kusko',
    '212-934-5167',
    'wkusko@yahoo.com',
    '1994-05-09',
    'willowkusko',
    'willowkusko34463',
    '90991 Thorburn Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Bernardo',
    'Figeroa',
    '936-597-3614',
    'bfigeroa@aol.com',
    '2003-04-22',
    'bernardofigeroa',
    'bernardofigeroa37733',
    '386 9th Ave N'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Ammie',
    'Corrio',
    '614-648-3265',
    'ammie@corrio.com',
    '1981-07-02',
    'ammiecorrio',
    'ammiecorrio29769',
    '74874 Atlantic Ave'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Francine',
    'Vocelka',
    '505-335-5293',
    'francine_vocelka@vocelka.com',
    '1990-09-11',
    'francinevocelka',
    'francinevocelka23631',
    '366 South Dr'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Ernie',
    'Stenseth',
    '201-387-9093',
    'ernie_stenseth@aol.com',
    '1971-01-13',
    'erniestenseth',
    'erniestenseth25946',
    '45 E Liberty St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Albina',
    'Glick',
    '732-782-6701',
    'albina@glick.com',
    '1990-07-24',
    'albinaglick',
    'albinaglick18833',
    '4 Ralph Ct'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Alishia',
    'Sergi',
    '212-753-2740',
    'asergi@gmail.com',
    '1990-07-12',
    'alishiasergi',
    'alishiasergi33066',
    '2742 Distribution Way'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Solange',
    'Shinko',
    '504-265-8174',
    'solange@shinko.com',
    '1992-04-20',
    'solangeshinko',
    'solangeshinko33714',
    '426 Wolf St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Jose',
    'Stockham',
    '212-569-4233',
    'jose@yahoo.com',
    '1993-07-03',
    'josestockham',
    'josestockham34153',
    '128 Bransten Rd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Rozella',
    'Ostrosky',
    '805-609-1531',
    'rozella.ostrosky@ostrosky.com',
    '1996-04-07',
    'rozellaostrosky',
    'rozellaostrosky35162',
    '17 Morena Blvd'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Valentine',
    'Gillian',
    '210-300-6244',
    'valentine_gillian@gmail.com',
    '1990-03-26',
    'valentinegillian',
    'valentinegillian23827',
    '775 W 17th St'
  );
INSERT INTO Customer (
    first_name,
    last_name,
    phone,
    email,
    birthday,
    username,
    password,
    address
  ) VALUE(
    'Kati',
    'Rulapaugh',
    '785-219-7724',
    'kati.rulapaugh@hotmail.com',
    '1990-01-06',
    'katirulapaugh',
    'katirulapaugh18634',
    '6980 Dorsett Rd'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Youlanda',
    'Schemmer',
    '541-993-2611',
    'youlanda@aol.com',
    'youlandaschemmer',
    'youlandaschemmer35703'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Dyan',
    'Oldroyd',
    '913-645-8918',
    'doldroyd@aol.com',
    'dyanoldroyd',
    'dyanoldroyd30339'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Roxane',
    'Campain',
    '907-335-6568',
    'roxane@hotmail.com',
    'roxanecampain',
    'roxanecampain23189'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Lavera',
    'Perin',
    '305-995-2078',
    'lperin@perin.org',
    'laveraperin',
    'laveraperin21825'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Erick',
    'Ferencz',
    '907-227-6777',
    'erick.ferencz@aol.com',
    'erickferencz',
    'erickferencz26161'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Fatima',
    'Saylors',
    '952-479-2375',
    'fsaylors@saylors.org',
    'fatimasaylors',
    'fatimasaylors35924'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Jina',
    'Briddick',
    '617-997-5771',
    'jina_briddick@briddick.com',
    'jinabriddick',
    'jinabriddick18485'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Kanisha',
    'Waycott',
    '323-315-7314',
    'kanisha_waycott@yahoo.com',
    'kanishawaycott',
    'kanishawaycott36054'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Emerson',
    'Bowley',
    '608-658-7940',
    'emerson.bowley@bowley.org',
    'emersonbowley',
    'emersonbowley33818'
  );
INSERT INTO Admin (
    first_name,
    last_name,
    phone,
    email,
    username,
    password
  ) VALUE(
    'Blair',
    'Malet',
    '215-794-4519',
    'bmalet@yahoo.com',
    'blairmalet',
    'blairmalet29597'
  );
-- News
INSERT INTO News (`id`, `admin_id`,`title`, `thumbnail`, `content`)
VALUES (
    1,
    1,
    'Trên tay SSD SAMSUNG 990 PRO  - Chiến binh mới trong dòng Flagship 2022',
    'https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/ss-990-pro-bia.jpg?v=1669969576323',
    '<div class=\"article-details\">	<h1 class=\"article-title\">		<a href=\"/tren-tay-ssd-samsung-990-pro-chien-binh-moi-trong-dong-flagship-2022\">Trên tay SSD SAMSUNG 990 PRO  - Chiến binh mới trong dòng Flagship 2022</a> </h1> <div class=\"date\">		 Thứ Fri,										<div class=\"news_home_content_short_time\">									02/12/2022								</div> <div class=\"post-time\">											Đăng bởi 			Huỳnh Ngọc		</div> </div> <div class=\"article-content\">		<div class=\"rte\">			<p> </p> <p style=\"text-align: justify;\">								<em>Bên cạnh SanDisk, Samsung là một trong những cái tên kỳ cựu trong làng sản xuất ổ cứng SSD.Và mới đây Samsung lại tiếp tục cho ra mắt sản phẩm mới mang tên 					<strong>SSD Samsung 990 Pro</strong>. Nếu bạn đang tò mò hay có ý định mua sản phẩm thì hãy đọc ngay bài viết dưới đây của MemoryZone để có cái nhìn trực quan nhất về sản phẩm này nào!				</em> </p> <h2>1. Lịch sử phát triển của ổ cứng SSD Samsung 990 Pro</h2> <p style=\"text-align: justify;\">				<strong>Ổ cứng SSD</strong> đầu tiên được sản xuất bởi Samsung được ra mắt lần đầu tiên vào tháng 4 / 2008, đó là chiếc SSD Samsung SLC SATA II 64GB lần đầu được ra mắt với giá khởi điểm là … 1130$ đô-la! Dần theo thời gian, thế giới đã chứng kiến sự phát triển dần của công nghệ flash NAND, từ SLC sang TLC rồi đến QLC. Từ đó chúng ta có thể nhận định rằng, công nghệ nói chung và SSD nói riêng đang từng ngày, từng ngày đang phát triển không ngừng, một cách thần tốc, với một cái “giá” phải trả là mang đến hiệu suất tối ưu nhất cho người dùng.			</p> <p> </p><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/ss-990-pro-1.jpg?v=1669967926135\" data-origin=\"100,800\" alt=\"\" data-proportion=\"true\" data-size=\"1070px,800px\" data-align=\"\" data-file-name=\"ss-990-pro-1.jpg?v=1669967926135\" data-file-size=\"0\" origin-size=\"800,800\" style=\"width: 1070px; height: 800px;\" data-index=\"0\"></figure></div><p><br></p> <p> </p><p style=\"text-align: center;\">				<em>SSD SAMSUNG 990 PRO – Sự hoàn hảo tuyệt đối!</em> </p> <p style=\"text-align: justify;\">Và 				<strong>SSD Samsung 990 Pro</strong> là sản phẩm hội tụ những công nghệ mới, những điều tinh hoa nhất mà Samsung muốn gửi đến cho người dùng. Được xem là 1 “ngựa chiến” mới của nhà Samsung trong dòng flagship SSD. Hãy cùng MemoryZone đánh giá thực tế từ hình ảnh, hiệu năng và so sánh với các sản phẩm tiền nhiệm từ A-Z nhé!			</p> <h2 style=\"text-align: justify;\">2. Đánh giá nhanh SSD Samsung 990 Pro</h2> <p style=\"text-align: justify;\">				<strong>SSD Samsung 990 Pro</strong> là sản phẩm flagship mới nhất của “người khổng lồ” đến từ Hàn Quốc – Samsung, được ra mắt kèm theo lời hứa “tốc độ tia chớp - hiệu suất vượt trội”. Với lợi thế về bộ điều khiển độc quyền và V-NAND của riêng mình, Samsung tuyên bố sản phẩm đã được \"tối ưu gaming – chinh phục tác vụ nặng\".			</p> <p> <strong>Ưu điểm</strong> </p> <ul><li>Tốc độ đọc, ghi “khủng” nhất thế giới.</li><li>Độ bền cao, hiệu năng ổn định, bảo hành 5 năm.</li><li>Phần mềm đi kèm Samsung Magician xuất sắc .</li></ul> <p> <strong>Nhược điểm</strong> </p> <ul><li>Giá thành chưa tốt</li><li>Tốc ghi ngẫu nhiên 4K chưa đạt như kỳ vọng.</li></ul> <h2>3. Thiết kế - tính năng và các công nghệ đi kèm</h2> <p>Phiên bản				<strong> SSD Samsung 990 Pro</strong> năm nay vẫn thân thiện với người dùng với tiêu chí thiết kế tiêu chuẩn “quốc dân” PCIe 4.0 x4 NVMe 2.0, form-factor M.2 2280. Ngoài ra, phiên bản 				<strong>990 Pro</strong> năm nay sẽ là ổ SSD đầu tiên được trang bị công nghệ mới nhất là TLC V-NAND thế hệ thứ 7.			</p> <p> <strong>Năm nay SSD Samsung 990 Pro </strong>sẽ có hai phiên bản:			</p> <ul><li> <strong>SSD Samsung 990 Pro</strong> có heatsink: Phù hợp cho hệ console như PS5 để gia tăng khả năng giải nhiệt.				</li><li> <strong>SSD Samsung 990 Pro </strong>không heatsink: Phù hợp với nhiều đối tượng hơn, dành cho những bạn cần hiệu năng tốt mà vẫn muốn tiết kiệm được ngân sách				</li></ul> <h2>4. Hiệu suất vượt trội, đáng kinh ngạc SSD Samsung 990 Pro</h2> <p>Về hiệu suất được công bố, 				<strong>SSD Samsung 990 Pro</strong> có tốc độ đọc (Read) 7450MB/s và tốc độ ghi (Write) 6900MB/s - gần đạt tốc độ tối đa theo lý thuyết tốt nhất của PCIe 4.0 là 8000MB/s. Đây là một cải tiến đáng kinh ngạc so người tiền nhiệm 				<strong>SSD Samsung 980 Pro</strong> “chỉ” với tốc độ đọc (Read) 7000MB/s và ghi (Write) 5000MB/s.			</p> <p> </p><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/ss-990-pro-2.jpg?v=1669968517071\" data-origin=\"100,802\" alt=\"\" data-proportion=\"true\" data-size=\"1070px,802px\" data-align=\"\" data-file-name=\"ss-990-pro-2.jpg?v=1669968517071\" data-file-size=\"0\" origin-size=\"802,802\" style=\"width: 1070px; height: 802px;\" data-index=\"1\"></figure></div><p><br></p> <p> </p><p style=\"text-align: justify;\">Tốc độ đọc và ghi ngẫu nhiên (Random 4K – IOPS), 				<strong>SSD Samsung 990 Pro</strong> dự kiến ​​sẽ đạt mức cao nhất là khoảng 1.400 nghìn lượt đọc và 1.550 nghìn lượt ghi IOPS, tức cải thiện lần lượt 40% và 55% hiệu suất so với 				<strong>SSD Samsung 980 Pro</strong>. Và tất nhiên, 				<strong>SSD Samsung 990 Pro</strong> sẽ rất phù hợp để các game thủ “hardcore” bay cao hơn trong cuộc chơi, đáp ứng một-cách-tối-ưu-nhất cho content creator và phân tích dữ liệu hiệu quả hơn.			</p> <p style=\"text-align: justify;\">				<strong>SSD Samsung 990 Pro </strong>được phủ thêm một lớp niken trên bộ controller để cải thiện khả năng giải nhiệt tổng thể, kèm theo đó là công nghệ Dynamic Thermal Guard của chính Samsung, giúp SSD tối ưu các tác vụ nặng mà không giảm hiệu suất.</p> <p style=\"text-align: justify;\">			</p><h2 style=\"text-align: justify;\">5. Review hiệu năng thực tế của SSD Samsung 990 Pro Test trên cấu hình:</h2> <ul><li style=\"text-align: justify;\">Mainboard MSI PRO Z690-A WIFI DDR4</li><li style=\"text-align: justify;\">CPU Intel Core i9-13900K</li><li style=\"text-align: justify;\">Ram Kingston HyperX Predator 32GB 3200MHz D4 (x2)</li><li style=\"text-align: justify;\">					<strong>SSD Samsung 990 Pro</strong> PCIe Gen 4.0 x4 NVMe V-NAND M.2 2280 1TB				</li><li style=\"text-align: justify;\">Windows 11 Pro 64-bit</li></ul> <p style=\"text-align: justify;\">Link tham khảo cấu hình tương tự: 				<a href=\"https://memoryzone.com.vn/pc-st-neptune-i9k-g13\" target=\"_blank\">TẠI ĐÂY</a> </p> <p style=\"text-align: justify;\">Để kiểm tra hiệu năng thực tế, MemoryZone sử dụng các phần mềm sau đây:<span style=\"font-weight: var(--bs-body-font-weight);\">​</span></p><ul><li style=\"text-align: justify;\">Anvil Benchmark</li><li style=\"text-align: justify;\">AS SSD Benchmark</li><li style=\"text-align: justify;\">Crystal Disk Info</li><li style=\"text-align: justify;\">Crystal Disk Mark</li></ul> <p style=\"text-align: justify;\">Và đây là kết quả test nhanh:</p> <p style=\"text-align: center;\">								</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\" style=\"width: 100%; min-width: 100%;\"><figure style=\"margin: auto; width: 100%;\"><img src=\"https://lh3.googleusercontent.com/O09JHYi4rdHQFqh5RLW3BPFC8_kMBM-ZESlkSjumDqJUJ-imaBCYkO2MyVSz2x-uUEq1_7kZdD9k-hHU4nL9mAiWbIFOmnuj-8iBYAMzO99qVI1rf01WzLeEifJNEVV5CS6htAmoBu6-2-qLXVF7vCyQtwmsAOuXOVtqQPWFxZ3xOjbowjLm0j_wAzKOLA\" data-origin=\"100,\" alt=\"\" data-proportion=\"true\" data-align=\"center\" data-size=\"100%,\" data-file-name=\"O09JHYi4rdHQFqh5RLW3BPFC8_kMBM-ZESlkSjumDqJUJ-imaBCYkO2MyVSz2x-uUEq1_7kZdD9k-hHU4nL9mAiWbIFOmnuj-8iBYAMzO99qVI1rf01WzLeEifJNEVV5CS6htAmoBu6-2-qLXVF7vCyQtwmsAOuXOVtqQPWFxZ3xOjbowjLm0j_wAzKOLA\" data-file-size=\"0\" origin-size=\"1279,882\" style=\"width: 100%;\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"100,\" data-index=\"9\"></figure></div><p style=\"text-align: center;\"><strong>									</strong></p> <p style=\"text-align: center;\"> </p><p style=\"text-align: center;\">				<em>Anvil Benchmark</em> </p> <p style=\"text-align: center;\">								</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\" style=\"width: 100%; min-width: 100%;\"><figure style=\"margin: auto; width: 100%;\"><img src=\"https://lh6.googleusercontent.com/4okRGHqdo9OIXsV9rV-kTKzQXP7Ziu59YC6gSduqv7FVR46zHj8HelZp8behd9mva806-L-mI7WFZ_2z4Keyede-43Vhi0YyEEWcDvEt-27Xbj6HASP7F6kuND2l5BcD9O4COn_Byf7ECYCHPvXv9Ej8V0pMdR3lwbIcQTVBkNuHC3wPLIh4LOn_fFemUQ\" data-origin=\"100,\" alt=\"\" data-proportion=\"true\" data-align=\"center\" data-size=\"100%,\" data-file-name=\"4okRGHqdo9OIXsV9rV-kTKzQXP7Ziu59YC6gSduqv7FVR46zHj8HelZp8behd9mva806-L-mI7WFZ_2z4Keyede-43Vhi0YyEEWcDvEt-27Xbj6HASP7F6kuND2l5BcD9O4COn_Byf7ECYCHPvXv9Ej8V0pMdR3lwbIcQTVBkNuHC3wPLIh4LOn_fFemUQ\" data-file-size=\"0\" origin-size=\"1432,805\" style=\"width: 100%;\" data-index=\"5\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"100,\"></figure></div><p style=\"text-align: center;\"><strong>									</strong></p> <p style=\"text-align: center;\"> </p><p style=\"text-align: center;\">				<em>AS SSD Benchmark</em> </p> <p style=\"text-align: center;\">								</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\" style=\"width: 100%; min-width: 100%;\"><figure style=\"margin: auto; width: 100%;\"><img src=\"https://lh3.googleusercontent.com/KPCDueAUh790hqvtib8SGJF0sczPQt-ksXapRh_bOGQCGlOlWZG7E9usmEGLlvggegSgZMqhDvpQANpidNHVDy340mU8kyWZRoU2uLj28GTdr2nQ2hp24dlDldMqHvvyZdXdpLXzQ2KTtSvnEE0sByMKrfeJsOOhQhPTbgCSlWFiNilojNVES8oLEPcg9Q\" data-origin=\"100,\" alt=\"\" data-proportion=\"true\" data-align=\"center\" data-size=\"100%,\" data-file-name=\"KPCDueAUh790hqvtib8SGJF0sczPQt-ksXapRh_bOGQCGlOlWZG7E9usmEGLlvggegSgZMqhDvpQANpidNHVDy340mU8kyWZRoU2uLj28GTdr2nQ2hp24dlDldMqHvvyZdXdpLXzQ2KTtSvnEE0sByMKrfeJsOOhQhPTbgCSlWFiNilojNVES8oLEPcg9Q\" data-file-size=\"0\" origin-size=\"1432,805\" style=\"width: 100%;\" data-index=\"6\" data-rotate=\"\" data-rotatex=\"\" data-rotatey=\"\" data-percentage=\"100,\"></figure></div><p style=\"text-align: center;\"><em>					<strong>											</strong>Crystal Disk Mark &amp; Crystal Disk Info				</em></p> <p style=\"text-align: center;\"> </p><h2>6. So sánh nhanh line sản phẩm SSD Samsung 990 Pro</h2> <p> </p> <table> <tbody> <tr> <td> <p style=\"text-align: center;\">								<strong>Sản phẩm</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>1TB</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>2TB</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>4TB</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Giá dự kiến</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>$169.99 | $189.99</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>$289.99 | $309.99</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>N/A</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Form Factor</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>M.2 2280</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>M.2 2280</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>M.2 2280</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Giao thức</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>PCIe 4.0 x4</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>PCIe 4.0 x4</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>PCIe 4.0 x4</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Controller</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Samsung Pascal</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Samsung Pascal</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Samsung Pascal</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>DRAM</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>LPDDR4</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>LPDDR4</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>LPDDR4</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Flash Memory</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>176-Layer V-NAND TLC</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>176-Layer V-NAND TLC</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>176-Layer V-NAND TLC</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Tốc độ đọc</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>7,450 MB/s</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>7,450 MB/s</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>7,450 MB/s</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Tốc độ ghi</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>6,900 MB/s</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>6,900 MB/s</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>6,900 MB/s</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Tốc độ đọc ngẫu nhiên</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.2M</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.4M</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.4M</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Tốc độ ghi ngẫu nhiên</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.55M</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.55M</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>Up to 1.55M</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Bảo mật</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>TCG/Opal 2.0</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>TCG/Opal 2.0</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>TCG/Opal 2.0</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Độ bền (TBW)</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>600TB</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>1200TB</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>2400TB</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Part Number</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>MZ-V9P1T0BW | MZ-V9P1T0CW</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>MZ-V9P2T0BW | MZ-V9P2T0CW</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>MZ-V9P4T0BW | MZ-V9P4T0CW</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Kích thước</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>2.30mm | 8.20mm</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>2.30mm | 8.20mm</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>2.30mm | 8.20mm</strong> </p> </td> </tr> <tr> <td> <p style=\"text-align: center;\">								<strong>Bảo hành</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>5-Năm</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>5-Năm</strong> </p> </td> <td> <p style=\"text-align: center;\">								<strong>5-Năm</strong> </p> </td> </tr> </tbody> </table> <h2>7. Kết luận về Samsung 990 Pro</h2> <p> </p><div class=\"se-component se-image-container __se__float- __se__float-none\" contenteditable=\"false\"><figure style=\"margin: 0px;\"><img data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/ss-990-pro-4.jpg?v=1669969379375\" data-origin=\"100,800\" alt=\"\" data-proportion=\"true\" data-size=\"1070px,800px\" data-align=\"\" data-file-name=\"ss-990-pro-4.jpg?v=1669969379375\" data-file-size=\"0\" origin-size=\"800,800\" style=\"width: 1070px; height: 800px;\" data-index=\"7\"></figure></div><p><br></p> <p> </p><p style=\"text-align: justify;\">Có thể nói trong vô vàn các sự lựa chọn ổ cứng SSD hiện nay, thì 				<strong>SSD Samsung 990 Pro</strong> được xem là sự lựa chọn tốt nhất dành cho game thủ cả về giá và hiệu năng hoạt động được khẳng định và đánh giá chi tiết bởi các tạp chí công nghệ hàng đầu thế giới như Cnet, thessdreview, the PC World. TweakTown... Với hiệu suất cực khủng, 				<strong>SSD Samsung 990 Pro</strong> hứa hẹn sẽ là sản phẩm hỗ trợ cho các game thủ chơi tốt hơn mọi tựa game cũng như sắp xếp hợp lý các luồng dữ liệu cho đồ họa, được đi kèm theo công nghệ TurboWrite thông minh, người dùng sẽ không ngần ngại gì sỡ hữu ngay một chiếc tại Memoryzone, và tất nhiên là có sẵn hàng trên kệ!			</p> <p style=\"text-align: justify;\">				<strong>SSD Samsung 990 Pro</strong> bản 1TB: 				<a href=\"https://go.mmz.vn/ssd-samsung-990-pro-1tb\" target=\"_blank\">TẠI ĐÂY</a> </p> <p style=\"text-align: justify;\">				<strong>SSD Samsung 990 Pro </strong>bản 2TB: 				<a href=\"https://go.mmz.vn/ssd-samsung-990-pro-2tb\" target=\"_blank\">TẠI ĐÂY</a> </p> <h2 style=\"text-align: justify;\">8. Tổng kết</h2> <p style=\"text-align: justify;\">Trên đây là những đánh giá chi tiết và chia sẻ về ổ cứng SSD 				<strong>Samsung 990 Pro</strong> đang làm mưa làm gió những ngày gần đây của Memoryzone. Hy vọng bài viết hôm nay đã mang đến cho bạn những thông tin hữu ích. Cảm ơn bạn đã theo dõi bài viết và Memoryzone sẽ tiếp tục cập nhật cho bạn những thông tin công nghệ mới nhất hiện nay. Hãy theo dõi website memoryzone.vn để không bỏ lỡ những bài viết bổ ích và các chương trình khuyến mãi cực hot từ Memoryzone nhé!			</p> </div> </div></div><p>undefinedundefined</p><div class=\"col-xs-12\"><div class=\"row row-noGutter tag-share\">	<div class=\"col-xs-12 col-sm-6 tag_article \">		<strong>Tags:</strong> <a href=\"/blogs/all/tagged/o-cung-samsung\">ổ cứng samsung</a>, 																					<a href=\"/blogs/all/tagged/o-cung-ssd\">ổ cứng ssd</a> </div> <div class=\"col-xs-12 col-sm-6\">		<div class=\"social-sharing f-right\">			<div class=\"addthis_inline_share_toolbox share_add\">							</div> </div> </div></div>undefined</div>'
  );
INSERT INTO News (`id`, `admin_id`,`title`, `thumbnail`, `content`)
VALUES (
    2,
    2,
    'Mainboard là gì? Cấu tạo, chức năng và tiêu chí chọn mainboard phù hợp cho bạn',
    'https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/mainboard-la-gi.jpg?v=1669869401500',
    '<div class=\"article-details\">	<h1 class=\"article-title\">		<a href=\"/mainboard-la-gi\">Mainboard là gì? Cấu tạo, chức năng và tiêu chí chọn mainboard phù hợp cho bạn</a> </h1> <div class=\"date\">		 Thứ Thu,										<div class=\"news_home_content_short_time\">									01/12/2022								</div> <div class=\"post-time\">											Đăng bởi 			Lâm Hải		</div> </div> <div class=\"article-content\">		<div class=\"rte\">			<p> <em>Nếu như CPU được biết đến là bộ não xử lý trên 					<a href=\"https://memoryzone.com.vn/pc-st\" target=\"_blank\">máy tính</a>, 					<a href=\"https://memoryzone.com.vn/laptop\" target=\"_blank\">laptop</a> thì Mainboard sẽ là xương sống giúp thiết bị hoạt động hiệu quả. Vậy thực chất Mainboard là gì? Cấu tạo và chức năng của Mainboard như thế nào? Mời bạn tham khảo bài viết dưới đây nhé!				</em> </p> <p> </p> <h2>1. Mainboard là gì? Bo mạch chủ là gì?</h2> <blockquote>				<p>Mainboard là gì? Mainboard có thể gọi tắt là Mobo/ Main hay đồng thời là Bo mạch chủ. Mainboard là bảng mạch in có vai trò liên kết các thiết bị với nhau thông qua đầu cắm hay dây dẫn phù hợp. Nhờ vào Mainboard mà các linh kiện có thể phát huy được khả năng hoạt động với công suất tối đa như những gì mà người dùng mong muốn trên một chiếc máy tính.</p> </blockquote> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 640px;\"><img alt=\"Bo mạch chủ là gì\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/bo-mach-chu-la-gi-1.jpg?v=1669867849663\" data-origin=\"640,357\" data-proportion=\"true\" data-align=\"center\" data-size=\"640px,357px\" data-file-name=\"bo-mach-chu-la-gi-1.jpg?v=1669867849663\" data-file-size=\"0\" origin-size=\"640,357\" style=\"width: 640px; height: 357px;\" data-index=\"0\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Mainboard là gì?</em> </p> <p>Trên thực tế, 				<a href=\"https://memoryzone.com.vn/mainboard-pc\" target=\"_blank\">Mainboard</a> là trung tâm điều phối các hoạt động chính trên PC và việc kết nối, điều khiển sẽ được thực hiện bởi chip cầu Bắc và chip cầu Nam.			</p> <p> <strong>Tham khảo thêm các dòng máy tính - PC chơi game, học tập:</strong> </p> <ul style=\"margin-left: 40px;\"><li> <a href=\"https://memoryzone.com.vn/pc-mercury-series\" target=\"_blank\">PC Mercury Series</a> </li><li> <a href=\"https://memoryzone.com.vn/pc-tron-bo-homework\" target=\"_blank\">PC trọn bộ Homework</a> </li><li> <a href=\"https://memoryzone.com.vn/pc-titan-series\" target=\"_blank\">PC Titan Series</a> </li><li> <a href=\"https://memoryzone.com.vn/pc-moonator-series\" target=\"_blank\">PC Moonator Series</a> </li></ul> <h2>2. Cấu tạo chi tiết của mainboard</h2> <p>Cấu tạo của bo mạch chủ gồm các thành phần chính như sau:</p> <h3>2.1. Đế cắm CPU</h3> <p style=\"margin-left: 40px;\">Đế cắm 				<a href=\"https://memoryzone.com.vn/cpu-may-tinh\" target=\"_blank\">CPU</a> chay còn gọi là chân Socket. Bộ phận được lắp đặt cố định chip vào bo mạch chủ. Tùy vào loại bo mạch chủ khác nhau mà sẽ có chip tương ứng. Số đế cắm CPU càng lớn sẽ dành cho những dòng chip hiện đại hơn và ngược lại chip cũ sẽ tương thích với số Socket nhỏ.			</p> <h3>2.2. Chip cầu Bắc - Nam</h3> <p style=\"margin-left: 40px;\">Chip cầu Bắc và chip cầu Nam sẽ đảm nhiệm việc điều phối hoạt động của CPU và các linh kiện khác trong máy tính. Chip cầu Bắc sẽ có tên gọi là Memory Controller Hub (MCH). MCH sẽ điều khiển trực tiếp các thành phần có tốc độ nhanh như: 				<a href=\"https://memoryzone.com.vn/ram\" target=\"_blank\">RAM</a>, CPU, card đồ họa.			</p> <p style=\"margin-left: 40px;\">Đồng thời, chip cầu Bắc còn thực hiện trao đổi dữ liệu với chip cầu Nam. Chip cầu Bắc là thành phần quan trọng nhất đối với Bo mạch chủ và là yếu tố dùng để quyết định chất lượng hoạt động cũng như giá thành của Bo mạch chủ.</p> <p style=\"margin-left: 40px;\">Chip cầu Nam có tên là I/O Controller Hub (ICH), chip sẽ điều khiển các thiết bị có tốc độ chậm hơn như: 				<a href=\"https://memoryzone.com.vn/usb\" target=\"_blank\">USB</a>, 				<a href=\"https://memoryzone.com.vn/o-cung-di-dong\" target=\"_blank\">ổ cứng</a>,… Chip cầu Nam thông qua chip cầu Bắc để kết nối với CPU mà thực hiện kết nối trực tiếp.			</p> <p style=\"margin-left: 40px;\">				<strong>Xem thêm:</strong> <a href=\"https://memoryzone.com.vn/cpu-viet-tat-cua-tu-gi\" target=\"_blank\">CPU viết tắt của từ gì? Cấu tạo, vai trò và các thuật ngữ liên quan về CPU</a> </p> <h3>2.3. Khe cắm mở rộng</h3> <p style=\"margin-left: 40px;\">Trên Mainboard sẽ gồm nhiều khe cắm mở rộng để kết nối với các thiết bị phần cứng như card rời, card đồ họa,...</p> <h3>2.4. Card đồ họa</h3> <p style=\"margin-left: 40px;\">				<a href=\"https://memoryzone.com.vn/vga\" target=\"_blank\">Card màn hình</a>(card đồ họa) cũng là thành phần có trong Mainboard và trở nên cần thiết với những người dùng có nhu cầu về thiết kế đồ họa hay chơi game.			</p> <h3>2.5.Card âm thanh</h3> <p style=\"margin-left: 40px;\">Card âm thanh có vai trò giúp cho bo mạch chủ tích hợp được các âm thanh một cách chuẩn xác nhất.</p> <h2>3. Chức năng của mainboard - bo mạch chủ</h2> <p>Bản chất của Mainboard là bản mạch và cấu nối giữa các linh kiện và thiết bị ngoại vi với nhau để tạo thành bộ máy tính nhất. Vậy nên chức năng chính của Mainboard sẽ điều khiển đường truyền và tốc độ của dữ liệu.</p> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 640px;\"><img alt=\"Mainboard là bản mạch và cấu nối giữa các linh kiện\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/mainboard-la-ban-mach-va-cau-noi-giua-cac-linh-kien.jpg?v=1669868016969\" data-origin=\"640,360\" data-proportion=\"true\" data-align=\"center\" data-size=\"640px,360px\" data-file-name=\"mainboard-la-ban-mach-va-cau-noi-giua-cac-linh-kien.jpg?v=1669868016969\" data-file-size=\"0\" origin-size=\"640,360\" style=\"width: 640px; height: 360px;\" data-index=\"1\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">				<br>								<em>Mainboard là bản mạch và cấu nối giữa các linh kiện</em> </p><p>Hơn nữa, Mainboard còn phân phối lượng điện áp phù hợp cho từng thiết bị hay linh kiện, điều này giúp hệ thống được hoạt động một cách ổn định. Bên cạnh đó, Mainboard còn giữ chức năng nâng cấp và quyết định đến tuổi thọ của máy. Vậy nên, cần bảo vệ Mainboard theo đúng khuyến nghị từ nhà sản xuất để máy hoạt động tốt hơn bạn nhé!</p> <p> <strong>Xem thêm:</strong> <a href=\"https://memoryzone.com.vn/ram-may-tinh-la-gi\" target=\"_blank\">RAM máy tính là gì? Máy tính và laptop cần dung lượng RAM bao nhiêu là đủ?</a> </p> <h2>4. Mainboard - bo mạch chủ hoạt động như thế nào?</h2> <p>Mainboard được hoạt động dựa vào tốc độ truyền (bus). Như đã tìm hiểu Mainboard gồm hai chip cầu Bắc và cầu Nam. Nhiệm vụ của hai chip là kết nối thành phần với nhau, nối CPU - RAM hay CPU - VGA Card, RAM với các khe cắm mở rộng.</p> <h2>5. Tổng hợp các thương hiệu sản xuất mainboard nổi tiếng thế giới</h2> <h3>5.1. 				<a href=\"https://memoryzone.com.vn/mainboard-asus\" target=\"_blank\">Mainboard Asus</a> </h3> <p style=\"margin-left: 40px;\">Asus là một trong những thương hiệu sản xuất mainboard tốt nhất trên thị trường. Thương hiệu không chỉ chiếm ưu thế về việc cung cấp các dòng sản phẩm máy tính, laptop mà còn phát triển mạnh mẽ về sản xuất Mainboard. Những chiếc Mainboard của Asus gây ấn tượng với người dùng khi có ngoại hình “cực chất” và khả năng vận hành chất lượng.</p> <p style=\"margin-left: 40px;\">				<strong>Tham khảo thêm các sản phẩm nổi bật từ nhàAsus:</strong> </p> <ul style=\"margin-left: 40px;\"><li> <a href=\"https://memoryzone.com.vn/mainboard-pc-asus-prime-h510m-k\" target=\"_blank\">Mainboard PC ASUS PRIME H510M-K</a> </li><li> <a href=\"https://memoryzone.com.vn/mainboard-pc-asus-tuf-gaming-b660m-plus-d4\" target=\"_blank\">Mainboard PC ASUS TUF GAMING B660M-PLUS D4</a> </li><li> <a href=\"https://memoryzone.com.vn/mainboard-pc-asus-rog-strix-b660-a-gaming-wifi-d4\" target=\"_blank\">Mainboard PC ASUS ROG STRIX B660-A GAMING WIFI D4</a> </li><li> <a href=\"https://memoryzone.com.vn/mainboard-pc-asus-tuf-gaming-z690-plus\" target=\"_blank\">Mainboard PC ASUS TUF GAMING Z690-PLUS (DDR5)</a> </li></ul> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 400px;\"><img alt=\"Mainboard Asus\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/mainboard-asus.png?v=1669868149157\" data-origin=\"400,400\" data-proportion=\"true\" data-align=\"center\" data-size=\"400px,400px\" data-file-name=\"mainboard-asus.png?v=1669868149157\" data-file-size=\"0\" origin-size=\"400,400\" style=\"width: 400px; height: 400px;\" data-index=\"2\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Mainboard Asus</em> </p> <h3>5.2. 				<a href=\"https://memoryzone.com.vn/mainboard-gigabyte\" target=\"_blank\">Mainboard Gigabyte</a> </h3> <p style=\"margin-left: 40px;\">Gigabyte được biết đến là thương hiệu nổi bật với các dòng laptop gaming đình đám. Bên cạnh đó, Gigabyte còn là đơn vị cung cấp các sản phẩm Mainboard chất lượng và ngày càng có bước phát triển đột phá. Thương hiệu tập trung phát triển Mainboard ở phân khúc tầm trung và liên tục cải tiến để nâng cao trải nghiệm khách hàng.</p> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 640px;\"><img alt=\"Mainboard Gigabyte\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/mainboard-gigabyte.jpg?v=1669868160124\" data-origin=\"640,360\" data-proportion=\"true\" data-align=\"center\" data-size=\"640px,360px\" data-file-name=\"mainboard-gigabyte.jpg?v=1669868160124\" data-file-size=\"0\" origin-size=\"640,360\" style=\"width: 640px; height: 360px;\" data-index=\"3\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Mainboard Gigabyte</em> </p> <h3>5.3. 				<a href=\"https://memoryzone.com.vn/mainboard-msi\" target=\"_blank\">Mainboard MSI</a> </h3> <p style=\"margin-left: 40px;\">Bên cạnh hai cái tên nổi bật về sản xuất Mainboard là Asus và Gigabyte thì Mainboard MSI cũng là cái tên đáng được vinh danh. Mainboard MSI có khuynh hướng phát triển riêng dành cho máy tính gaming. Ngoài việc mang đến những đầu tư đáng giá về chất lượng thì Mainboard MSI còn được đánh giá cao về tính thẩm mỹ.</p> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 500px;\"><img alt=\"Mainboard MSI\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/mainboard-msi.png?v=1669868171468\" data-origin=\"500,400\" data-proportion=\"true\" data-align=\"center\" data-size=\"500px,400px\" data-file-name=\"mainboard-msi.png?v=1669868171468\" data-file-size=\"0\" origin-size=\"500,400\" style=\"width: 500px; height: 400px;\" data-index=\"4\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Mainboard MSI</em> </p> <h3>54. 				<a href=\"https://memoryzone.com.vn/mainboard-asrock\" target=\"_blank\">Mainboard Asrock</a> </h3> <p style=\"margin-left: 40px;\">Mainboard Asrock sẽ là gợi ý lý tưởng cho bạn khi tìm kiếm dòng bo mạch chủ dành cho văn phòng đồng bộ. Sản phẩm mang đến độ bền cao và hơn cả mong đợi khi dùng cho các tác vụ máy tính phòng vụ. Tuy nhiên, Mainboard Asrock cũng gặp một vài hạn chế như cấp thấp,đường tụ lỗi,...</p> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 600px;\"><img alt=\"Mainboard Asrock\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/mainboard-asrock-1-jpeg.jpg?v=1669868304057\" data-origin=\"600,400\" data-proportion=\"true\" data-align=\"center\" data-size=\"600px,400px\" data-file-name=\"mainboard-asrock-1-jpeg.jpg?v=1669868304057\" data-file-size=\"0\" origin-size=\"600,400\" style=\"width: 600px; height: 400px;\" data-index=\"5\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Mainboard Asrock</em> </p> <h2>6. Các tiêu chí lựa mua bo mạch chủ phù hợp với máy tính</h2> <h3>6.1. Chọn kích thước bo mạch chủ phù hợp</h3> <p style=\"margin-left: 40px;\">Khi đã nắm được Mainboard là gì, người mua cần nắm vững các tiêu chí để lựa chọn phu hợp. Tiêu chí đầu tiên khi chọn mua các loại bo mạch chủ phù hợp là kích thước. Trên thị trường, các dòng bo mạch chủ sẽ có các kích thước:</p> <ul style=\"margin-left: 40px;\"><li> <p> <strong>E-ATX:</strong> Mainboard này có kích thước lớn nhất, rơi vào khoảng 30.5cm x 33cm, hỗ trợ nhiều khe cắm mở rộng và có thể chạy song song 2 CPU.					</p> </li><li> <p> <strong>ATX:</strong> Mainboard này có kích thước lớn nhất gồm nhiều khe cắm và cổng kết nối.					</p> </li><li> <p> <strong>Micro ATX:</strong> Có kích thước nhỏ hơn ATX 2.4 inch, các khe cắm mở rộng cũng ít hơn.					</p> </li><li> <p> <strong>Mini ITX:</strong> Đây là Mainboard có kích thước nhỏ nhất và chỉ có 1 khe cắm card đầu nối cũng hạn chế.					</p> </li></ul> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 640px;\"><img alt=\"Các kích thước bo mạch chủ\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/cac-kich-thuoc-bo-mach-chu.jpg?v=1669868318280\" data-origin=\"640,321\" data-proportion=\"true\" data-align=\"center\" data-size=\"640px,321px\" data-file-name=\"cac-kich-thuoc-bo-mach-chu.jpg?v=1669868318280\" data-file-size=\"0\" origin-size=\"640,321\" style=\"width: 640px; height: 321px;\" data-index=\"6\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Các kích thước bo mạch chủ</em> </p> <p style=\"margin-left: 40px;\">				Tùy vào nhu cầu sử dụng mà bạn có thể chọn cho mình bo mạch chủ phù hợp và tối thiểu chi phí.							</p> <p style=\"margin-left: 40px;\">				<strong>Xem thêm:</strong> <a href=\"https://memoryzone.com.vn/vram-la-gi-bao-nhieu-gb-vram-la-du\" target=\"_blank\">VRAM là gì? Bao nhiêu GB VRAM là đủ dùng? Phân biệt giữa VRAM và RAM bạn nên biết</a> </p> <h3>6.2. Chọn socket mainboard phù hợp với CPU</h3> <p style=\"margin-left: 40px;\">Lưu ý khi lựa chọn bo mạch chủ cần đảm bảo độ tương thích với CPU, đây là điều vô cùng quan trọng. Bên cạnh đó, Socket Mainboard chỉ có thể hoạt động tối đa công xuất khi kết hợp với dòng chip mà nó hỗ trợ. Vậy nên nếu Socket Mainboard của bạn không phù hợp với CPU thì sẽ không thể hoạt động.</p> <p style=\"text-align: center;\">				</p><div class=\"se-component se-image-container __se__float-center\" contenteditable=\"false\"><figure style=\"margin: auto; width: 640px;\"><img alt=\"Nên lựa chọn socket mainboard phù hợp với CPU\" data-thumb=\"original\" src=\"//bizweb.dktcdn.net/100/329/122/files/nen-lua-chon-socket-mainboard-phu-hop-voi-cpu.jpg?v=1669868333687\" data-origin=\"640,360\" data-proportion=\"true\" data-align=\"center\" data-size=\"640px,360px\" data-file-name=\"nen-lua-chon-socket-mainboard-phu-hop-voi-cpu.jpg?v=1669868333687\" data-file-size=\"0\" origin-size=\"640,360\" style=\"width: 640px; height: 360px;\" data-index=\"7\"></figure></div><p style=\"text-align: center;\"><br></p> <p style=\"text-align: center;\">			</p><p style=\"text-align: center;\">								<em>Nên lựa chọn socket mainboard phù hợp với CPU để hoạt động tốt hơn</em> </p> <h3>6.3. Lựa chọn mainboard theo ngân sách hiện có của bạn</h3> <p style=\"margin-left: 40px;\">Ngoài hai tiêu chí trên thì ngân sách chi trả cho Mainboard cũng là điều hoàn toàn cần thiết. Hãy ưu tiên các bo mạch chủ có hỗ trợ card wifi, các cổng kết nối đa dạng, tốc độ truyền tải cao như Thunderbolt 3, USB 3.1 Gen 2,... để có thể đáp ứng tốt các nhu cầu về họ tập, công việc hay giải trí.</p> <p style=\"margin-left: 40px;\">				<strong>Xem thêm:</strong> <a href=\"https://memoryzone.com.vn/card-do-hoa-laptop-la-gi\" target=\"_blank\">Card đồ họa laptop là gì? Cách chọn card đồ họa rời laptop phù hợp nhu cầu</a> </p> <p style=\"margin-left: 40px;\">Những loại bo mạch chủ giá rẻ &lt;100$ có thể hoạt động khá ổn định nhưng độ bền không cao. Cùng với đó, Mainboard khoảng 100$ sẽ ổn định hơn nhưng sẽ hạn chế về các cổng kết nối. Vậy nên, tốt nhất bạn nên chọn các Mainboard có giá thành rơi vào khoảng 150$ để sử dụng được lâu dài và mang đến những trải nghiệm tốt hơn.</p> <h2>7. Tổng kết</h2> <p>Phía trên là những chia sẻ của 				<a href=\"https://memoryzone.com.vn/\" target=\"_blank\">Memoryzone</a> về cách thức hoạt động, cấu tạo và chức năng của Mainboard. Đồng thời còn giúp bạn đọc trả lời được câu hỏi Mainboard là gì? Song, việc lựa chọn Mainboard phù hợp là vô cùng cần thiết, vậy nên bạn cần nắm rõ những tiêu chí trên nhé!			</p> <p>Cảm ơn bạn đã theo dõi bài viết và nếu còn bất kỳ thắc mắc nào, bạn có thể liên hệ với chúng tôi để được giải đáp. Đừng quên cập nhật các 				<a href=\"https://memoryzone.com.vn/tin-tuc\" target=\"_blank\">tin tức về kiến thức công nghệ</a>, bài viết hữu ích và hàng nghìn khuyến mãi hấp dẫn tại website và 				<a href=\"https://www.facebook.com/memoryzonevietnam\" target=\"_blank\">FanpageMemoryzone</a> bạn nhé.			</p> <p> <strong>Bài viết liên quan:</strong> </p> <ul style=\"margin-left: 40px;\"><li> <a href=\"https://memoryzone.com.vn/cach-bat-bluetooth-tren-laptop-va-may-tinh-win-10\" target=\"_blank\">Hướng dẫn cách bật bluetooth trên laptop và máy tính Win 10 đơn giản và nhanh gọn 2022</a> </li><li> <a href=\"https://memoryzone.com.vn/top-4-cach-bat-mic-laptop-may-tinh\" target=\"_blank\">Top 4+ Cách bật mic laptop, máy tính trong tích tắc và đơn giản nhất</a> </li><li> <a href=\"https://memoryzone.com.vn/bat-mi-cach-doi-mat-khau-may-tinh-win-10-win-11\" target=\"_blank\">“Bật mí” cách đổi mật khẩu máy tính Win 10, Win 11</a> </li><li> <a href=\"https://memoryzone.com.vn/cach-ket-noi-wifi-cho-may-tinh-ban\" target=\"_blank\" class=\"on\">Cách kết nối wifi cho máy tính bàn chỉ trong tích tắc và dễ thao tác</a></li></ul></div></div></div><div class=\"col-xs-12\"><div class=\"row row-noGutter tag-share\">	<div class=\"col-xs-12 col-sm-6 tag_article \">		<strong>Tags:</strong> <a href=\"/blogs/all/tagged/bo-mach-chu-la-gi\">Bo mạch chủ là gì</a>, 																					<a href=\"/blogs/all/tagged/card-man-hinh\">card màn hình</a>, 																					<a href=\"/blogs/all/tagged/laptop\">laptop</a>, 																					<a href=\"/blogs/all/tagged/mainboard\">Mainboard</a>, 																					<a href=\"/blogs/all/tagged/mainboard-la-gi\">Mainboard là gì</a>, 																					<a href=\"/blogs/all/tagged/may-tinh\">máy tính</a>, 																					<a href=\"/blogs/all/tagged/pc\">PC</a>, 																					<a href=\"/blogs/all/tagged/ram\">RAM</a>, 																					<a href=\"/blogs/all/tagged/ram-may-tinh\">RAM máy tính</a> </div> <div class=\"col-xs-12 col-sm-6\">		<div class=\"social-sharing f-right\">			<div class=\"addthis_inline_share_toolbox share_add\">							</div> </div> </div></div></div>'
  );
INSERT INTO News (`id`, `admin_id`,`title`, `thumbnail`, `content`)
VALUES (
    3,
    3,
    'CPU viết tắt của từ gì? Cấu tạo, vai trò và các thuật ngữ liên quan về CPU',
    'https://bizweb.sapocdn.net/thumb/large/100/329/122/articles/cpu-viet-tat-cua-tu-gi.jpg?v=1669807467773',
    '<div class=\"article-details\"><h1 class=\"article-title\"><a href=\"/cpu-viet-tat-cua-tu-gi\">CPU viết tắt của từ gì? Cấu tạo, vai trò và các thuật ngữ liên quan về CPU</a></h1> <div class=\"date\"> <i class=\"fa fa-clock-o\"></i> Thứ Wed, <div class=\"news_home_content_short_time\"> 30/11/2022 </div> <div class=\"post-time\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Đăng bởi <span>Lâm Hải</span></div></div><div class=\"article-content\"> <div class=\"rte\"> <p><em>CPU viết tắt của từ gì? CPU là thuật ngữ quen thuộc đối với người dùng công nghệ và đây là bộ phận trong thể thiếu khi xử lý các hoạt động của hệ thống. Vậy cấu tạo, vai trò của CPU là gì? Hãy cùng <a href=\"https://memoryzone.com.vn/\" target=\"_blank\">Memoryzone</a> giải đáp trong bài viết sau đây bạn nhé!</em></p> <p><meta charset=\"utf-8\" /></p> <h2 dir=\"ltr\">1. CPU viết tắt của từ gì? Vai trò của CPU trên máy tính</h2> <p dir=\"ltr\"><a href=\"https://memoryzone.com.vn/cpu-may-tinh\" target=\"_blank\">CPU</a> viết tắt của từ gì? Dành cho những bạn chưa biết thì CPU có tên đầy đủ là Central Processing Unit và đây là bộ xử lý trung tâm khi nhắc đến các thiết bị laptop hay máy tính.</p> <p dir=\"ltr\">CPU được xem phần không thể thiếu của máy tính, nó được ví như não bộ và là nơi tiếp nhận, xử lý và điều khiển mọi hoạt động của máy tính, laptop. Hơn nữa, CPU còn có thể xử lý nhanh chóng các câu lệnh, các phép tính số học siêu “hack não”.</p> <p dir=\"ltr\"><strong>Xem thêm:</strong><a href=\"https://memoryzone.com.vn/cach-kiem-tra-nhiet-do-cpu-may-tinh-ban-va-laptop\" target=\"_blank\">Cách kiểm tra nhiệt độ CPU máy tính bàn và laptop nhanh chóng và hiệu quả</a></p> <p dir=\"ltr\">Ngoài ra, CPU còn là nơi tiếp nhận thông tin từ các thiết bị ngoại vi như <a href=\"https://memoryzone.com.vn/chuot-gaming-van-phong\" target=\"_blank\">chuột máy tính</a>, <a href=\"https://memoryzone.com.vn/ban-phim-gaming-van-phong\" target=\"_blank\">bàn phím</a>, máy in,... và trả về kết quả cho người dùng qua màn hình chính.</p> <p dir=\"ltr\" style=\"text-align: center;\"><img alt=\"CPU có nhiệm vụ tiếp nhận và xử lý các thông tin\" data-thumb=\"original\" original-height=\"400\" original-width=\"600\" src=\"//bizweb.dktcdn.net/100/329/122/files/cpu-co-nhiem-vu-tiep-nhan-va-xu-ly-cac-thong-tin.jpg?v=1669807403153\" /></p> <p dir=\"ltr\" style=\"text-align: center;\"><meta charset=\"utf-8\" /><em>CPU có nhiệm vụ tiếp nhận và xử lý các thông tin</em><meta charset=\"utf-8\" /></p> <h2 dir=\"ltr\">2. Cấu tạo bên trong của CPU máy tính gồm những gì?</h2> <p dir=\"ltr\">Sau khi đã tìm hiểu rõ về CPU viết tắt của từ gì, người dùng còn thắc mắc cấu tạo bên trong của CPU là gì mà có thể xử lý vô vàn yêu cầu đến như vậy?</p> <p dir=\"ltr\">Một CPU sẽ chứa hàng tỷ các bóng dẫn, chúng được sắp xếp trên những bảng mạch nhỏ và thực hiện các phép tính để khởi chạy chương trình được lưu trữ trong bộ nhớ hệ thống. CPU sẽ bao gồm hai khối chính: Khối tính toán ALU (Arithmetic Logic Unit) và Khối điều khiển CU (Control Unit).</p> <ul style=\"margin-left: 40px;\"> <li aria-level=\"1\" dir=\"ltr\"> <p dir=\"ltr\" role=\"presentation\">Khối điều khiển CU (Control Unit): CU có nhiệm vụ là phiên dịch các lệnh chương trình và điều khiển các xung nhịp hệ thống. CU là phần cốt lõi của bộ xử lý gồm các mạch logic.</p></li> <li aria-level=\"1\" dir=\"ltr\"> <p dir=\"ltr\" role=\"presentation\">Khối tính toán ALU (Arithmetic Logic Unit): Sử dụng hàm để thực hiện các yêu cầu về phép toán số học và logic.</p></li></ul> <p dir=\"ltr\" role=\"presentation\" style=\"text-align: center;\"><img alt=\"CPU gồm hai khối chính là ALU và CU\" data-thumb=\"original\" original-height=\"400\" original-width=\"534\" src=\"//bizweb.dktcdn.net/100/329/122/files/cpu-gom-hai-khoi-chinh-la-alu-va-cu-jpeg-940c4304-12ba-4dcf-8afc-980c6b272e73.jpg?v=1669807291383\" /></p> <p dir=\"ltr\" role=\"presentation\" style=\"text-align: center;\"><meta charset=\"utf-8\" /><em>CPU gồm hai khối chính là ALU và CU</em><meta charset=\"utf-8\" /></p> <p dir=\"ltr\">Ngoài hai khối trên, thì bên trong CPU còn có các thanh ghi (Registers), Opcode, Phần điều khiển:</p> <ul style=\"margin-left: 40px;\"> <li aria-level=\"1\" dir=\"ltr\"> <p dir=\"ltr\" role=\"presentation\"><strong>Thanh ghi (Registers)</strong>: được xem là bộ nhớ có dung lượng khá nhỏ nhưng lại mang tốc độ xử lý cao. Các thanh ghi nằm trong CPU được dùng để lưu trữ tạm các toán hạng, kết quả các phép tính toán, ô nhớ hay tiếp nhận các thông tin từ ALU. Trên thanh ghi thì bộ đếm chương trình sẽ là phần quan trọng nhất bởi nó sẽ trỏ đến các lệnh cần thực thi tiếp theo.</p></li> <li aria-level=\"1\" dir=\"ltr\"> <p dir=\"ltr\" role=\"presentation\"><strong>Opcode:</strong> Opcode sẽ là một phần bộ nhớ dùng để chứa mã máy CPU và có thể dễ dàng thực hiện các lệnh.</p></li> <li aria-level=\"1\" dir=\"ltr\"> <p dir=\"ltr\" role=\"presentation\"><strong>Phần điều khiển:</strong> Có nhiệm vụ điều khiển tần số xung nhịp và các khối. Các mạch xung nhịp trên hệ thống có chức năng đồng bộ các hoạt động xử lý bên trong/ ngoài của CPU. Thời gian giữa hai xung nhịp gọi là chu kỳ xung nhịp. Các xung nhịp hệ thống tạo ra các xung tín hiệu có thời gian chuẩn sẽ được đo bằng đơn vị MHz.</p></li></ul> <p dir=\"ltr\" role=\"presentation\"><strong>Xem thêm:</strong><a href=\"https://memoryzone.com.vn/ram-may-tinh-la-gi\" target=\"_blank\">RAM máy tính là gì? Máy tính và laptop cần dung lượng RAM bao nhiêu là đủ?</a></p> <h2 dir=\"ltr\">3. Tổng hợp thương hiệu CPU phổ biến hiện nay</h2> <h3 dir=\"ltr\">3.1. Thương hiệu CPU Intel</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Intel là hãng cung cấp CPU cho <a href=\"https://memoryzone.com.vn/laptop\" target=\"_blank\">laptop</a>, máy tính lớn nhất hiện nay với hơn 50 năm kinh nghiệm trong lĩnh vực sản xuất. Các chip CPU Intel được ứng dụng nhiều công nghệ hiện đại với cấu hình mạnh mẽ và chất lượng hàng đầu.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\">Rất dễ nhận thấy 3 dòng CPU Intel được sử dụng rộng rãi trên các thiết bị laptop PC lần lượt là <a href=\"https://memoryzone.com.vn/cpu-intel\" target=\"_blank\">Intel Core i</a>, Intel Celeron và Intel Pentium.</p> <p dir=\"ltr\" style=\"text-align: center;\"><img alt=\"Intel và AMD là hai hãng sản xuất CPU nổi tiếng\" data-thumb=\"original\" original-height=\"360\" original-width=\"640\" src=\"//bizweb.dktcdn.net/100/329/122/files/intel-va-amd-la-hai-hang-san-xuat-cpu-noi-tieng-277a7da8-0577-4d11-8a59-4fd63c079dc3.jpg?v=1669807306958\" /></p> <p dir=\"ltr\" style=\"text-align: center;\"><meta charset=\"utf-8\" /><em>Intel và AMD là hai hãng sản xuất CPU nổi tiếng</em><meta charset=\"utf-8\" /></p> <h3 dir=\"ltr\"> 3.2. Thương hiệu CPU AMD</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Cùng với đó là CPU đến từ AMD (Advanced Micro Devices). AMD được biết đến là thương hiệu sản xuất CPU sau Intel và dường như các sản phẩm của AMD đang có sự “đối đầu” với CPU Intel. Cụ thể: nếu như CPU Intel mang đến các sản phẩm Core i3,i5, i7, i9 thì AMD không kém cạnh khi có <a href=\"https://memoryzone.com.vn/cpu-amd\" target=\"_blank\">CPU AMD</a> Ryzen 3, Ryzen 5, Ryzen 7, Ryzen 9.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\">Sự cạnh tranh khốc liệt giữa Intel và AMD sẽ mang đến cho người dùng nhiều cơ hội lựa chọn và các sản phẩm CPU sẽ ngày càng đa dạng, chất lượng hơn.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\"><strong>Xem thêm:</strong><a href=\"https://memoryzone.com.vn/vram-la-gi-bao-nhieu-gb-vram-la-du\" target=\"_blank\">VRAM là gì? Bao nhiêu GB VRAM là đủ dùng? Phân biệt giữa VRAM và RAM bạn nên biết</a></p> <h2 dir=\"ltr\">4. Các thuật ngữ liên quan đến CPU máy tính</h2> <h3 dir=\"ltr\">4.1. Tốc độ CPU</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Tốc độ CPU hay còn gọi là tốc độ xung nhịp CPU. Thuật ngữ này được hiểu là các chỉ số biểu thị số chu kỳ hoạt động mà CPU có thể xử lý trong vòng 1 giây, đơn vị tính là Gigahertz (GHz). Ví dụ thực tế như: CPU Intel có tốc độ xung nhịp là 3.5 GHz/s thì CPU đó có thể thực hiện 3.5 tỷ chu kỳ xoay.</p> <h3 dir=\"ltr\">4.2. Ép xung CPU</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Đi đôi với thuật ngữ tốc độ xung nhịp CPU sẽ là ép xung CPU. Vậy thuật ngữ ép xung CPU được hiểu như thế nào? Ép xung CPU là cách thúc đẩy và giúp tăng tốc độ CPU hơn mức bình thường. Điều này được hiểu là khi ép xung CPU máy tính sẽ hoạt động một cách mạnh mẽ hơn, tăng năng suất và tốc độ xử lý các yêu cầu từ người dùng.</p> <h3 dir=\"ltr\">4.3. CPU usage</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">CPU Usage là thuật ngữ được dùng để nói về dung lượng sử dụng CPU (viết dưới dạng %). Chỉ số CPU Usage thể hiện tốc độ xử lý trên máy là mạnh hay yếu, nếu CPU Usage càng cao thì máy đang hoạt động kém hiệu quả và ngược lại. Chỉ khi nào chỉ số CPU Usage giảm xuống thì tốc độ và công suất máy tính mới được cải thiện.</p> <p dir=\"ltr\" style=\"text-align: center;\"><img alt=\"Tìm hiểu các thuật ngữ xoay quanh CPU\" data-thumb=\"original\" original-height=\"400\" original-width=\"626\" src=\"//bizweb.dktcdn.net/100/329/122/files/tim-hieu-cac-thuat-ngu-xoay-quanh-cpu-1-1.jpg?v=1669807212527\" /></p> <p dir=\"ltr\" style=\"text-align: center;\"><meta charset=\"utf-8\" /><em>Tìm hiểu các thuật ngữ xoay quanh CPU</em><meta charset=\"utf-8\" /></p> <h3 dir=\"ltr\"> 4.4. Socket CPU</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Chân Socket là tên gọi khác của Socket CPU đây là bộ phận có nhiệm vụ kết nối chip CPU và bộ phận bo mạch chủ. Socket CPU sẽ giữ cho CPU được cố định tại một chỗ, không bị xê dịch hay va chạm với các bộ phận khác khi người dùng di chuyển CPU. Không phải chân Socket nào cũng có thể đi cùng CPU bất kỳ mà mỗi loại sẽ có chân Socket riêng. Vậy nên bạn cần lựa chọn chân Socket phù hợp với CPU của mình.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\"><strong>Xem thêm:</strong><a href=\"https://memoryzone.com.vn/card-do-hoa-laptop-la-gi\" target=\"_blank\">Card đồ họa laptop là gì? Cách chọn card đồ họa rời laptop phù hợp nhu cầu</a></p> <h3 dir=\"ltr\">4.5. CPU Tray</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">CPU Tray là gì? Thuật ngữ này chắc hẳn không còn mới mẻ gì với dân công nghệ nhưng có thể với những bạn mới tiếp xúc thì khó mà biết đến. CPU Tray hay còn được gọi là CPU hàng Tray dùng để nói về một CPU không kèm quạt và không có hộp đựng riêng. Khác với CPU Tray, CPU hàng box sẽ bao gồm cả quạt và hộp đựng.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\">Sở dĩ CPU Tray khác với CPU box là vì đây là những sản phẩm được bán với số lượng lớn cho các nhà sản xuất phụ tùng gốc. Bởi họ sẽ lắp đặt trực tiếp CPU đó vào laptop hay <a href=\"https://memoryzone.com.vn/pc-st\" target=\"_blank\">PC máy tính bàn</a>nên sẽ không bao gồm hộp đựng bày bản. Cùng với đó, CPU không bao gồm quạt là vì bên mua sẽ tùy biến và lựa chọn hệ thống tản nhiệt cho phù hợp với cấu hình máy mà họ mong muốn.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\"><strong>Tham khảo thêm:</strong></p> <ul dir=\"ltr\" style=\"margin-left: 80px;\"> <li><a href=\"https://memoryzone.com.vn/pc-mercury-series\" target=\"_blank\">PC Mercury Series</a></li> <li><a href=\"https://memoryzone.com.vn/pc-venus-series\" target=\"_blank\">PC Venus Series</a></li> <li><a href=\"https://memoryzone.com.vn/pc-titan-series\" target=\"_blank\">PC Titan Series</a></li> <li><a href=\"https://memoryzone.com.vn/pc-moonator-series\" target=\"_blank\">PC Moonator Series</a></li> <li><a href=\"https://memoryzone.com.vn/pc-neptune-series\" target=\"_blank\">PC Neptune Series</a></li></ul> <h2 dir=\"ltr\">5. Câu hỏi thường gặp</h2> <h3 dir=\"ltr\">5.1. CPU có tốc độ xử lý ra sao?</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Tốc độ xử lý CPU trên từng máy sẽ có sự khác nhau. Điều này phụ thuộc vào tốc độ xung nhịp CPU, được tính bằng biểu thị chu kỳ hoạt động mà CPU có thể xử lý trong vòng 1 giây. Nhờ vào tốc độ xung nhịp đó mà người dùng có thể tính toán được là CPU xử lý nhanh hay chậm.</p> <h3 dir=\"ltr\">5.2. Chip với CPU có phải là một?</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Để trả lời được câu hỏi này, trước tiên bạn cần biết về định nghĩa của chip. Chip (hay gọi là vi mạch) gồm các mạch điện chứa linh kiện bán dẫn và linh kiện điện tử thụ động, chúng kết nối với nhau và cùng thực hiện một chức năng nào đó.</p> <p dir=\"ltr\" style=\"margin-left: 40px;\">Còn với CPU, như đã tìm hiểu ở trên vềCPU viết tắt của từ gì và định nghĩa thìCPU sẽ chứa hàng tỷ các bóng dẫn, chúng được sắp xếp trên những bảng mạch nhỏ với chức năng là xử lý thông tin. Vậy nên có thể xem chip và CPU là một.</p> <h3 dir=\"ltr\">5.3. Chipset so với chip khác nhau thế nào?</h3> <p dir=\"ltr\" style=\"margin-left: 40px;\">Chipset ở đây được hiểu là một tập hợp chip, nghĩa là nhiều chip đi với nhau và cùng làm một nhiệm vụ. Chipset thường được nhắc đến khi đề cập đến một chip đặc biệt trên mainboard hay các card mở rộng.</p> <h2 dir=\"ltr\">6. Tổng kết</h2> <p dir=\"ltr\"><a href=\"https://memoryzone.com.vn/\" target=\"_blank\">Memoryzone</a> hy vọng rằng qua bài viết trên bạn đọc đã hiểu rõ về CPU và trả lời được câu hỏi “CPU viết tắt của từ gì” hay những thuật ngữ liên quan đến CPU. Liên hệ với chúng tôi để được giải đáp các thắc mắc nếu có và thường xuyên cập nhật các <a href=\"https://memoryzone.com.vn/tin-tuc\" target=\"_blank\">tin tức</a>, bài viết mới nhất tại website Memoryzone bạn nhé!</p> <p dir=\"ltr\"><strong>Bài viết liên quan:</strong></p> <ul dir=\"ltr\" style=\"margin-left: 40px;\"> <li><a href=\"https://memoryzone.com.vn/bat-mi-cach-bat-den-led-ban-phim-tren-may-tinh-va-laptop\">Bật mí cách bật đèn led bàn phím trên máy tính và các dòng laptop Dell, Asus, Acer</a></li> <li><a href=\"https://memoryzone.com.vn/huong-dan-tai-coc-coc-ve-may-tinh-mien-phi\">Hướng dẫn tải Cốc Cốc về máy tính miễn phí và cài đặt chỉ trong 5 phút</a></li> <li><a href=\"https://memoryzone.com.vn/cach-ket-noi-wifi-cho-may-tinh-ban\">Cách kết nối wifi cho máy tính bàn chỉ trong tích tắc và dễ thao tác</a></li> <li><a href=\"https://memoryzone.com.vn/cach-ket-noi-chuot-khong-day-voi-laptop\">Cách kết nối chuột không dây với laptop trong tích tắc và đơn giản nhất</a></li></ul> </div> </div> </div> <div class=\"col-xs-12\"> <div class=\"row row-noGutter tag-share\"> <div class=\"col-xs-12 col-sm-6 tag_article \"> <b>Tags:</b> <a href=\"/blogs/all/tagged/alu\">ALU</a>, <a href=\"/blogs/all/tagged/amd\">AMD</a>, <a href=\"/blogs/all/tagged/cpu\">CPU</a>, <a href=\"/blogs/all/tagged/cpu-viet-tat-cua-tu-gi\">CPU viết tắt của từ gì</a>, <a href=\"/blogs/all/tagged/laptop\">Laptop</a> </div> <div class=\"col-xs-12 col-sm-6\"> <div class=\"social-sharing f-right\"> <div class=\"addthis_inline_share_toolbox share_add\"> <script type=\"text/javascript\" src=\"//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58589c2252fc2da4\"></script> </div> </div> </div> </div> </div>'
  );

INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (2, 3, 1, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Chưa phản hồi');
INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (1, 1, 2, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Chưa phản hồi');
INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (3, 2, 3, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Chưa phản hồi');
INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (2, 4, 1, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Đã phản hồi');
INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (3, 2, 2, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Đã phản hồi');
INSERT INTO Comment (`product_id`, `customer_id`, `admin_id`, `comment`, `updated_at`, `status`) VALUES (1, 2, 3, 'Sản phẩm tốt', '2022-11-06 11:06:37', 'Đã phản hồi');

-- Resource
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (1, 'uploads/slider1.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (2, 'uploads/slider2.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (3, 'uploads/slider3.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (4, 'uploads/news1.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (5, 'uploads/news2.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (6, 'uploads/news3.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (7, 'uploads/logo.jpg', NULL);
INSERT INTO Resource (`id`, `name`, `data`)
VALUES (8, 'uploads/logo.jpg', NULL);
DROP FUNCTION IF EXISTS create_random_integer;
CREATE FUNCTION random_integer(value_minimum INT, value_maximum INT) RETURNS INT RETURN FLOOR(
  value_minimum + RAND() * (value_maximum - value_minimum + 1)
);
USE bkzone_2022;

INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (1,'59/6/12 Nguyễn Đình Chiểu, Phường 4, Quận 3, Thành phố Hồ Chí Minh',     'Minh Vuong', '039768114', 'momo',   '2022-12-1','waiting',67516694);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (2,'98 Nguyễn Đình Chiểu Dist1, Thành phố Hồ Chí Minh',                      'Minh Vuong', '039768114', 'cash',   '2022-12-1','confirmed',58139323);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (3,'98 Nguyễn Đình Chiểu Dist1, Thành phố Hồ Chí Minh',                      'Minh Vuong', '039768114', 'cash',   '2022-12-1','confirmed',78968476);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (4,'K18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',     'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','waiting',67516694);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (5,'18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',      'Quoc Thai',  '039768114', 'vnpay',  '2022-12-1','waiting',52439323);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (6,'98 Nguyễn Đình Chiểu, Quận 1, Thành phố Hồ Chí Minh',                    'Kha Sang',   '039768114', 'momo',   '2022-12-1','confirmed',14344335);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (7,'298 Nguyen Trong Tuyen, Phường 1, Thành phố Hồ Chí Minh',                'Kha Sang',   '039768114', 'momo',   '2022-12-1','waiting',43333344);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (8,'18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',      'Kha Sang',   '039768114', 'qrcode', '2022-12-1','confirmed',78225013);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (9,'Ký túc xá khu A, Đường tạ Quang Bửu, khu phố 6, Linh Trung, Thủ Đức',    'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','confirmed',59821003);
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`,total_order_money) VALUE (10,'K18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',     'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','waiting',75122036);
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (1,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (1,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (2,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (2,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (3,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (3,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (4,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (4,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (5,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (5,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (6,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (6,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (7,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (7,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (8,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (8,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (9,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (9,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (10,random_integer(1,100), random_integer(0,2));
INSERT INTO `OrderDetail` (order_id,product_id, quantity) VALUE (10,random_integer(1,100), random_integer(0,2));

INSERT INTO Address (user_id, city, district, ward, specificAddress, phoneNumber, receiverName, `type`) VALUES
(1, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 1', '0923236277', 'Người nhận 1', 1),
(2, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 2', '0923236277', 'Người nhận 2', 0),
(3, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 3', '0923236277', 'Người nhận 3', 1),
(4, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 4', '0923236277', 'Người nhận 4', 1),
(5, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 5', '0923236277', 'Người nhận 5', 1),
(6, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 6', '0923236277', 'Người nhận 6', 1),
(7, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 7', '0923236277', 'Người nhận 7', 1),
(8, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 8', '0923236277', 'Người nhận 8', 1),
(9, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 9', '0923236277', 'Người nhận 9', 1) ;
