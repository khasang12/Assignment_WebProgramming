CREATE FUNCTION random_integer(value_minimum INT, value_maximum INT)
RETURNS INT
COMMENT 'Gets a random integer between value_minimum and value_maximum, bounds included'
RETURN FLOOR(value_minimum + RAND() * (value_maximum - value_minimum + 1));

INSERT INTO Product (id, name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates)
VALUES (uuid(),'Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',34645760,17,'Apple','Intel Core i5 2.3GHz','Intel Iris Plus Graphics 640','8GB','128GB SSD','13.3','IPS Panel Retina Display 2560x1600',1.37,'macOS',1,184);
INSERT INTO Product (id, name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates)
VALUES (uuid(),'Acer Notebook Aspire 3','https://anphat.com.vn/media/product/39134_35206_1.png',29843996,25,'Acer','AMD A9-Series 9420 3GHz','AMD Radeon R5','4GB','500GB HDD','15.6','1366x768',2.1,'Windows',5,312);
INSERT INTO Product (id, name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates)
VALUES (uuid(),'Apple Ultrabook MacBook Pro','https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/Uploads/images/2015/Tin-Tuc/QuanLNH2/macbook-pro-14-4.JPG',31172929,20,'Apple','Intel Core i5 2.3GHz','Intel Iris Plus Graphics 640','16GB','256GB Flash Storage','15.4','IPS Panel Retina Display 2880x1800',2.04,'macOS',2,758);
INSERT INTO Product (id, name, thumbnail, price, quantity, brand, cpu, gpu, ram,disk, screen_size, screen_tech, weight, os, overall_rating, num_rates)
VALUES (uuid(),'Asus Ultrabook ZenBook UX430UN','https://fptshop.com.vn/Uploads/Originals/2021/3/1/637502173944633590_asus-vivobook-x415-print-bac-dd.jpg',46780635,13,'Apple','Intel Core i5 2.3GHz','Intel HD Graphics 6000','8GB','256GB Flash Storage','13.3','1440x900',1.34,'macOS',2,915);