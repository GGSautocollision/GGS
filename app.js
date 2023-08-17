var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mainRoute = require("./routes/mainRoutes");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
    
app.use('/', mainRoute);



app.listen(3000, process.env.IP, () => {
    console.log("Application is running" + process.env.PORT + "and" + process.env.IP);
})