const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

const db = require('../database');
const { cloudinary_keys } = require('../config/keys');

// Config Files
cloudinary.config({
    cloud_name: cloudinary_keys.CLOUD_NAME,
    api_key: cloudinary_keys.API_KEY,
    api_secret: cloudinary_keys.API_SECRET,
});



// Getting ALL details related to segments
// GET 127.0.0.1:3000/segment/
module.exports.getAllSegments = (req, res) => {
    let sql =
        'SELECT * FROM finalSegmentSample;';
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All segments Data', Result: result });
    });
};


//Getting Specific data by customer ID
module.exports.getByCustomerID = (req, res) => {
    let sql = 'SELECT * FROM `finalSegmentSample` WHERE `CustomerID`=?';
    const values = [req.params.id];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting BY customer ID', Result: result });
    });
};


// RFM ANALYSIS
// GET 127.0.0.1:3000/segment/
module.exports.getRFM = (req, res) => {
    let sql =
        'SELECT Segment_RFM, Recency, Frequency, Monetary FROM rfmSegmentGroup;';
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting RFM average Data', Result: result });
    });
};


module.exports.getRFMChart = (req, res) => {
    let sql =
        'SELECT Segment_RFM, `Recency_[0]` FROM rfmSegmentGroup;';
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting RFM average Data', Result: result });
    });
};

module.exports.customersPerday = (req, res) => {
    let sql =
        'SELECT WeekDay, COUNT(CustomerID) as `NumCustomers` FROM finalSegmentSample GROUP BY WeekDay;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting number of customers per day', Result: result });
    });
};

//Get RFM GROUP presentage 
module.exports.getPrecentageRFMGroup = (req, res) => {
    let sql =
        'SELECT Segment_RFM, (COUNT( distinct CustomerID)/ 500)*100 as `customer%`, (COUNT( distinct Invoice)/500)*100 as `transcation%` FROM finalSegmentSample GROUP BY Segment_RFM;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting Precentage for each segmnets Data', Result: result[0] });
    });
};

//Get RFM count
module.exports.getCountRFMGroup = (req, res) => {
    let sql =
        'SELECT Segment_RFM, (COUNT( distinct CustomerID)) as `customers`, (COUNT( distinct Invoice)) as `transcations` FROM finalSegmentSample GROUP BY Segment_RFM;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        //res.json({ Message: 'Getting Precentage for each segmnets Data', Result: result });
        res.json({message: `My test`})
    });
};

module.exports.getMonthlyItems = (req, res) => {
    let sql =
        'SELECT month, Description FROM finalSegmentSample GROUP BY month;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All items related to each month', Result: result });
    });
};

module.exports.get = (req, res) => {
    let sql =
        'SELECT month, Description FROM finalSegmentSample GROUP BY month;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All items related to each month', Result: result });
    });
};

//Get RFM Mean and count for K-Mean for planing strategies
module.exports.getKmean = (req, res) => {
    let sql =
        'SELECT Cluster_kmeans, AVG(Recency) as `meanRecency`, AVG(Frequency) as `meanFrequency`, AVG(Monetary) as `meanMonetary`, COUNT(CustomerID) as `customers` FROM finalSegmentSample GROUP BY Cluster_kmeans;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All items related to each month', Result: result });
    });
};

//Get RFM Mean and count for Hirachycal for planing strategies
module.exports.getHiracycal = (req, res) => {
    let sql =
        'SELECT Cluster_hc, AVG(Recency) as `meanRecency`, AVG(Frequency) as `meanFrequency`, AVG(Monetary) as `meanMonetary`, COUNT(CustomerID) as `customers` FROM finalSegmentSample GROUP BY Cluster_hc;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting All items related to each month', Result: result });
    });
};

//Most sell products
module.exports.getMostSellProduct = (req, res) => {
    let sql =
        'SELECT Description, SUM(Quantity) as `totProduct` FROM finalSegmentSample GROUP BY Description ORDER BY totProduct DESC LIMIT 10;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting most sell products', Result: result });
    });
};

//porducts sell by month
module.exports.getMostSellProduct = (req, res) => {
    let sql =
        'SELECT Description, SUM(Quantity) as `totProduct` FROM finalSegmentSample GROUP BY month;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting selled produts by month', Result: result });
    });
};

//how many purchases by month (Transcations)
module.exports.getMostSellProduct = (req, res) => {
    let sql =
        'SELECT month, COUNT(Invoice) as `totTranscation` FROM finalSegmentSample GROUP BY month;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting trnscation by month', Result: result });
    });
};

//how many purchases by day (Transcations)
module.exports.getMostSellProduct = (req, res) => {
    let sql =
        'SELECT WeekDay, COUNT(Invoice) as `totTranscation` FROM finalSegmentSample GROUP BY WeekDay;'
    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ Message: err.message });
        res.json({ Message: 'Getting trnscation by weekday', Result: result });
    });
};