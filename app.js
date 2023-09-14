var express = require("express"),
    https = require("https"),
    fs = require("fs"),
    app = express(),
    app2 = express(),
    bodyParser = require("body-parser"),
    mainRoute = require("./routes/mainRoutes");

    const options = {
        cert: fs.readFileSync('./routes/crt.pem'),
        key: fs.readFileSync('./routes/key.pem'),
      };


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
    
app.use('/', mainRoute);

const server = https.createServer(options, (req, res) => {
    res.render("index");
  });

// httpsServer.listen(3000, () => {
//     console.log('Server is running on port 8000');
// });


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Application is running at 8000 with https");
})

// httpsServer.listen(443, () => {
//     console.log("Application is running at 443 with https");
// })