const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/hello_world", (req, res) => {
    res.send("Hello this is your first Hello World");
});

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});
