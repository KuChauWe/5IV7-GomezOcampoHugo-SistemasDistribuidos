CREATE DATABASE login_node_db;

-- to use database
use login_node_db;

-- creating a new table
CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  rol VARCHAR(100) NOT NULL,
  pass VARCHAR(15)
);