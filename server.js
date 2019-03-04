const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
require('./db');


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

  

const PORT = process.env.PORT || 3000;

const analyticRouter = require('./router/analytic');
app.use('/api/analytic', analyticRouter);

app.listen(PORT, () => console.log('Server running on port ' + PORT));