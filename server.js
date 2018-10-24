const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const creds = require("./config/email");
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.post('/send', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    console.log('Receiving Data');
    let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
        user: creds.USER,
        pass: creds.PASS
        },
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true
    });
console.log(req);
    // setup email data with unicode symbols
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var message = req.body.message
    var content = `send from : ${firstName} ${lastName}\n email: ${email} \n message: ${message} `
  
    var mailOptions = {
      from: creds.USER,
      to: 'vincent.petrini@gmail.com',
      replyTo: email,
      subject: req.body.subject,
      text: content
    }
console.log(mailOptions);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error);
        } else {
            res.send(info);
        }
        ;
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
