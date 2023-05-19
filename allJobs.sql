CREATE TABLE allJobs (
  `JobID` varchar(30) primary key not null,
  `JobTitle` varchar(30) NOT NULL,
  `Min.SPI` varchar(5) not null,
  `Est.LPA` varchar(5)  not NULL,
  `Location` varchar(20)  not NULL,
  `JobType` varchar(5) not NULL,
  `NoApplications` varchar(20)  not NULL,
  `Course` varchar(50) not NULL,
  `Description` varchar(100) not NULL,
  `status` varchar(10) DEFAULT 'Active' not NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;