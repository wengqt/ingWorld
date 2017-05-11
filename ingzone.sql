# Host: localhost  (Version 5.7.15-log)
# Date: 2017-05-10 21:57:38
# Generator: MySQL-Front 6.0  (Build 1.122)


#
# Structure for table "activity"
#
use ingzone;


DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `name`      VARCHAR(255)     DEFAULT NULL,
  `date`      DATE             DEFAULT NULL,
  `group`     VARCHAR(255)     DEFAULT NULL,
  `shower`    VARCHAR(255)     DEFAULT NULL,
  `github`    VARCHAR(255)     DEFAULT NULL,
  `introduce` TEXT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `activity_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "datum"
#

DROP TABLE IF EXISTS `datum`;
CREATE TABLE `datum` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `title`     VARCHAR(255)     DEFAULT NULL,
  `url`       VARCHAR(255)     DEFAULT NULL,
  `publisher` VARCHAR(255)     DEFAULT NULL,
  `date`      DATE             DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `datum_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "group"
#

DROP TABLE IF EXISTS `group`;
CREATE TABLE `group` (
  `introduce` TEXT
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "ing"
#

DROP TABLE IF EXISTS `ing`;
CREATE TABLE `ing` (
  `introduce` TEXT
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "log"
#

DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `userId`    INT(11)          DEFAULT NULL,
  `date`      DATE             DEFAULT NULL,
  `operation` VARCHAR(255)     DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `log_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "notice"
#

DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id`       INT(11) NOT NULL AUTO_INCREMENT,
  `type`     INT(11)          DEFAULT NULL,
  `title`    VARCHAR(255)     DEFAULT NULL,
  `content`  VARCHAR(255)     DEFAULT NULL,
  `date`     DATE             DEFAULT NULL,
  `deadline` DATE             DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `notice_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "option"
#

DROP TABLE IF EXISTS `option`;
CREATE TABLE `option` (
  `id`       INT(11) NOT NULL AUTO_INCREMENT,
  `noticeId` INT(11)          DEFAULT NULL,
  `content`  VARCHAR(255)     DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `option_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "privilege"
#

DROP TABLE IF EXISTS `privilege`;
CREATE TABLE `privilege` (
  `id`          INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255)     DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `privilege_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "project"
#

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `introduce` TEXT,
  `url`       VARCHAR(255)     DEFAULT NULL,
  `github`    VARCHAR(255)     DEFAULT NULL,
  `date`      DATE             DEFAULT NULL,
  `join`      VARCHAR(255)     DEFAULT NULL,
  `game`      VARCHAR(255)     DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `project_id_uindex` (`id`)
)
  ENGINE = InnoDB
  AUTO_INCREMENT = 3
  DEFAULT CHARSET = utf8;

#
# Structure for table "prrelation"
#

DROP TABLE IF EXISTS `prrelation`;
CREATE TABLE `prrelation` (
  `privilegeId` INT(11) DEFAULT NULL,
  `roleId`      INT(11) DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "resume"
#

DROP TABLE IF EXISTS `resume`;
CREATE TABLE `resume` (
  `name`      VARCHAR(255) DEFAULT NULL,
  `date`      DATE         DEFAULT NULL,
  `group`     INT(11)      DEFAULT NULL,
  `introduce` TEXT,
  `mail`      VARCHAR(255) DEFAULT NULL,
  `phone`     VARCHAR(11)  DEFAULT NULL,
  `qq`        VARCHAR(255) DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "role"
#

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id`          INT(11)      DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id`        INT(11) NOT NULL AUTO_INCREMENT,
  `name`      VARCHAR(255)     DEFAULT NULL,
  `password`  VARCHAR(255)     DEFAULT NULL,
  `introduce` TEXT,
  `group`     INT(11)          DEFAULT NULL,
  `from`      VARCHAR(255)     DEFAULT NULL,
  `blog`      VARCHAR(255)     DEFAULT NULL,
  `phone`     VARCHAR(11)      DEFAULT NULL,
  `mail`      VARCHAR(255)     DEFAULT NULL,
  `date`      DATE             DEFAULT NULL,
  `github`    VARCHAR(255)     DEFAULT NULL,
  `qq`        VARCHAR(255)     DEFAULT NULL,
  `role`      VARCHAR(255)     DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

#
# Structure for table "vote"
#

DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `id`       INT(11) NOT NULL AUTO_INCREMENT,
  `optionId` INT(11)          DEFAULT NULL,
  `noticeId` INT(11)          DEFAULT NULL,
  `userId`   INT(11)          DEFAULT NULL,
  `date`     DATE             DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `vote_id_uindex` (`id`)
)
  ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
