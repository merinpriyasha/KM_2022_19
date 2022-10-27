const mysql = require('mysql');

// database connection
const db = mysql.createConnection({
    //host: 'sql4.freesqldatabase.com',
    host: 'localhost',
    user: 'root',
    //database: 'survelliancedb',
    database: 'studentresultanalysis',
   password: 'root',
});

db.connect((err) => {
    if (err) console.log(err);
    console.log('MySql Connected');
});

module.exports = db;