const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const asset=require('./department')
mongoose.createConnection('mongodb://localhost:27017/projects',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const project = new Schema({
id:String,
name:String,
asset:[{ type: Schema.Types.ObjectId, ref:'Department',required:true}]});

module.exports = mongoose.model('Project', project);