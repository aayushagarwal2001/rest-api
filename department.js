const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const asset=require('./asset')
mongoose.createConnection('mongodb://localhost:27017/projects',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const department = new Schema({
id:String,
name:String,
asset:[{ type: Schema.Types.ObjectId, ref:'Asset',required:true}]});

module.exports = mongoose.model('Department', department);