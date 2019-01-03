' use strict ' ;

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors') ({origin :  true });
const config = require("./config.js");

let transporter = nodemailer.createTransport({
    host: config.HOST,
    port: config.PORT,
    auth: {
        user: config.USER,
        pass: config.PASS
    },
    tls: config.TLS,
    requireTLS: config.REQUIRE_TLS
});

exports.sendEmail = functions.https.onRequest (( req , res ) => {
   return cors (req, res, () => {

        var firstName = req.body.firstName
        var lastName = req.body.lastName
        var email = req.body.email
        var message = req.body.message
        var content = `send from : ${firstName} ${lastName}\n email: ${email} \n message: ${message} `
    
        var mailOptions = {
        from: config.USER,
        to: config.EMAIL,
        replyTo: email,
        subject: req.body.subject,
        text: content
        }

        transporter.sendMail(mailOptions)
                            .then (()=>{
                                res.status(200).send(true);
                            })
                            .catch((error) => {
                                res.status(500).send(error);
                            });
    });
});