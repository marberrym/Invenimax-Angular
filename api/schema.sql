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

CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  location_id INTEGER REFERENCES locations(id),
  item varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  par INTEGER DEFAULT 0
);

CREATE TABLE inven_bridge (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  item_id INTEGER REFERENCES inventory(id),
  quantity INTEGER DEFAULT 0
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  location_id INTEGER REFERENCES locations(id),
  inventory_id INTEGER REFERENCES inventory(id),
  inven_change INTEGER NOT NULL,
  note varchar(255) DEFAULT ''
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  location_id INTEGER REFERENCES locations(id),
  note varchar(255) NOT NULL
);