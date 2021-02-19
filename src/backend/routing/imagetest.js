// won't working with current db connection


var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('../database/mongoConnection')
var imagetest = require("../database/schemas/imagetest");
 
var fs = require('fs');
var path = require('path');
var dotenv = require('dotenv/config');

router.route("/")
.post(async (req, res) => {
    image1 = new imagetest(req.body);
    console.log(req.body);
    let result = await image1.save();
    res.send(result);
    // res.send("post image..");
})


module.exports = router;