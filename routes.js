const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : '112.166.141.161',
  user     : 'root',
  password : 'kylin1q2w3e4r',
  database : 'SaBang'
});

const app = express();

app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {


    connection.query('SELECT * FROM SaBang.People_Info', function (error, results, fields) {

      if (error) throw error;

      res.send(results)
    });
  });
});

// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/users so you can see the data.');
});
