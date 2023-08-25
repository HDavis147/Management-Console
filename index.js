const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware being used
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Hello! What would you like to do?',
      name: 'action',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
    },
  ])

  // Response for unused routes - 404 error
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

