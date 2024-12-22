// Import required packages
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your database host
  user: 'root', // Change this to your database username
  password: ' ', // Change this to your database password
  database: 'carbooking' // Change this to your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Export the connection to be used in other modules
module.exports = connection;
