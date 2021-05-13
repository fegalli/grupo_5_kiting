CREATE TABLE `Products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `price` INT,
   `comments` VARCHAR(255),
   `createdAt` DATETIME,
   `updatedAt` DATETIME,
   `nameId` int,
   `sizeId` int,
   `colourId` int,
   `brandId` int,
   `styleId` int,
   `imageName` VARCHAR (100),
   PRIMARY KEY (`id`)
);
CREATE TABLE `Styles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `style` TEXT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `Brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `brand` TEXT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `Sizes` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `size` TEXT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `Colours` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `colour` TEXT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `Names` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` TEXT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `Users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `email` TEXT,
   `created` DATETIME,
   `password` text,
   PRIMARY KEY (`id`)
);
CREATE TABLE `ProductsUsers` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `productId` int,
   `userId` int,
   PRIMARY KEY (`id`)
);
ALTER TABLE `Products` ADD CONSTRAINT `FK_a4bff9e7-af16-4519-a010-795b406ef6b5` FOREIGN KEY (`nameId`) REFERENCES `Names`(`id`);
ALTER TABLE `Products` ADD CONSTRAINT `FK_908d0d4a-6120-4351-bd15-7c271d002873` FOREIGN KEY (`sizeId`) REFERENCES `Sizes`(`id`);
ALTER TABLE `Products` ADD CONSTRAINT `FK_3ae1db2c-79b3-4c47-9724-64793c1e6a43` FOREIGN KEY (`brandId`) REFERENCES `Brands`(`id`);
ALTER TABLE `Products` ADD CONSTRAINT `FK_27b7a3d9-e967-4137-acff-c5cea3abadff` FOREIGN KEY (`styleId`) REFERENCES `Styles`(`id`);
ALTER TABLE `Products` ADD CONSTRAINT `FK_433d251c-23b6-455d-9c74-157585ae3dfc` FOREIGN KEY (`colourId`) REFERENCES `Colours`(`id`);
ALTER TABLE `ProductsUsers` ADD CONSTRAINT `FK_1ca7fc26-3a55-451d-8fe2-8d2da85d7709` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`);
ALTER TABLE `ProductsUsers` ADD CONSTRAINT `FK_5050d0c1-01cb-48d2-956e-0be8faab5075` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`);