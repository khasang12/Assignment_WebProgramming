CREATE TABLE `Customer` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `birthday` timestamp,
  `username` varchar(255),
  `password` varchar(255),
  `address` varchar(255)
);
CREATE TABLE `Product` (
  `id` integer PRIMARY KEY,
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
  `resolution` varchar(255),
  `screen_tech` varchar(255),
  `weight` integer,
  `os` varchar(255),
  `battery` varchar(255),
  `overall_rating` float,
  `num_rates` integer,
  `description` varchar(255)
);
CREATE TABLE `Order` (
  `id` integer PRIMARY KEY,
  `customer_id` integer,
  `order_date` timestamp,
  `status` varchar(255),
  `total_order_money` integer
);
CREATE TABLE `OrderDetail` (
  `id` integer,
  `product_id` integer,
  `quantity` integer,
  `total_money` integer,
  PRIMARY KEY (`id`, `product_id`)
);
CREATE TABLE `Comment` (
  `id` integer PRIMARY KEY,
  `product_id` integer,
  `customer_id` integer,
  `admin_id` integer,
  `comment` varchar(255),
  `admin_comment` varchar(255),
  `updated_at` timestamp,
  `status` varchar(255)
);
CREATE TABLE `Admin` (
  `id` integer PRIMARY KEY,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255)
);
CREATE TABLE `News` (
  `id` integer PRIMARY KEY,
  `admin_id` integer,
  `thumbnail` varchar(255),
  `content` varchar(255)
);
ALTER TABLE `Order`
ADD FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`);
ALTER TABLE `OrderDetail`
ADD FOREIGN KEY (`id`) REFERENCES `Order` (`id`);
ALTER TABLE `OrderDetail`
ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);
ALTER TABLE `Comment`
ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);
ALTER TABLE `Comment`
ADD FOREIGN KEY (`customer_id`) REFERENCES `Customer` (`id`);
ALTER TABLE `Comment`
ADD FOREIGN KEY (`admin_id`) REFERENCES `Admin` (`id`);
ALTER TABLE `News`
ADD FOREIGN KEY (`admin_id`) REFERENCES `Admin` (`id`);