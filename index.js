const cors = require("cors");
const app = require("express")();
// app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

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
