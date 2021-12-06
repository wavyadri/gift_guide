-- \i migrations/01_schema.sql

DROP TABLE IF EXISTS gifts CASCADE;

CREATE TABLE gifts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  vendor VARCHAR(255) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);