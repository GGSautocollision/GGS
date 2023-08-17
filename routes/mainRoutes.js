const express = require('express');
const app = express.Router(),
      nodemailer = require("nodemailer");

app.get("/", (req, res)=>{
    res.render("index");
})
app.post('/contact', function (req, res) {
  var transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     secure: true, 
     auth: {
            user: 'ggsautocollision@gmail.com',
            pass: '9417565433'
        }
    });
    
    const mailOptions = {
        from: req.body.email,
        to: 'ggsautocollision@gmail.com',
        subject: 'Contact from GGS AutoCollision',
        html: `Name: ${req.body.first} (${req.body.last}) <br>
               Phone: ${req.body.phone} <br>
               Email: ${req.body.email} <br>
               Company: ${req.body.company} <br>
               Model: ${req.body.model} <br>
               Message: ${req.body.message}
        `
    };
    
    transporter.sendMail(mailOptions, function (err, info) {
       if(err){
           console.log(err);
           res.send("<h1 style='text-align:center'> Error Send Mail </h1> <a href='/'><button>Go Back</button></a>")
       }
       else {
         console.log(info);
         res.send("Mail has been sent")
       }
    });
});

module.exports = app;