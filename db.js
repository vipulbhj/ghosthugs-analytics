const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoPath = process.env.MONGODB_URI || 'mongodb://localhost:27017/ghosthugs';
mongoose.connect(mongoPath, {useNewUrlParser: true});