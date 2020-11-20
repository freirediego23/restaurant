DROP TABLE if exists restaurant CASCADE;

CREATE TABLE restaurant (

restId		serial PRIMARY KEY,
restname	varchar(100) NOT NULL,
restfood	varchar(100),
restplace	varchar(100)

);

INSERT INTO restaurant (restname, restfood, restplace)
VALUES 
('Chifa', 'Chinese Food', 'Market Street 21'),
('Chefpizza', 'Special Pizza', 'South Street');