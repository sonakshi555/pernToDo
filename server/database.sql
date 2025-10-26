-- creating a database named perntodo
CREATE DATABASE perntodo;

CREATE TABLE todo(
    t_id SERIAL PRIMARY KEY,
    description VARCHAR(300)
);