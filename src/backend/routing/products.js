var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('../database/mongoConnection')
var products = require("../database/schemas/products");


router.route("/")
.get(async(req, res) => {
    let result = await products.find().limit(5);
    console.log("fetched from products collection.");
    res.send(result);
    res.status(200);
})

module.exports = router;