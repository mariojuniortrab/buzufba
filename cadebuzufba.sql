-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: cadebuzufba
-- ------------------------------------------------------
-- Server version	5.6.35-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apontamento`
--
use cadebuzufba; 
DROP TABLE IF EXISTS `apontamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `apontamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_roteiro` int(11) NOT NULL,
  `id_ponto` int(11) NOT NULL,
  `hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_ponto` FOREIGN KEY (`id_ponto`) REFERENCES `ponto` (`id`),
  CONSTRAINT `id_roteiro` FOREIGN KEY (`id_ponto`) REFERENCES `roteiros` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apontamento`
--

LOCK TABLES `apontamento` WRITE;
/*!40000 ALTER TABLE `apontamento` DISABLE KEYS */;
INSERT INTO `apontamento` VALUES (1,1,1,'2017-03-15 22:42:58'),(2,1,2,'2017-03-17 17:38:12'),(3,1,3,'2017-03-17 17:45:41'),(4,1,1,'2017-03-19 03:43:30');
/*!40000 ALTER TABLE `apontamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horario`
--

DROP TABLE IF EXISTS `horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_roteiro` int(11) NOT NULL,
  `hora` time NOT NULL,
  `entra_sao_laz` char(1) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `roteiro_fk` FOREIGN KEY (`id_roteiro`) REFERENCES `roteiros` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario`
--

LOCK TABLES `horario` WRITE;
/*!40000 ALTER TABLE `horario` DISABLE KEYS */;
INSERT INTO `horario` VALUES (1,1,'06:30:00','n'),(2,1,'06:50:00','n'),(3,1,'07:00:00','n');
/*!40000 ALTER TABLE `horario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itinerario`
--

DROP TABLE IF EXISTS `itinerario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `itinerario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_roteiro` int(11) NOT NULL,
  `id_ponto` int(11) NOT NULL,
  `ordem` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_ponto` FOREIGN KEY (`id_ponto`) REFERENCES `ponto` (`id`),
  CONSTRAINT `fk_roteiro` FOREIGN KEY (`id_roteiro`) REFERENCES `roteiros` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itinerario`
--

LOCK TABLES `itinerario` WRITE;
/*!40000 ALTER TABLE `itinerario` DISABLE KEYS */;
/*!40000 ALTER TABLE `itinerario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ponto`
--

DROP TABLE IF EXISTS `ponto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ponto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ponto`
--

LOCK TABLES `ponto` WRITE;
/*!40000 ALTER TABLE `ponto` DISABLE KEYS */;
INSERT INTO `ponto` VALUES (1,'reitoria'),(2,'portao1'),(3,'famed'),(4,'campo_grande'),(5,'belas_artes'),(6,'creche'),(7,'politecnica'),(8,'arquitetura'),(9,'Danca'),(10,'faced'),(11,'geociencias'),(12,'sao_lazaro');
/*!40000 ALTER TABLE `ponto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roteiros`
--

DROP TABLE IF EXISTS `roteiros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roteiros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roteiros`
--

LOCK TABLES `roteiros` WRITE;
/*!40000 ALTER TABLE `roteiros` DISABLE KEYS */;
INSERT INTO `roteiros` VALUES (1,'B1'),(2,'B2'),(3,'B3'),(4,'B4');
/*!40000 ALTER TABLE `roteiros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-19  2:37:49
