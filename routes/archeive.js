var express = require('express');
const { param } = require('express/lib/request');
var router = express.Router();
var projectdb=require('../db/project')
var departmentdb=require('../db/department')
var assetdb=require('../db/asset')
// Home page route.
router.get('/create/:proj_id',  async function (req, res) {
    let project
    try {
      project = await projectdb.findOne({'id':req.params.proj_id})
      if (project == null) {
        return res.status(404).json({ message: 'Cannot find project' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.json(project)
})

// About page route.
router.post('/replicate/', async function (req, res) {
    response.send(request.body)
})
module.exports=router