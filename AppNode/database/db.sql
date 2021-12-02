-- Creating database
CREATE DATABASE crudnodejsmysql;

-- using database
use crudnodejsmysql;

-- creating a table
CREATE TABLE user (
    id INT(50) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    password VARCHAR(50) NOT NULL
)