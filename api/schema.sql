DROP TABLE IF EXISTS locations, users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  org VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL  
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id), 
  name varchar(255) NOT NULL,
  address varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  state varchar(255) NOT NULL
);