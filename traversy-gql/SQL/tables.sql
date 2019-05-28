-- CREATE DATABASE rugby7test;

USE rugby7test;

DROP TABLE IF EXISTS tbl_teams;
DROP TABLE IF EXISTS tbl_players;
DROP TABLE IF EXISTS tbl_staff;
DROP TABLE IF EXISTS tbl_game_shedule;
DROP TABLE IF EXISTS tbl_pool_points;

CREATE TABLE tbl_teams (
  id varchar(4) NOT NULL,
  pool varchar(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id)
);
  
  CREATE TABLE tbl_players (
  id smallint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id),
  team_id varchar(4) NOT NULL
);

-- CREATE TABLE tbl_users (
--   id smallint NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   email varchar(255) NOT NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE tbl_staff (
  id smallint NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id),
  team_id varchar(4) NOT NULL
);

CREATE TABLE tbl_game_shedule (
  id smallint NOT NULL,
  field_number smallint NOT NULL,
  `time` varchar(7) NOT NULL,
  team_a varchar(4) NOT NULL,
  team_b varchar(4) NOT NULL,
  team_a_score smallint DEFAULT NULL,
  team_b_score smallint DEFAULT NULL,
  PRIMARY KEY (id,team_a,team_b)
);

CREATE TABLE tbl_pool_points (
  id int NOT NULL AUTO_INCREMENT,
  team_id varchar(4) NOT NULL,
  game_id smallint NOT NULL, -- Should be a FK 
  points smallint NOT NULL,
  -- PRIMARY KEY (team_id,game_id)
  PRIMARY KEY (id, game_id)
);