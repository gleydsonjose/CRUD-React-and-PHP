-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql_gst:3306
-- Tempo de geração: 04-Fev-2020 às 00:40
-- Versão do servidor: 8.0.18
-- versão do PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ghostshop`
--
CREATE DATABASE IF NOT EXISTS `ghostshop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `ghostshop`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `price` varchar(100) NOT NULL,
  `quantity` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `manufacturer`, `price`, `quantity`) VALUES
(1, 'Keyboard CK104', 'Motospeed', '50', '7'),
(2, 'K55 RGB Gaming Keyboard', 'Corsair', '49', '8'),
(3, 'Mouse DeathAdder 3.5G Blue', 'Razer', '40', '10'),
(4, 'Monitor SyncMaster 732NW', 'Samsung', '150', '5'),
(5, 'K552 Mechanical Gaming', 'Redragon', '32', '5'),
(6, 'Ornata Chroma Gaming Keyboard', 'Razer', '84', '3'),
(7, 'Mechanical Gaming Keyboard', 'PICTEK TKL', '29', '12'),
(8, 'Cynosa Chroma Gaming Keyboard', 'Razer', '50', '7'),
(9, 'G Pro Mechanical Gaming Keyboard', 'Logitech', '80', '8'),
(10, 'DeathAdder Elite Gaming Mouse', 'Razer', '21', '15'),
(11, 'G502 SE Hero RGB Gaming Mouse', 'Logitech', '35', '8'),
(12, 'G203 Prodigy RGB Wired Gaming Mouse', 'Logitech', '19', '2'),
(13, 'Arc Mouse', 'Microsoft', '54', '20'),
(14, 'Mamba Wireless Gaming Mouse', 'Razer', '46', '4'),
(15, 'Wireless Gaming Headset G930', 'Logitech', '290', '2'),
(16, 'Cloud Flight', 'HyperX', '97', '6'),
(17, 'Cloud II Gaming Headset', 'HyperX', '82', '9'),
(18, 'Kraken Tournament Edition', 'Razer', '63', '11'),
(19, 'Cloud Stinger', 'HyperX', '39', '6'),
(20, 'Aspire 5 Slim Laptop', 'Acer', '314', '4'),
(21, 'Gaming Computer PC Desktop', 'SkyTech Blaze', '650', '1');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
