const express = require('express');
const router = express.Router();
const AnalyticModel = require('../models/stats');

router.get('/', (req, res) => {
    AnalyticModel.find({}, (err, data) => {
        if(err) {
            return res.json({
                status: 'failed',
                err
            });
        }
        
        return res.json({
            status: 'success',
            data
        })
    });
});

router.post('/', (req, res) => {
    let stat = new AnalyticModel({
        url: req.body.pageUrl,
        timeSpentOnThePage: req.body.timeSpentOnThePage
    });

    stat.save((err) => {
        if(err) {
            return res.json({
                status: 'failed',
                err
            });
        }

        return res.json({
            status: 'success',
            message: 'Data Saved Successfully'
        })
    })
});

module.exports = router;