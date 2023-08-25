const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const queries = require('./queries/queries.js');

const PORT = 3005;
const app = express();

// Used to connect to the directory_db database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'pickles7',
    database: 'directory_db'
  },
  console.log(`Connected to the directory_db database.`)
);

function mainPrompt() {

  db.start;

  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Hello! What would you like to do?',
      name: 'action',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
    },
  ])
  .then((response) => {
    switch (response.action) {
      case 'View All Departments':
        viewDepts();
        break;

      case 'View All Roles':
        viewRoles();
        break;

      case 'View All Employees':
        viewEmployees();
        break;

      case 'Add A Department':
        addDepartment();
        break;

      case 'Add A Role':
        addRole();
        break;

      case 'Add An Employee':
        addEmployee();
        break;
        
      case 'Update An Employee Role':
        updateEmployeeRole();
        break;
    }
  });
}

function viewDepts(){
  db.start;
  let query = "SELECT * FROM departments;"
  db.query(query, function (err, res){
      if (err) throw err;
      console.log(res);
      mainPrompt();
  })
};

function viewRoles(){
  let query = "SELECT * FROM roles;"
  db.query(query, function (err, res){
      if (err) throw err;
      console.log(res);
      mainPrompt();
  })
};

function viewEmployees(){
  let query = "SELECT * FROM employees;"
  db.query(query, function (err, res){
      if (err) throw err;
      console.log(res);
      mainPrompt();
  })
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mainPrompt();

module.exports = {db};
