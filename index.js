const cors = require("cors");
const express = require("express");
const app = require("express")();
const pool = require("./database/db");
//
//Method
const ItemMethod = require("./SQLmethod/Item");
const UserMethod = require("./SQLmethod/User");
const itemMethod = new ItemMethod(pool);
const userMethod = new UserMethod(pool);

// app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const PORT = process.env.PORT || 3000;

//Testing API
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/login", (req, res) => {
    userMethod.getUser(req, res);
})

app.get("/hello_world", (req, res) => {
    res.json({ greeting: "Hello World!!!" });
});

//Item API

app.get("/products", async (req, res) => {
    itemMethod.getAllItem(req, res);
});

app.get("/post", async (req, res) => {
    itemMethod.postAnItem(req, res);
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});


 