-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2021 a las 00:39:58
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kiting`
--
CREATE DATABASE IF NOT EXISTS `kiting` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `kiting`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `brand` text DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colours`
--

DROP TABLE IF EXISTS `colours`;
CREATE TABLE IF NOT EXISTS `colours` (
  `colour` text DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `names`
--

DROP TABLE IF EXISTS `names`;
CREATE TABLE IF NOT EXISTS `names` (
  `name` text DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `name_id` int(11) DEFAULT NULL,
  `size_id` int(11) DEFAULT NULL,
  `colour_id` int(11) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `style_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_a4bff9e7-af16-4519-a010-795b406ef6b5` (`name_id`),
  KEY `FK_908d0d4a-6120-4351-bd15-7c271d002873` (`size_id`),
  KEY `FK_3ae1db2c-79b3-4c47-9724-64793c1e6a43` (`brand_id`),
  KEY `FK_27b7a3d9-e967-4137-acff-c5cea3abadff` (`style_id`),
  KEY `FK_433d251c-23b6-455d-9c74-157585ae3dfc` (`colour_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productsusers`
--

DROP TABLE IF EXISTS `productsusers`;
CREATE TABLE IF NOT EXISTS `productsusers` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1ca7fc26-3a55-451d-8fe2-8d2da85d7709` (`product_id`),
  KEY `FK_5050d0c1-01cb-48d2-956e-0be8faab5075` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE IF NOT EXISTS `sizes` (
  `size` text DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `styles`
--

DROP TABLE IF EXISTS `styles`;
CREATE TABLE IF NOT EXISTS `styles` (
  `style` text DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `email` text DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `password` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_27b7a3d9-e967-4137-acff-c5cea3abadff` FOREIGN KEY (`style_id`) REFERENCES `styles` (`id`),
  ADD CONSTRAINT `FK_3ae1db2c-79b3-4c47-9724-64793c1e6a43` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FK_433d251c-23b6-455d-9c74-157585ae3dfc` FOREIGN KEY (`colour_id`) REFERENCES `colours` (`id`),
  ADD CONSTRAINT `FK_908d0d4a-6120-4351-bd15-7c271d002873` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `FK_a4bff9e7-af16-4519-a010-795b406ef6b5` FOREIGN KEY (`name_id`) REFERENCES `names` (`id`);

--
-- Filtros para la tabla `productsusers`
--
ALTER TABLE `productsusers`
  ADD CONSTRAINT `FK_1ca7fc26-3a55-451d-8fe2-8d2da85d7709` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_5050d0c1-01cb-48d2-956e-0be8faab5075` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
