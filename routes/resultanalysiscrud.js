var express = require('express')
var app = express()
const db = require('../database');
var mysql = require('mysql');

//create connection database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'studentresultanalysis'
});

//create connection
connection.connect();

// List Product
app.get('/', function(req, res, next) {
        
    // select query get data product list    
    selectQuery = "SELECT * FROM grade6 ORDER BY AdmissionNo ASC";

    connection.query(selectQuery, function(error,data){

        //if(err) throw err
        if (error) {
            req.flash('error', error)
            res.render('studentList', {
                title: 'Student List', 
                data: ''
            })
        } else {
            // render to views/product/list.ejs template file
            res.render('studentList', {
                title: 'Student List', 
                data: data
            })
        }
    })
})

// Add Product Form
app.get('/add', function(req, res, next){   
    // render to views/product/add.ejs
    res.render('studentAdd', {
        title: 'Add New Student Marks',
        AdmissionNo: '',
        StudentName: '',
       Mathematic:'',
       Science:'',
       FirstLanguage: '',
       English:'',
       Buddhism:'',
      History:'',
       Geography:'',
       CitizenshipEducation:'',
       HealthPhysicalEducation:'',
       Tamil:''                         
            
    })
})

// Add Product Data
app.post("/add", function(req, res, next){

    // add validation
    // req.assert('AdmissionNo', 'Admission field is required').notEmpty()      //Validate name
    // req.assert('StudentName', 'Name field is required').notEmpty()    //Validate price
    
    // var errors = req.validationErrors()

   //get data in form  
   var AdmissionNo = req.body.AdmissionNo;
   var StudentName = req.body.StudentName;
   var Mathematic = req.body.Mathematic;
   var Science = req.body.Science;
   var FirstLanguage =req.body.FirstLanguage;
   var English = req.body.English;
   var Buddhism =  req.body.Buddhism;
   var History = req.body.History;
   var Geography = req.body.Geography;
   var CitizenshipEducation = req.body.CitizenshipEducation;
   var HealthPhysicalEducation =req.body.HealthPhysicalEducation;
   var Tamil = req.body.Tamil;
  

   // insert query get data product
   insertQuery = `INSERT INTO grade6 (AdmissionNo,StudentName,Mathematic, Science, FirstLanguage, English, Buddhism, History, Geography, CitizenshipEducation, HealthPhysicalEducation,Tamil) VALUES ("${AdmissionNo}", "${StudentName}", "${Mathematic}", "${Science}","${FirstLanguage}","${English}", "${Buddhism}", "${History}","${Geography}","${CitizenshipEducation}","${HealthPhysicalEducation}","${Tamil}")`;

   connection.query(insertQuery, function(error,result){

       //req.flash('success', 'Studnet add successfully!')
       // redirect to product list page
       res.redirect('/ResultCRUD')

   });
});

// Edit Product
app.get('/edit/(:AdmissionNo)', function(req, res, next){

    // get id product
    var AdmissionNo = req.params.AdmissionNo;

    //select query select data edit form
    var selectQuery = `SELECT * FROM grade6 WHERE AdmissionNo = "${AdmissionNo}"`;

    connection.query(selectQuery, function(error, data){

        // render to views/product/edit.ejs template file
        res.render('studentEdit', {
            title: 'Edit Student', 
            //data: rows[0],
            AdmissionNo: data[0].AdmissionNo,
            StudentName: data[0].StudentName,
            Mathematic : data[0]. Mathematic,
            Science : data[0].Science,
            FirstLanguage : data[0].FirstLanguage,
            English : data[0].English,
            Buddhism :  data[0].Buddhism,
            History : data[0].History,
            Geography : data[0].Geography,
            CitizenshipEducation : data[0].CitizenshipEducation,
            HealthPhysicalEducation : data[0].HealthPhysicalEducation,
            Tamil : data[0].Tamil
                              
        })

    });

});

// Update Product
app.post('/edit/(:AdmissionNo)', function(req, res, next){

    // get id product
    var AdmissionNo = req.params.AdmissionNo;

    // add validation
  
   // req.assert('StudentName', 'StudentName field is required').notEmpty()    //Validate price
  

    //var errors = req.validationErrors()

        // get data product
        var AdmissionNo = req.params.AdmissionNo;
        var StudentName = req.body.StudentName;
        var Mathematic = req.body.Mathematic;
        var Science = req.body.Science;
        var FirstLanguage =req.body.FirstLanguage;
        var English = req.body.English;
        var Buddhism =  req.body.Buddhism;
        var History = req.body.History;
        var Geography = req.body.Geography;
        var CitizenshipEducation = req.body.CitizenshipEducation;
        var HealthPhysicalEducation =req.body.HealthPhysicalEducation;
        var Tamil = req.body.Tamil;
       

        // update query product update
        var updateQuery = `UPDATE grade6 SET StudentName = "${StudentName}",Mathematic = "${Mathematic}", Science = "${Science}",FirstLanguage = "${FirstLanguage}",English = "${English}", Buddhism = "${Buddhism}", History = "${History}",Geography ="${Geography}",CitizenshipEducation ="${CitizenshipEducation}",HealthPhysicalEducation ="${HealthPhysicalEducation}",Tamil="${Tamil}" WHERE AdmissionNo = "${AdmissionNo}"`;

        connection.query(updateQuery, function(error,result){

            //req.flash('success', 'Product update successfully!')
            // redirect to products list page
            res.redirect('/ResultCRUD')
        });

    // if(errors){

    //     var error_msg = ''

    //     errors.forEach(function(error) {
    //         error_msg += error.msg + '<br>'
    //     })              

    //     req.flash('error', error_msg)       
        
    //     /**
    //      * Using req.body.name 
    //      * because req.param('name') is deprecated
    //      */ 
    //     res.render('studentEdit', { 
    //         title: 'Add New Product',
    //         AdmissionNo: AdmissionNo,
    //         StudentName: req.body.StudentName,
           
    //     })

    // }else{

    
    // }

})

// Delete Product
app.delete('/delete/(:AdmissionNo)', function(req, res, next) {

    // get id product data
    var AdmissionNo = req.params.AdmissionNo;

    // delete query product delete
    deleteQuery = `DELETE FROM grade6 WHERE AdmissionNo = "${AdmissionNo}"`;

    connection.query(deleteQuery, function(error,data){
        //if(err) throw err
        res.redirect('/ResultCRUD')
        // if (error) {j
        //     req.flash('error', error)
        //     // redirect to products list page
        //     res.redirect('/ResultCRUD')
        // } else {
        //     req.flash('success', 'Product deleted successfully!')
        //     // redirect to products list page
        //     res.redirect('/ResultCRUD')
        // }
    })
})

// upload csv to database
// app.post('/uploadfile', upload.single("uploadfile"), (req, res) =>{
//     UploadCsvDataToMySQL(__dirname + '/uploads/' + req.file.filename);
//     console.log('CSV file data has been uploaded in mysql database ' + err); //<----- here err is not defined 
//  });
 
module.exports = app
