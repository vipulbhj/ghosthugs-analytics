const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnalyticSchema = new Schema({
    url: {
        type: String, 
        required: true
    }, 
    timeSpentOnThePage: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Analytic', AnalyticSchema);