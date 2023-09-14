var express = require("express"),
    https = require("https"),
    fs = require("fs"),
    app = express(),
    bodyParser = require("body-parser"),
    mainRoute = require("./routes/mainRoutes");

const options = {
    key: process.env.SSL_PRIVATE_KEY,
    cert: process.env.SSL_CERTIFICATE,
    };
      
const server = https.createServer(options, app);

server.set("view engine","ejs");
server.use(express.static("public"));
server.use(bodyParser.urlencoded({extended:true}));
    
server.use('/', mainRoute);

// httpsServer.listen(3000, () => {
//     console.log('Server is running on port 8000');
// });

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log("Application is running at 8000 with https");
})

// httpsServer.listen(443, () => {
//     console.log("Application is running at 443 with https");
// })