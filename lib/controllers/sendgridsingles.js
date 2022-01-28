const { Router } = require('express');
// const EmailTable = require('../models/EmailTable');

module.exports = Router(); 

// post address to email address table:
// would never publish email addresses irl without auth 

// .post('/addresses', async(req, res) => {
//   const newEmail = await EmailTable.insert({
//     useremail: req.body.useremail
//   });
//   res.json(newEmail);
// })


// Send Email:
// const SendGridSingleService = require('./services/SendGridSingleService)
// .post('/sendemail', (req, res) =>
// const from = 'MYEMAIL.ENV HERE'
// const { name, email } = req.body;
// const output = `Hello ${name}, this is an email`;
// SendGridSingleService(from, name, email) 
// then redirect to 'SENT' confirmation page/message
// }) 





