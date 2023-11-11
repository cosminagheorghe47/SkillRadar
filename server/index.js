// server.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');
const helmet = require('helmet');

const app = express();
const port = 8005
// Enable HTTPS redirection in production
if (process.env.NODE_ENV === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.use(helmet());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/callback', async (req, res) => {
    const code = req.query.code; // Extract the 'code' parameter from the incoming request

    const query = new URLSearchParams({
        client_id: 'R09HSDA1W9P1IPDX8FBH2PGR45USO7J9',
        client_secret: 'YYKJCVDZ09WFA3Z9GZ648O48T6DKI04GPFOYXV97CPT3ATAVC06I6J2931C0SUAV',
        code: code,
    }).toString();

    const resp = await fetch(
        `https://api.clickup.com/api/v2/oauth/token?${query}`,
        { method: 'POST' }
    );

    const data = await resp.json(); // Assuming the response is in JSON format
    console.log(data);

    // Handle the response accordingly, e.g., store the access token, etc.
    res.send('Authorization successful!');
});


const fs = require('fs');
const https = require('https');



const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };


const httpsServer = https.createServer(credentials, app);


httpsServer.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});