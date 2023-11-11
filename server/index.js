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

app.use(helmet()); // Use Helmet to set security headers
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });





app.get('/', (req, res) => {
    res.send('Hello World!')
})
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

const fs = require('fs');
const https = require('https');
//const express = require('express');

//const app = express();
//const port = 8005;

// Your regular Express routes go here...

// Load self-signed SSL/TLS certificate
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Create an HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});