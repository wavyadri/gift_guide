-- \i migrations/01_schema.sql

DROP TABLE IF EXISTS gifts CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE gifts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  vendor VARCHAR(255) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 and price_range <= 5)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  gift_id INTEGER NOT NULL REFERENCES gifts(id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  text TEXT NOT NULL,
  rating INT NOT NULL check(rating >= 1 and rating <= 5)
);