const express = require('express');
const router = express.Router();
const db = require('../database');


//Get All student data
router.get('/getAlldata', (req, res) => {
    let sql =
        'SELECT * FROM grade6;';
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All Student Data', Result: rows });
        // res.render('studentResultAnlysis', {
        //     Message: 'Getting All Data',
        //     title: 'DATA OVERVIEW',
        //     Result: rows
        // });
    });
});

//get highst marks by student
router.get('/getmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,  SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) as `Total`, FORMAT((SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) / (95*11)*100) ,2) as `Average` FROM grade6 GROUP BY AdmissionNo ORDER BY `Total` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        // res.json({ Message: 'Getting All Data', Result: rows });
          res.render('highestMarks', {
            Message: 'Getting All Data',
            title: 'HIGHEST MARKS',
            Result: rows
        });
    });
});

//get highst marks wise subject
//Maths
router.get('/getHighestMathsmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Mathematic` FROM grade6 WHERE `Mathematic` >= 75 ORDER BY `Mathematic` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        // res.json({ Message: 'Getting All Data', Result: rows });
        res.render('mathPass', {
            Message: 'Getting All Data',
            title: 'MATHS HIGHEST MARKS',
            Result: rows
        });
    });
});
//Science
router.get('/getHighestSciencemarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Science` FROM grade6 WHERE `Science` >= 75 ORDER BY `Science` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('sciencePass', {
            Message: 'Getting All Data',
            title: 'SCIENCE HIGHEST MARKS',
            Result: rows
        });
    });
});
//FirstLanguage
router.get('/getHighestFirstLanguagemarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `FirstLanguage` FROM grade6 WHERE `FirstLanguage` >= 75 ORDER BY `FirstLanguage` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('firstLangPass', {
            Message: 'Getting All Data',
            title: 'FIRST LANGUAGE HIGHEST MARKS',
            Result: rows
        });
    });
});
//English
router.get('/getHighestEnglishmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `English` FROM grade6 WHERE `English` >= 75 ORDER BY `English` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('englishPass', {
            Message: 'Getting All Data',
            title: 'ENGLISH HIGHEST MARKS',
            Result: rows
        });
    });
});
//Buddhism
router.get('/getHighestBuddhismmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Buddhism` FROM grade6 WHERE `Buddhism` >= 75 ORDER BY `Buddhism` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('budisumPass', {
            Message: 'Getting All Data',
            title: 'BUDISUM HIGHEST MARKS',
            Result: rows
        });
    });
});
//History
router.get('/getHighestHistorymarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `History` FROM grade6 WHERE `History` >= 75 ORDER BY `History` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('historyPass', {
            Message: 'Getting All Data',
            title: 'HISTORY HIGHEST MARKS',
            Result: rows
        });
    });
});
//Geography
router.get('/getHighestGeographymarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Geography` FROM grade6 WHERE `Geography` >= 75 ORDER BY `Geography` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('geoPass', {
            Message: 'Getting All Data',
            title: 'GEOGRAPHY HIGHEST MARKS',
            Result: rows
        });
    });
});
//CitizenshipEducation
router.get('/getHighestCitizenmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `CitizenshipEducation` FROM grade6 WHERE `CitizenshipEducation` >= 75 ORDER BY `CitizenshipEducation` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('citizenPass', {
            Message: 'Getting All Data',
            title: 'CITIZENSHIP HIGHEST MARKS',
            Result: rows
        });
    });
});
//HealthPhysicalEducation
router.get('/getHighestHealthmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `HealthPhysicalEducation` FROM grade6 WHERE `HealthPhysicalEducation` >= 75 ORDER BY `HealthPhysicalEducation` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('healthPass', {
            Message: 'Getting All Data',
            title: 'HEALTH SCHIENCE HIGHEST MARKS',
            Result: rows
        });
    });
});
//Tamil
router.get('/getHighestTamilhmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Tamil` FROM grade6 WHERE `Tamil` >= 75 ORDER BY `Tamil` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('tamilPass', {
            Message: 'Getting All Data',
            title: 'TAMIL HIGHEST MARKS',
            Result: rows
        });
    });
});
//EasternMusic
router.get('/getHighestMusichmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `EasternMusic` FROM grade6 WHERE `EasternMusic` >= 75 ORDER BY `EasternMusic` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('musicPass', {
            Message: 'Getting All Data',
            title: 'MUSIC HIGHEST MARKS',
            Result: rows
        });
    });
});
//Art
router.get('/getHighestArtmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Art` FROM grade6 WHERE `Art` >= 75 ORDER BY `Art` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('artPass', {
            Message: 'Getting All Data',
            title: 'ART HIGHEST MARKS',
            Result: rows
        });
    });
});
//Dancing
router.get('/getHighestDancingmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Dancing` FROM grade6 WHERE `Dancing` >= 75 ORDER BY `Dancing` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('dancePass', {
            Message: 'Getting All Data',
            title: 'DANCE HIGHEST MARKS',
            Result: rows
        });
    });
});
//DramaandTheatre
router.get('/getHighestDramamarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `DramaandTheatre` FROM grade6 WHERE `DramaandTheatre` >= 75 ORDER BY `DramaandTheatre` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('dramaPass', {
            Message: 'Getting All Data',
            title: 'DRAMA HIGHEST MARKS',
            Result: rows
        });
    });
});

