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
  `order_date` timestamp,
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
  `thumbnail` varchar(255),
  `content` varchar(255),
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
	`reiceiverName` varchar(255) , 
	`type` BIT,

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
USE bkzone_2022;
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('James','Butt','504-845-1427','jbutt@gmail.com','1973-04-06','jamesbutt','jamesbutt26760','6649 N Blue Gum St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Josephine','Darakjy','810-374-9840','josephine_darakjy@darakjy.org','2009-03-06','josephinedarakjy','josephinedarakjy39878','4 B Blue Ridge Blvd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Art','Venere','856-264-4130','art@venere.org','1971-12-16','artvenere','artvenere26283','8 W Cerritos Ave #54');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Lenna','Paprocki','907-921-2010','lpaprocki@hotmail.com','2008-09-14','lennapaprocki','lennapaprocki39705','639 Main St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Donette','Foller','513-549-4561','donette.foller@cox.net','1970-05-08','donettefoller','donettefoller25696','34 Center St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Simona','Morasca','419-800-6759','simona@morasca.com','1970-08-03','simonamorasca','simonamorasca24322','3 Mcauley Dr');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Mitsue','Tollner','773-924-8565','mitsue_tollner@yahoo.com','1974-05-09','mitsuetollner','mitsuetollner27158','7 Eads St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Leota','Dilliard','408-813-1105','leota@hotmail.com','2010-07-21','leotadilliard','leotadilliard40380','7 W Jackson Blvd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Sage','Wieser','605-794-4895','sage_wieser@cox.net','1984-03-19','sagewieser','sagewieser30760','5 Boston Ave #88');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Kris','Marrier','410-804-4694','kris@gmail.com','2010-08-05','krismarrier','krismarrier40395','228 Runamuck Pl #2808');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Minna','Amigon','215-422-8694','minna_amigon@yahoo.com','1998-04-03','minnaamigon','minnaamigon35888','2371 Jerrold Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Abel','Maclead','631-677-3675','amaclead@gmail.com','1981-12-09','abelmaclead','abelmaclead29929','37275 St  Rt 17m M');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Kiley','Caldarera','310-254-3084','kiley.caldarera@aol.com','1987-06-01','kileycaldarera','kileycaldarera31929','25 E 75th St #69');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Graciela','Ruta','440-579-7763','gruta@cox.net','1990-02-12','gracielaruta','gracielaruta20132','98 Connecticut Ave Nw');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Cammy','Albares','956-841-7216','calbares@gmail.com','1990-04-29','cammyalbares','cammyalbares19478','56 E Morehead St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Mattie','Poquette','602-953-6360','mattie@aol.com','1990-08-07','mattiepoquette','mattiepoquette20308','73 State Road 434 E');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Meaghan','Garufi','931-235-7959','meaghan@hotmail.com','2004-11-12','meaghangarufi','meaghangarufi38303','69734 E Carrillo St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Gladys','Rim','414-377-2880','gladys.rim@rim.org','1983-01-05','gladysrim','gladysrim30321','322 New Horizon Blvd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Yuki','Whobrey','313-341-4470','yuki_whobrey@aol.com','2005-11-13','yukiwhobrey','yukiwhobrey38669','1 State Route 27');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Fletcher','Flosi','815-426-5657','fletcher.flosi@yahoo.com','2010-11-29','fletcherflosi','fletcherflosi40511','394 Manchester Blvd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Bette','Nicka','610-492-4643','bette_nicka@cox.net','1990-09-04','bettenicka','bettenicka25085','6 S 33rd St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Veronika','Inouye','408-813-4592','vinouye@aol.com','1990-06-05','veronikainouye','veronikainouye24628','6 Greenleaf Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Willard','Kolmetz','972-896-4882','willard@hotmail.com','1990-01-16','willardkolmetz','willardkolmetz32889','618 W Yakima Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Maryann','Royster','518-448-8982','mroyster@royster.com','2002-05-17','maryannroyster','maryannroyster37393','74 S Westgate St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Alisha','Slusarski','732-635-3453','alisha@slusarski.com','1993-01-30','alishaslusarski','alishaslusarski33999','3273 State St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Allene','Iturbide','715-530-9863','allene_iturbide@cox.net','2009-01-19','alleneiturbide','alleneiturbide39832','1 Central Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Chanel','Caudy','913-899-1103','chanel.caudy@caudy.org','1990-07-29','chanelcaudy','chanelcaudy28700','86 Nw 66th St #8673');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Ezekiel','Chui','410-235-8738','ezekiel@chui.com','2005-05-22','ezekielchui','ezekielchui38494','2 Cedar Ave #84');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Willow','Kusko','212-934-5167','wkusko@yahoo.com','1994-05-09','willowkusko','willowkusko34463','90991 Thorburn Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Bernardo','Figeroa','936-597-3614','bfigeroa@aol.com','2003-04-22','bernardofigeroa','bernardofigeroa37733','386 9th Ave N');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Ammie','Corrio','614-648-3265','ammie@corrio.com','1981-07-02','ammiecorrio','ammiecorrio29769','74874 Atlantic Ave');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Francine','Vocelka','505-335-5293','francine_vocelka@vocelka.com','1990-09-11','francinevocelka','francinevocelka23631','366 South Dr');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Ernie','Stenseth','201-387-9093','ernie_stenseth@aol.com','1971-01-13','erniestenseth','erniestenseth25946','45 E Liberty St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Albina','Glick','732-782-6701','albina@glick.com','1990-07-24','albinaglick','albinaglick18833','4 Ralph Ct');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Alishia','Sergi','212-753-2740','asergi@gmail.com','1990-07-12','alishiasergi','alishiasergi33066','2742 Distribution Way');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Solange','Shinko','504-265-8174','solange@shinko.com','1992-04-20','solangeshinko','solangeshinko33714','426 Wolf St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Jose','Stockham','212-569-4233','jose@yahoo.com','1993-07-03','josestockham','josestockham34153','128 Bransten Rd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Rozella','Ostrosky','805-609-1531','rozella.ostrosky@ostrosky.com','1996-04-07','rozellaostrosky','rozellaostrosky35162','17 Morena Blvd');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Valentine','Gillian','210-300-6244','valentine_gillian@gmail.com','1990-03-26','valentinegillian','valentinegillian23827','775 W 17th St');
INSERT INTO Customer (first_name, last_name, phone, email, birthday,username, password,address) VALUE('Kati','Rulapaugh','785-219-7724','kati.rulapaugh@hotmail.com','1990-01-06','katirulapaugh','katirulapaugh18634','6980 Dorsett Rd');

INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Youlanda','Schemmer','541-993-2611','youlanda@aol.com','youlandaschemmer','youlandaschemmer35703');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Dyan','Oldroyd','913-645-8918','doldroyd@aol.com','dyanoldroyd','dyanoldroyd30339');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Roxane','Campain','907-335-6568','roxane@hotmail.com','roxanecampain','roxanecampain23189');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Lavera','Perin','305-995-2078','lperin@perin.org','laveraperin','laveraperin21825');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Erick','Ferencz','907-227-6777','erick.ferencz@aol.com','erickferencz','erickferencz26161');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Fatima','Saylors','952-479-2375','fsaylors@saylors.org','fatimasaylors','fatimasaylors35924');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Jina','Briddick','617-997-5771','jina_briddick@briddick.com','jinabriddick','jinabriddick18485');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Kanisha','Waycott','323-315-7314','kanisha_waycott@yahoo.com','kanishawaycott','kanishawaycott36054');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Emerson','Bowley','608-658-7940','emerson.bowley@bowley.org','emersonbowley','emersonbowley33818');
INSERT INTO Admin (first_name, last_name, phone, email,username, password) VALUE('Blair','Malet','215-794-4519','bmalet@yahoo.com','blairmalet','blairmalet29597');



DROP FUNCTION IF EXISTS create_random_integer;
CREATE FUNCTION random_integer(value_minimum INT, value_maximum INT) RETURNS INT
RETURN FLOOR(value_minimum + RAND() * (value_maximum - value_minimum + 1));


USE bkzone_2022;
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (1,'59/6/12 Nguyễn Đình Chiểu, Phường 4, Quận 3, Thành phố Hồ Chí Minh',     'Minh Vuong', '039768114', 'momo',   '2022-12-1','waiting');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (2,'98 Nguyễn Đình Chiểu Dist1, Thành phố Hồ Chí Minh',                      'Minh Vuong', '039768114', 'cash',   '2022-12-1','confirmed');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (3,'98 Nguyễn Đình Chiểu Dist1, Thành phố Hồ Chí Minh',                      'Minh Vuong', '039768114', 'cash',   '2022-12-1','confirmed');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (4,'K18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',     'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','waiting');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (5,'18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',      'Quoc Thai',  '039768114', 'vnpay',  '2022-12-1','waiting');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (6,'98 Nguyễn Đình Chiểu, Quận 1, Thành phố Hồ Chí Minh',                    'Kha Sang',   '039768114', 'momo',   '2022-12-1','confirmed');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (7,'298 Nguyen Trong Tuyen, Phường 1, Thành phố Hồ Chí Minh',                'Kha Sang',   '039768114', 'momo',   '2022-12-1','waiting');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (8,'18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',      'Kha Sang',   '039768114', 'qrcode', '2022-12-1','confirmed');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (9,'Ký túc xá khu A, Đường tạ Quang Bửu, khu phố 6, Linh Trung, Thủ Đức',    'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','confirmed');
INSERT INTO `Orders` (customer_id,`address`,receiverName,phoneNumber, paymentMethod, order_date, `status`) VALUE (10,'K18 Luy Ban Bich Street Tan Thoi Hoa Phường, Thành phố Hồ Chí Minh',     'Tuan Hao',   '039768114', 'qrcode', '2022-12-1','waiting');
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

INSERT INTO Address (user_id, city, district, ward, specificAddress, phoneNumber, reiceiverName, `type`) VALUES
(1, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 1', '0923236277', 'Người nhận 1', 1),
(2, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 2', '0923236277', 'Người nhận 2', 0),
(3, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 3', '0923236277', 'Người nhận 3', 1),
(4, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 4', '0923236277', 'Người nhận 4', 1),
(5, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 5', '0923236277', 'Người nhận 5', 1),
(6, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 6', '0923236277', 'Người nhận 6', 1),
(7, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 7', '0923236277', 'Người nhận 7', 1),
(8, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 8', '0923236277', 'Người nhận 8', 1),
(9, 'TPHCM', 'Thủ Đức', 'Linh Trung', 'Số nhà 9', '0923236277', 'Người nhận 9', 1) ;