CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20),
    category VARCHAR(100),
    price INTEGER CHECK (price > 0),
    condition VARCHAR(100),
    statusItem BOOLEAN,
    description VARCHAR(500),
    userItem VARCHAR(50),
    keyword VARCHAR(20)
);

CREATE TABLE productImages(
    imageId SERIAL PRIMARY KEY,
    linkImage text,
    productID INTEGER
);

CREATE TABLE userProductId(

);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    hashed_password BYTEA,
    salt BYTEA,
    name TEXT,
    email TEXT UNIQUE,
    email_verified INTEGER
);
