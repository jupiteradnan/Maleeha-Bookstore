  
       // const http = require('http');
       var express = require('express');
       var app = express();
       var bodyParser = require('body-parser');
       const logger = require('morgan');
       const routes = require('./server/routes');
        
       
       
       //const hostname = '127.0.0.1';
       //const hostname = 'localhost';
        //const port = 3000;
        //const server = http.createServer(app);
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        routes(app);

        app.get('*', (req, res) => res.status(200).send({
          message: 'Welcome to the .',
        }));

      /*  server.listen(port, hostname, () => {
          console.log(`Server running at http://${hostname}:${port}/`);
        });  */
        
       
     /*  app.use(bodyParser.json());
       app.use(bodyParser.urlencoded({
           extended: true
       }));  */
       
       

 var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  //host: '127.0.0.1',
  user: "root",
  password: "root1234",
  database: "bookstore"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*con.query("CREATE DATABASE bookstore", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });*/
});

        
module.exports = app;
       



