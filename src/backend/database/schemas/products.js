var mongoose = require("mongoose");

var productsSchema = new mongoose.Schema({
    name : String,
    imageUrl : String,
    description : String,
    price : Number,
    category : String,
    countInStock : Number,
    rating : Number,
});

module.exports = new mongoose.model('products', productsSchema);