var express = require("express"),
    https = require("https"),
    fs = require("fs"),
    app = express(),
    bodyParser = require("body-parser"),
    mainRoute = require("./routes/mainRoutes");

    const options = {
        cert: fs.readFileSync('./routes/crt.pem'),
        key: fs.readFileSync('./routes/key.pem'),
      };

const server = https.createServer(options, (req, res) => {
    app.set("view engine","ejs");
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/', mainRoute);
  });

// httpsServer.listen(3000, () => {
//     console.log('Server is running on port 8000');
// });


const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log("Application is running at with https");
})

// httpsServer.listen(443, () => {
//     console.log("Application is running at 443 with https");
// })