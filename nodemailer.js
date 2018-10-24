var nodemailer = require('nodemailer');
const creds = require('./config/email');

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
});

router.post('/send', (req, res, next) => {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var message = req.body.message
    var content = `send from : ${firstName} ${lastName}\n email: ${email} \n message: ${message} `
  
    var mail = {
      from: creds.USER,
      to: 'vincent.petrini@gmail.com',
      replyTo: email,
      subject: req.body.subject,
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
});