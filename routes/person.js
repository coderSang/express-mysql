const personDao = require('../dao/personDao');
let express = require('express');
let router = express.Router();

//这里是二级目录
router.get('/uniId', function(req, res, next) {
  personDao.query(req, res, next);
});
module.exports = router
