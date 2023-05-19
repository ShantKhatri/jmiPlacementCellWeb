CREATE TABLE students (
  `firstName` varchar(30) DEFAULT NULL,
  `lastName` varchar(30) DEFAULT NULL,
  `studentID` varchar(50) primary key not null,
  `rollNo` varchar(20)  not NULL,
  `mobileNo` varchar(10)  not NULL,
  `spi` varchar(5) not NULL,
  `email_address` varchar(20)  not NULL,
  `password` varchar(20)  not null,
  `address1` varchar(20) DEFAULT NULL,
  `address2` varchar(20) DEFAULT NULL,
  `course` varchar(20) DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;