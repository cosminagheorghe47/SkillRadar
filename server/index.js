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

const fs = require('fs');
const https = require('https');



const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };


const httpsServer = https.createServer(credentials, app);


httpsServer.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});