/**Failures */

//Maths
router.get('/getLowestMathsmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Mathematic` FROM grade6 WHERE `Mathematic` < 35 ORDER BY `Mathematic` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('mathFail', {
            Message: 'Getting All Data',
            title: 'MATHS LOWEST MARKS',
            Result: rows
        });
    });
});
//Science
router.get('/getLowesSciencemarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Science` FROM grade6 WHERE `Science` < 35 ORDER BY `Science` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('scienceFail', {
            Message: 'Getting All Data',
            title: 'SCIENCE LOWEST MARKS',
            Result: rows
        });
    });
});
//FirstLanguage
router.get('/getLowesFirstLanguagemarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `FirstLanguage` FROM grade6 WHERE `FirstLanguage` < 35 ORDER BY `FirstLanguage` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('firstLangFail', {
            Message: 'Getting All Data',
            title: 'FIRST LANGUAGE LOWEST MARKS',
            Result: rows
        });
    });
});
//English
router.get('/getLowesEnglishmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `English` FROM grade6 WHERE `English` < 35 ORDER BY `English` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('englishFail', {
            Message: 'Getting All Data',
            title: 'ENGLISH LOWEST MARKS',
            Result: rows
        });
    });
});
//Buddhism
router.get('/getLowesBuddhismmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Buddhism` FROM grade6 WHERE `Buddhism` < 35 ORDER BY `Buddhism` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('budisumFail', {
            Message: 'Getting All Data',
            title: 'BUDISUM LOWEST MARKS',
            Result: rows
        });
    });
});
//History
router.get('/getLowesHistorymarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `History` FROM grade6 WHERE `History` < 35 ORDER BY `History` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('historyFail', {
            Message: 'Getting All Data',
            title: 'HISTORY LOWEST MARKS',
            Result: rows
        });
    });
});
//Geography
router.get('/getLowesGeographymarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Geography` FROM grade6 WHERE `Geography` < 35 ORDER BY `Geography` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
       // res.json({ Message: 'Getting All Data', Result: rows });
       res.render('geoFail', {
        Message: 'Getting All Data',
        title: 'GEOGRAPHY LOWEST MARKS',
        Result: rows
    });
    });
});
//CitizenshipEducation
router.get('/getLowesCitizenmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `CitizenshipEducation` FROM grade6 WHERE `CitizenshipEducation` < 35 ORDER BY `CitizenshipEducation` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('citizenshFail', {
            Message: 'Getting All Data',
            title: 'CITIZENSHIP LOWEST MARKS',
            Result: rows
        });
    });
});
//HealthPhysicalEducation
router.get('/getLowesHealthmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `HealthPhysicalEducation` FROM grade6 WHERE `HealthPhysicalEducation` < 35 ORDER BY `HealthPhysicalEducation` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('healthFail', {
            Message: 'Getting All Data',
            title: 'HEALTH SCIENCE LOWEST MARKS',
            Result: rows
        });
    });
});
//Tamil
router.get('/getLowesTamilhmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Tamil` FROM grade6 WHERE `Tamil` < 35 ORDER BY `Tamil` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('tamilFail', {
            Message: 'Getting All Data',
            title: 'TAMIL LOWEST MARKS',
            Result: rows
        });
    });
});
//EasternMusic
router.get('/getLowesMusichmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `EasternMusic` FROM grade6 WHERE `EasternMusic` < 35 ORDER BY `EasternMusic` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('musicFail', {
            Message: 'Getting All Data',
            title: 'MUSIC LOWEST MARKS',
            Result: rows
        });
    });
});
//Art
router.get('/getLowesArtmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Art` FROM grade6 WHERE `Art` < 35 ORDER BY `Art` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('artFail', {
            Message: 'Getting All Data',
            title: 'ART LOWEST MARKS',
            Result: rows
        });
    });
});
//Dancing
router.get('/getLowesDancingmarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `Dancing` FROM grade6 WHERE `Dancing` < 35 ORDER BY `Dancing` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('dancingFail', {
            Message: 'Getting All Data',
            title: 'DANCING LOWEST MARKS',
            Result: rows
        });
    });
});
//DramaandTheatre
router.get('/getLowesDramamarks', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, `DramaandTheatre` FROM grade6 WHERE `DramaandTheatre` < 35 ORDER BY `DramaandTheatre` DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('dramaFail', {
            Message: 'Getting All Data',
            title: 'DRAMA LOWEST MARKS',
            Result: rows
        });
    });
});

