let express = require('express');
let router = express.Router();
let mysql = require('mysql');

let config = require('../config/db');
let $sql = require('./personSql');

//连接池
let pool = mysql.createPool( config.mysql );

module.exports = {
  query: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      let param = req.query || req.params;

      connection.query($sql.query, [param.id], function(err, result) {
        if(err) {
          res.send(err);
        }else{
          res.send(result);
        }

        // 释放连接
        connection.release();
      });
    });
  }
};