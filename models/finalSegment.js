const { string } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Create user schema
const segmentSchema = new Schema({

    // id: {
    //     type: String,
    //     unique: true
    // },
    // firstName: String,
    // lastName: String,
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     lowercase: true
    // },
    // dateOfBirth: Date,
    // mobile: {
    //     type: Number,
    //     default: null,
    // },
    // status: {
    //     type: Boolean,
    //     default: false,
    // },
    // password: {
    //     type: String,
    //     minlength: 6,
    // },
    // accountType: {
    //     type: String,
    //     default: "Student",
    // },
    // countLogin: {
    //     type: Number,
    //     default: 0
    // }

    Invoice: Number,
    StockCode : String,
    Description: String,
    Quantity: Number,
    InvoiceDate : String,
    Price: Number,
    CustomerID: Number,
    Country: String,
    FinalPrice: Number,
    month: Number,
    year: Number,
    WeekDay: String,
    monthYear: String,
    hour: Number,
    Date: String,
    Recency: Number,
    Frequency: Number,
    Monetary: Number,
    RecencyScore: Number,
    FrequencyScore: Number,
    MonetaryScore: Number,
    RFM_SCORE: Number,
    Segment_RFM: String,
    Cluster_kmeans: Number,
    Cluster_hc: Number,


}, {
    timestamps: true,
});

//Collection name
const finalSegmentSample = mongoose.model("finalSegmentSample", segmentSchema);

module.exports = finalSegmentSample;