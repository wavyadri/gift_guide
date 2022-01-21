-- -- \i seeds/01_seeds.sql

-- gifts
INSERT INTO gifts (name, vendor, price_range) VALUES ('leafs tickets', 'ticketmaster', 3);

-- reviews
INSERT INTO reviews (gift_id, name, text, rating) VALUES (1, 'amy', 'it could have been better', 2), (1, 'bob', 'I liked it', 3), (1, 'charles', 'very nice', 4);

