# Host: localhost  (Version 5.7.15-log)
# Date: 2017-05-10 21:57:38
# Generator: MySQL-Front 6.0  (Build 1.122)


#
# Structure for table "activity"
#

DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `group` varchar(255) DEFAULT NULL,
  `shower` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `introduce` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `activity_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "datum"
#

DROP TABLE IF EXISTS `datum`;
CREATE TABLE `datum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `datum_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "group"
#

DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `introduce` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "ing"
#

DROP TABLE IF EXISTS `ing`;
CREATE TABLE `ing` (
  `introduce` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "log"
#

DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `operation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `log_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "notice"
#

DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `deadline` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `notice_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "option"
#

DROP TABLE IF EXISTS `option`;
CREATE TABLE `option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `noticeId` int(11) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `option_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "privilege"
#

DROP TABLE IF EXISTS `privilege`;
CREATE TABLE `privilege` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `privilege_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "project"
#

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `introduce` text,
  `url` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `join` varchar(255) DEFAULT NULL,
  `game` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Structure for table "prrelation"
#

DROP TABLE IF EXISTS `prrelation`;
CREATE TABLE `prrelation` (
  `privilegeId` int(11) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "resume"
#

DROP TABLE IF EXISTS `resume`;
CREATE TABLE `resume` (
  `name` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  `introduce` text,
  `mail` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "role"
#

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `introduce` text,
  `group` int(11) DEFAULT NULL,
  `from` varchar(255) DEFAULT NULL,
  `blog` varchar(255) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Structure for table "vote"
#

DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `optionId` int(11) DEFAULT NULL,
  `noticeId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vote_id_uindex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
