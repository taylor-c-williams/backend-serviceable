const sgMail = require('@sendgrid/mail');

module.exports = class SendGridSingleService{

  static async sendMail(userEmail, subject, text){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: userEmail,
      from: process.env.MYEMAIL,
      subject, 
      text
    };
    sgMail.send(msg, (err) => {
      if(err){
        console.log('Email error occurred');
      } else {
        console.log('Email Successful');
      }
    });
  }
};

