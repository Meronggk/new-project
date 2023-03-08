
const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));
const bodyParser = require('body-parser');


const CLIENT_ID = "438f9e1d00fa92021341";
const CLIENT_SECRET = "b3c37ca13e1365800e084515a492c9e86199150d";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', async function(req, res){
    req.query.code;

    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + req.query.code;

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        header: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    });
});


app.get('/getUserData', async function(req, res) {
    req.get("Authorization");
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
})

app.listen(4000, function () {
    console.log('CORS server running on port 4000');
});
