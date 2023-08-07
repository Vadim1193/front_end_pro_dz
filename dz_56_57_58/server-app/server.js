const express = require("express");
const bodyParser = require("body-parser");


const app = express();
const port = 9001;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    // console.log(req.headers);

    res.setHeader("Access-Control-Allow-Origin", "*"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.setHeader("Access-Control-Max-Age", "60");
    res.setHeader("Access-Control-Expose-Headers", "Barrer");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

let IS_AUTH = false;

app.post("/sign-in", (req, res) => {
    if (req.body.login && req.body.password) {
        IS_AUTH = true;
        res.status(200).json({ user: 'User', message: 'Ok' });
        return;
    }

    res.status(401).json({ message: "User is not defined" });
});

app.listen(port, () => {
    console.log("Started server");
});