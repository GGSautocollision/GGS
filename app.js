var express = require("express"),
    https = require("https"),
    fs = require("fs"),
    app = express(),
    bodyParser = require("body-parser"),
    mainRoute = require("./routes/mainRoutes");

const privateKey = fs.readFileSync('./routes/key.key', 'utf8');
const certificate = fs.readFileSync('./routes/crt.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
    
app.use('/', mainRoute);

httpsServer.listen(8000, () => {
    console.log('Server is running on port 443');
});

// app.listen(process.env.PORT, process.env.IP, () => {
//     console.log("Application is running");
// })