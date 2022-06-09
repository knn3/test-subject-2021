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
    fullname VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(64), --https://stackoverflow.com/questions/247304/what-data-type-to-use-for-hashed-password-field-and-what-length SHA-256 generate CHAR(64)
    yearofbirth VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(50),
    addressUser VARCHAR(100),
    bio text,
    avatar VARCHAR(200)
);