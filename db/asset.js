const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.createConnection('mongodb://localhost:27017/projects',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const asset = new Schema({
id:String,
name:String});

module.exports = mongoose.model('Asset', asset);