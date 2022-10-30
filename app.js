var express = require('express');
const path = require('path');
//const mongoose = require("mongoose");
const colors = require("colors");
var app = express();
const keys = require("./config/keys");
const {spawn} = require('child_process');
const fs = require('fs');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./database');
require('dotenv').config();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const multer = require('multer');
//const csv = require('csv-stream');
var csv = require('csv-parse');
const mysql = require('mysql');

const port = process.env.PORT || 3000;

//setting view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/img', express.static(__dirname + '/img'));

// app.get('/', function(req, res) {
//     res.sendFile('index', { 'root': __dirname + '/templates' });
// })

// login page
app.get('/', function(req, res) {
    res.render('login');
    //res.sendFile('login.html');;
});

// index page
app.get('/indexpage', function(req, res) {
    res.render('index');
});
// home page
app.get('/homepage', function(req, res) {
    res.render('home');
});
// index page
app.get('/inboxpage', function(req, res) {
    res.render('inbox');
});
//  404 error page
app.get('/404page', function(req, res) {
    res.render('404');
});
//  500 error page
app.get('/500page', function(req, res) {
    res.render('500');
});
//  profile page
app.get('/profile', function(req, res) {
    res.render('profile');
});

//  Class A Charts Analysis chart page
app.get('/segExploration', function(req, res) {
    res.render('dataexploration');
});
//  Class B Charts Analysis chart page
app.get('/classBcharts', function(req, res) {
    res.render('classBresultAnalysis');
});
//  Class C Charts Analysis chart page
app.get('/classCcharts', function(req, res) {
    res.render('classCresultAnalysis');
});
//  Priceing table page
app.get('/pricingTable', function(req, res) {
    res.render('pricing_table');
});

;
app.get('/reportGen', function(req,res){
    res.render('report2');
})
/**
 * Market Basket Anlysis
 */


/*MONGO DB BACKEND*/

// mongoose
//     .connect(keys.mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then((res) => {
//         console.log(`MongoDB Connected ${res.connection.host}`.cyan.underline);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const resultAnalysis = require('./routes/resultAnalysis');
const resultAnalysisCRUD = require('./routes/resultanalysiscrud');


app.use('/ResultAnalysis', resultAnalysis);
app.use('/ResultCRUD', resultAnalysisCRUD);

/**
 * file upload
 */
//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './uploads/')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

//@type   POST
// upload csv to database
app.post('/uploadfile', upload.single("uploadfile"), (req, res) =>{
    UploadCsvDataToMySQL(__dirname + '/uploads/' + req.file.filename);
    console.log('CSV file data has been uploaded in mysql database ');
});


function UploadCsvDataToMySQL(filePath){
    let stream = fs.createReadStream(filePath);
    let csvData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            csvData.push(data);
        })
        .on("end", function () {
            // Remove Header ROW
            csvData.shift();
  
            var con = mysql.createConnection({ //Create connection
                host: 'localhost',
                user: 'root',
                //database: 'survelliancedb',
                database: 'studentresultanalysis',
               password: 'root',
            });
            // Open the MySQL connection
            con.connect((error) => {
                if (error) {
                    console.error(error);
                } else {
                    let query = 'INSERT INTO `test` (`ID`, `Name`) VALUES ?';
                    db.query(query, [csvData], (error, response) => {
                        console.log(error || response);
                    });
                }
            });
             
            // delete file after saving to MySQL database
            // -> you can comment the statement to see the uploaded CSV file.
            fs.unlinkSync(filePath)
        });
  
    stream.pipe(csvStream);
}
app.listen(port, () => {
    console.log(`App is Listening on PORT ${port}`);
});

module.exports = app;