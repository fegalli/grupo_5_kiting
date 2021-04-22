-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2021 a las 04:24:07
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `brand` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colours`
--

CREATE TABLE `colours` (
  `colour` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `names`
--

CREATE TABLE `names` (
  `name` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `comments` text DEFAULT NULL,
  `nameId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `colourId` int(11) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `styleId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productsusers`
--

CREATE TABLE `productsusers` (
  `id` int(11) NOT NULL,
  `productId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `size` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `styles`
--

CREATE TABLE `styles` (
  `style` text DEFAULT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` text DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colours`
--
ALTER TABLE `colours`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `names`
--
ALTER TABLE `names`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_a4bff9e7-af16-4519-a010-795b406ef6b5` (`nameId`),
  ADD KEY `FK_908d0d4a-6120-4351-bd15-7c271d002873` (`sizeId`),
  ADD KEY `FK_3ae1db2c-79b3-4c47-9724-64793c1e6a43` (`brandId`),
  ADD KEY `FK_27b7a3d9-e967-4137-acff-c5cea3abadff` (`styleId`),
  ADD KEY `FK_433d251c-23b6-455d-9c74-157585ae3dfc` (`colourId`);

--
-- Indices de la tabla `productsusers`
--
ALTER TABLE `productsusers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_1ca7fc26-3a55-451d-8fe2-8d2da85d7709` (`productId`),
  ADD KEY `FK_5050d0c1-01cb-48d2-956e-0be8faab5075` (`userId`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `styles`
--
ALTER TABLE `styles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_27b7a3d9-e967-4137-acff-c5cea3abadff` FOREIGN KEY (`styleId`) REFERENCES `styles` (`id`),
  ADD CONSTRAINT `FK_3ae1db2c-79b3-4c47-9724-64793c1e6a43` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FK_433d251c-23b6-455d-9c74-157585ae3dfc` FOREIGN KEY (`colourId`) REFERENCES `colours` (`id`),
  ADD CONSTRAINT `FK_908d0d4a-6120-4351-bd15-7c271d002873` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`),
  ADD CONSTRAINT `FK_a4bff9e7-af16-4519-a010-795b406ef6b5` FOREIGN KEY (`nameId`) REFERENCES `names` (`id`);

--
-- Filtros para la tabla `productsusers`
--
ALTER TABLE `productsusers`
  ADD CONSTRAINT `FK_1ca7fc26-3a55-451d-8fe2-8d2da85d7709` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FK_5050d0c1-01cb-48d2-956e-0be8faab5075` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
