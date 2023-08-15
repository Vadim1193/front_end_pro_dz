const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 9001;
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT"); //('key', 'value')
    res.setHeader("Access-Control-Allow-Headers", "Content-type");
    res.setHeader("Access-Control-Max-Age", "60");
    res.setHeader("Access-Control-Expose-Headers", "Barrer");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

let IS_AUTH = false;

app.get('/', function (req, res) {
    if (IS_AUTH) {
        res.status(200).json({ user: 'User', message: 'Ok' });
    } else {
        res.status(401).json({ message: "User is not defined" });
    }
})

app.post("/sign-in", (req, res) => {
    if (req.body.login && req.body.password) {
        IS_AUTH = true;
        res.status(200).json({ user: 'User', message: 'Ok' });
        return;
    }

    res.status(401).json({ message: "User is not defined" });
});

app.get('/logout', (req, res) => {
    IS_AUTH = false;
    res.status(401).json({ message: "User exit" });
})

app.get('/search-movies', (req, res) => {
    const { query } = req;

    const params = new URLSearchParams({
        apiKey: '67b34afd',
        s: query?.titleRequestMov || ''
    }).toString();

    axios.get(`http://www.omdbapi.com/?${params}`)
    .then((response) => {
        if (response.data) {
            return res.json(response.data);
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Not found'});
    })
})

app.listen(port, () => {
    console.log("Started server");
});
