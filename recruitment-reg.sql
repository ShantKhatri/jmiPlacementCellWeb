CREATE TABLE `registration` (
  `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `industry_type` varchar(30) DEFAULT NULL,
  `email_address` varchar(50) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1;