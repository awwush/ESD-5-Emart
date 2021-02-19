var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('../database/mongoConnection')
var products = require("../database/schemas/products");


router.route("/")
.get(async(req, res) => {
    let result = await products.find();
    console.log(result);
    res.send(result);
})

module.exports = router;