const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'pickles7',
    database: 'directory_db'
  }
);

function viewDepts(){ 
  let result = db.query('SELECT * FROM departments')
  return result;
};

module.exports = {viewDepts};