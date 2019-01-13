DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL DEFAULT '',
  address varchar(255) NOT NULL DEFAULT ''
);