/**
 * fail pass %
 * Class wise
 * Subject
 */

/**
 * Grade A
 */
 router.get('/engPassFail', (req,res)=>{
    let sql =
        'select COUNT(a.AdmissionNo) as pass,  b.fail from grade6 as a , (select COUNT(AdmissionNo) as fail from grade6  where `Class` = "A" && `English` < 35) as b where a.Class = "A" && a.English >= 35 ;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});
//English
router.get('/getPassEnglish', (req,res)=>{
    let sql =
        'SELECT COUNT(AdmissionNo) AS passtot FROM grade6 WHERE `English` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEnglishStu', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName` , `English` FROM grade6 WHERE `English` >= 35 && `Class` = "A" ORDER BY English DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEnglish', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS failtot FROM grade6 WHERE `English` < 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEnglishStu', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName` , `English` FROM grade6 WHERE `English` < 35 && `Class` = "A" ORDER BY English DESC;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows)
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Maths
router.get('/getPassMath', (req,res)=>{
    let sql =
        'SELECT COUNT(AdmissionNo) AS passtot FROM grade6 WHERE `Mathematic` >= 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailMath', (req,res)=>{
    let sql =
        'SELECT COUNT(AdmissionNo) AS failtot FROM grade6 WHERE `Mathematic` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/mathsPassFail', (req,res)=>{
    let sql =
        'select COUNT(a.AdmissionNo) as pass,  b.fail from grade6 as a , (select COUNT(AdmissionNo) as fail from grade6  where `Class` = "A" && `Mathematic` < 35) as b where a.Class = "A" && a.Mathematic >= 35 ;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});
//Science
router.get('/getPassScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` >= 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/sciencePassFail', (req,res)=>{
    let sql =
        'select COUNT(a.AdmissionNo) as pass,  b.fail from grade6 as a , (select COUNT(AdmissionNo) as fail from grade6  where `Class` = "A" && `Science` < 35) as b where a.Class = "A" && a.Science >= 35 ;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});


//FirstLanguage
router.get('/getPassFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` < 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/firstLngPassFail', (req,res)=>{
    let sql =
        'select COUNT(a.AdmissionNo) as pass,  b.fail from grade6 as a , (select COUNT(AdmissionNo) as fail from grade6  where `Class` = "A" && `FirstLanguage` < 35) as b where a.Class = "A" && a.FirstLanguage >= 35 ;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Buddhism
router.get('/getPassBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` >= 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//History
router.get('/getPassHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Geography
router.get('/getPassGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//CitizenshipEducation
router.get('/getPassCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//HealthPhysicalEducation
router.get('/getPassHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Tamil
router.get('/getPassTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//EasternMusic
router.get('/getPassEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Art
router.get('/getPassArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Dancing
router.get('/getPassDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//DramaandTheatre
router.get('/getPassDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` >= 35 && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` < 35  && `Class` = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});


/**
 * fail pass %
 * Class wise
 * Subject
 */

/**
 * Grade B
 */
//English
router.get('/getPassEnglish', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `English` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEnglish', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `English` < 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});


//Maths
router.get('/getPassMath', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Mathematic` >= 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailMath', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Mathematic` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Science
router.get('/getPassScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` >= 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//FirstLanguage
router.get('/getPassFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` < 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Buddhism
router.get('/getPassBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` >= 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//History
router.get('/getPassHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Geography
router.get('/getPassGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//CitizenshipEducation
router.get('/getPassCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//HealthPhysicalEducation
router.get('/getPassHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Tamil
router.get('/getPassTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//EasternMusic
router.get('/getPassEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Art
router.get('/getPassArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Dancing
router.get('/getPassDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//DramaandTheatre
router.get('/getPassDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` >= 35 && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` < 35  && `Class` = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

/**
 * fail pass %
 * Class wise
 * Subject
 */

/**
 * Grade C
 */
//English
router.get('/getPassEnglish', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `English` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEnglish', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `English` < 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});


//Maths
router.get('/getPassMath', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Mathematic` >= 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailMath', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Mathematic` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Science
router.get('/getPassScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` >= 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailScienc', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Science` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//FirstLanguage
router.get('/getPassFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailFirstLanguage', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `FirstLanguage` < 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Buddhism
router.get('/getPassBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` >= 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailBuddhism', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Buddhism` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//History
router.get('/getPassHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHistory', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `History` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Geography
router.get('/getPassGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailGeography', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Geography` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//CitizenshipEducation
router.get('/getPassCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailCitizenshipEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `CitizenshipEducation` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//HealthPhysicalEducation
router.get('/getPassHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailHealthPhysicalEducation', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `HealthPhysicalEducation` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Tamil
router.get('/getPassTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailTamil', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Tamil` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//EasternMusic
router.get('/getPassEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailEasternMusic', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `EasternMusic` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Art
router.get('/getPassArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailArt', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Art` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Dancing
router.get('/getPassDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDancing', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `Dancing` < 35  && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//DramaandTheatre
router.get('/getPassDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` >= 35 && `Class` = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getFailDramaandTheatre', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(AdmissionNo)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage FROM grade6 WHERE `DramaandTheatre` < 35  && `Class` = "Cf";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Pass & Fail 
//Class A

router.get('/getFailEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Mathematic FROM grade6 WHERE Mathematic < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Mathematic FROM grade6 WHERE Mathematic >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
       // res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
         res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.send(rows);
        //res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre < 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre >= 35 && Class = "A";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Pass & Fail 
//Class B

router.get('/getFailEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Maths FROM grade6 WHERE Maths < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Maths FROM grade6 WHERE Maths >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre < 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre >= 35 && Class = "B";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Pass & Fail 
//Class C

router.get('/getFailEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEnglishStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , English FROM grade6 WHERE English >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Maths FROM grade6 WHERE Maths < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassMathsStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Maths FROM grade6 WHERE Maths >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassScienceStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Science FROM grade6 WHERE Science >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassFirstLanguageStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , FirstLanguage FROM grade6 WHERE FirstLanguage >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassBuddhismStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Buddhism FROM grade6 WHERE Buddhism >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHistoryStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , History FROM grade6 WHERE History >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassGeographyStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Geography FROM grade6 WHERE Geography >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassCitizenshipEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , CitizenshipEducation FROM grade6 WHERE CitizenshipEducation >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassHealthPhysicalEducationStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , HealthPhysicalEducation FROM grade6 WHERE HealthPhysicalEducation >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassTamilStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Tamil FROM grade6 WHERE Tamil >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassEasternMusicStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , EasternMusic FROM grade6 WHERE EasternMusic >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassArtStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Art FROM grade6 WHERE Art >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDancingStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , Dancing FROM grade6 WHERE Dancing >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

router.get('/getFailDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre < 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
router.get('/getPassDramaandTheatreStu', (req,res)=>{
    let sql =
        'SELECT AdmissionNo, StudentName , DramaandTheatre FROM grade6 WHERE DramaandTheatre >= 35 && Class = "C";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});



/**
 * 
 * new added
 */
//List of failures
 router.get('/getListFailures', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`, Mathematic , Science , FirstLanguage , English , Buddhism , History , Geography , CitizenshipEducation , HealthPhysicalEducation , Tamil , EasternMusic , Art , Dancing , DramaandTheatre  FROM `grade6` where  Mathematic < 45 && Science < 45 && FirstLanguage < 45 && English < 45 && Buddhism < 45 && History < 45 && Geography < 45 && CitizenshipEducation < 45 && HealthPhysicalEducation < 45 && Tamil < 45;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        // res.json({ Message: 'Getting All Data', Result: rows });
        res.render('FailureList', {
            Message: 'Getting All Data',
            title: 'LIST OF FAILURES MARKS',
            Result: rows
        });
    });
});
//List of passe in grade 6
router.get('/getListPasser', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName` FROM `grade6` where  Mathematic >= 45 && Science >= 45 && FirstLanguage >= 45 && English >= 45 && Buddhism >= 45 && History >= 45 && Geography >= 45 && CitizenshipEducation >= 45 && HealthPhysicalEducation >= 45 && Tamil >= 45;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Pass precentage in class A
router.get('/getListPasserA', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "A" && Mathematic >=35 && Science >=35 && FirstLanguage >=35 && English >=35 && Buddhism >=35 && History >=35 && Geography >=35 && CitizenshipEducation >=35 && HealthPhysicalEducation >=35 && Tamil >=35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
 
//Fail precentage in class A
router.get('/getListPasserA', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "A"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "A" && Mathematic < 35 && Science  < 35 && FirstLanguage < 35 && English < 35 && Buddhism < 35 && History < 35 && Geography < 35 && CitizenshipEducation < 35 && HealthPhysicalEducation < 35 && Tamil < 35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

//Pass precentage in class B
router.get('/getListPasserB', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "B"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "B" && Mathematic >=35 && Science >=35 && FirstLanguage >=35 && English >=35 && Buddhism >=35 && History >=35 && Geography >=35 && CitizenshipEducation >=35 && HealthPhysicalEducation >=35 && Tamil >=35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
 
//Fail precentage in class B
router.get('/getListPasserB', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "B"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "B" && Mathematic < 35 && Science  < 35 && FirstLanguage < 35 && English < 35 && Buddhism < 35 && History < 35 && Geography < 35 && CitizenshipEducation < 35 && HealthPhysicalEducation < 35 && Tamil < 35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
//Pass precentage in class C
router.get('/getListPasserC', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "C"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "C" && Mathematic >=35 && Science >=35 && FirstLanguage >=35 && English >=35 && Buddhism >=35 && History >=35 && Geography >=35 && CitizenshipEducation >=35 && HealthPhysicalEducation >=35 && Tamil >=35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});
 
//Fail precentage in class C
router.get('/getListPasserC', (req,res)=>{
    let sql =
        'SELECT FORMAT((COUNT(`AdmissionNo`)/(select count(`AdmissionNo`) from `grade6` where `Class` = "C"))*100,2) AS passPrecentage, `Class` FROM grade6 WHERE `Class` = "C" && Mathematic < 35 && Science  < 35 && FirstLanguage < 35 && English < 35 && Buddhism < 35 && History < 35 && Geography < 35 && CitizenshipEducation < 35 && HealthPhysicalEducation < 35 && Tamil < 35;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        res.json({ Message: 'Getting All Data', Result: rows });
    });
});

/**
 * Top 3 Class Wise
 */
 router.get('/getTopclassA', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,Class,  SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) as `Total`, FORMAT((SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) / (95*11)*100) ,2) as `Average` FROM grade6 where Class = "A" GROUP BY AdmissionNo  ORDER BY Total DESC LIMIT 3;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('classAtop', {
            Message: 'Getting All Data',
            title: 'TOP 3 MARKS',
            Result: rows
        });
    });
});
router.get('/getTopclassB', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,Class,  SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) as `Total`, FORMAT((SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) / (95*11)*100) ,2) as `Average` FROM grade6 where Class = "B" GROUP BY AdmissionNo  ORDER BY Total DESC LIMIT 3;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('classBtop', {
            Message: 'Getting All Data',
            title: 'TOP 3 MARKS',
            Result: rows
        });
    });
});
router.get('/getTopclassC', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,Class,  SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) as `Total`, FORMAT((SUM( Mathematic + Science + FirstLanguage + English + Buddhism + History + Geography + CitizenshipEducation + HealthPhysicalEducation + Tamil + EasternMusic + Art + Dancing + DramaandTheatre  ) / (95*11)*100) ,2) as `Average` FROM grade6 where Class = "C" GROUP BY AdmissionNo  ORDER BY Total DESC LIMIT 3;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('classCtop', {
            Message: 'Getting All Data',
            title: 'TOP 3 MARKS',
            Result: rows
        });
    });
});
/**
 * Report Generation
 */
router.get('/getone', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,Class, Mathematic , Science , FirstLanguage , English , Buddhism , History , Geography , CitizenshipEducation , HealthPhysicalEducation , Tamil , EasternMusic , Art , Dancing , DramaandTheatre  FROM grade6 where AdmissionNo = 5199;'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('report2', {
            Message: 'Getting All Data',
            title: 'REPORT GENERATION',
            Result: rows
        });
    });
});

router.get('/getonestu/(:studentid)', (req,res)=>{
    let sql =
        'SELECT `AdmissionNo`, `StudentName`,Class, Mathematic , Science , FirstLanguage , English , Buddhism , History , Geography , CitizenshipEducation , HealthPhysicalEducation , Tamil , EasternMusic , Art , Dancing , DramaandTheatre  FROM grade6 where AdmissionNo = "${studentid}";'
    db.query(sql, (err, rows) => {
        if (err) return res.status(400).json({ Message: err.message });
        // res.send(result);
        //res.json({ Message: 'Getting All Data', Result: rows });
        res.render('report2', {
            Message: 'Getting All Data',
            title: 'REPORT GENERATION',
            Result: rows
        });
    });
});

module.exports = router;