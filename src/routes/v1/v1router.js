const express = require('express');
const tokenRouter = require('./tokenrouter');
const  v1Router = express.Router();

v1Router.use('/token',tokenRouter);

module.exports=v1Router;