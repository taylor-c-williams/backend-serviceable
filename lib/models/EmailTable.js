const pool = require('../utils/pool');

module.exports = class SendGridSingle {
  id;
  useremail;

  constructor(row) {
    this.id = row.id;
    this.useremail = row.useremail;
  }

  static async insert({ userEmail }){
    const { rows } = await pool.query(
      'INSERT INTO emailaddresses (useremail) VALUES ($1) RETURNING *', [userEmail] 
    );
    return new SendGridSingle(rows[0]);
  }
};
