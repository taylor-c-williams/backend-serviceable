// this is an example function

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: process.env.MYEMAIL,
  from: process.env.MYEMAIL,
  subject: 'Hello E-mail',
  text: 'Hello plain E-mail!',
  html: '<p>Hello HTML E-mail!</p>',
};
sgMail.send(msg)
;
