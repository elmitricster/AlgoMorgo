-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: j6c204.p.ssafy.io    Database: logTest
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `language` varchar(10) DEFAULT NULL,
  `nickname` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `baekjoon_id` varchar(50) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'JAVA','test1','1111','doppio1101','test1',NULL),(23,'JAVA','testtest','$2a$10$.qbF4ECaBW/ucD6ARLdmMu81wLJYvdmsYWutxCijt1Qe9/uH/URXa','lys3d','testtest','Activate'),(24,'asd','qweqweqwe','$2a$10$VQ8tQSbTsk02.E1kIxMpCef7DfbwYVn8V3CbGtzHyytUF0rUV6fVW','doppio1101','qweqweqwe','Deactivate'),(25,'asd','asdasdasd','$2a$10$DXTkjdG5.Pxj43VZUq9/zu8G31aS8loihmHN1SGogK4OQ4NTnVo7e','lys3d','asdasdasd','Activate'),(26,'java','zxczxczxc','$2a$10$XFE57WyapdgZAMtAU8VBGOVHrV0EHqYpgVv/ELGnHkF/Oy0ogYY2y','doppio1101','zxczxczxc','Activate'),(27,'java','werwerwer','$2a$10$DQ6XoWzPLhco4ulkGVitWOWzOMQqUa8zj2v73PsWR3RPT5cyJKxW6','doppio1101','werwerwer','Activate'),(28,'java','sdfsdfsdf','$2a$10$PyS.Fcru3H1Mbh.GHmsy/.mt9wjffRf0vsUI93mqZhhR2M/uGlziW','doppio1101','sdfsdfsdf','Activate'),(29,'C','ssafy1320','$2a$10$rje8GiUwysqEflP1Dhu2fuEs1ONdKMVX1a699Y76snwW8M/38ongi','doppio1101','ssafy1320','Activate'),(30,'java','admin','$2a$10$QGuc.B9ARwnL/Lz.Rzet3.ktrOeeCywiZXI4Gip8i9WlDVU9.UOu6','lmw0122','admin','Activate'),(31,'java','aruratte','$2a$10$2htERpvcvCaCLZnwe0OAD.Y.vZL/dk0Nz0DqpiOA28J2VBOGZNkEq','elmitricster','aruratte','Activate'),(32,'JAVA','qweasdzxc','$2a$10$E1sEELLC6c4u5n8kS54pZuiYHWueVULQiKUbEo3OaN0NWSlP8l8g.','s6082648','qweasdzxc','Activate'),(33,'python','나의프로필명은뭘까요','$2a$10$H2KKeDMd4S53Ho2.Z4CB5u48OetEULh7IVrjkeUBWD9NYiINjyV.K','sangwoo420','choiys1995','Activate'),(34,'C','arurururu','$2a$10$vOex2qFQTDiWUkJH0EZ2VOc46nG9x4c1KoTQTJoHVQYPIe6k1GT26','elmitricster','arurururu','Activate'),(36,'java','테스트용테스트용','$2a$10$giXQs9d11g8NWR/neWvyWOkg.cGQxuL3NtPNaYbAQV7TmeclIcTjK','lys3d','testtest2','Activate'),(37,'java','qwerasdf','$2a$10$Kw8UapDRUqsHdi5nLJ14fOuZvR.mb6zrs70GNJaijrXXKO0zHKcMe','lys3d','aaaaaaaa','Deactivate'),(38,'java','qwerasdf222','$2a$10$QTJReNjTO2qbrXvjnbZcQ.AMM5h0lX/8IOZzqbC67/Y9hfdtPlWc2','lys3d','bbbbbbbb','Activate'),(39,'C','kurikuri','$2a$10$V6FKD.R7CPh1JIV9hxx1GeNBkkPTSEiFD.W8eLMfjO7sH1Se7jeKe','elmitricster','kurikuri','Activate'),(40,'C','ssafy11111','$2a$10$.ROZ4QhSbpdeEym/fuIDDOwGheZaZukSe9sCxjhpb9SMxDI6KlrXC','doppio1101','ssafy11111','Activate'),(43,'c','ssafyAdmin1','$2a$10$fwqHrDtXiGd5yNU3ZebekeWDr1Z39CP2mg8QFBnCFM6DS6vADScKy','lmw0122','ssafyAdmin1','Activate'),(44,'C','ssafy123','$2a$10$6r2XAGh6vdn5C/mjeRK2/u5Dx6gWEp.8qrUG5aHol/vYQcey7tOSm','doppio1101','ssafy123','Activate'),(45,'C','ssafy1234','$2a$10$rFhcnt9KCsn.2PlLncLHke1j3DeJezVCJ79LnwiprbbGpSawtstCS','doppio1101','ssafy1234','Activate'),(46,'python','woosteelz','$2a$10$yquoc24SfByEWR2jDlO3ceCJo/Oi8D3TNUJK60DSfXw7VjM7BJP8K','woosteelz','woosteelz','Activate'),(47,'java','24999999999','$2a$10$xDe966dYXDKXeEn29gmU5Ofs8QUy..SND9QQ/Zfx2qnAdkpbw8oOS','hyunjung0409','a10171017','Activate');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 18:20:05
