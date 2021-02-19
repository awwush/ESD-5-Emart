const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("./database/mongoConnection")

var ayurveda = require("./routing/ayurveda");
var image = require("./routing/imagetest");
var products = require("./routing/products");

app.use(express.urlencoded({ extended : true}));
app.use(express.json());    
app.use(cors());



app.use("/ayurveda", ayurveda);
app.use("/image", image);
app.use("/products", products);


// just for testing
app.use("/", async(req, res) => {
    // let result = await users.find();
    res.send(`<h1>Hello E mart</h1>`);
})



app.listen(8090, ()=> {
    console.log("listening to port 8090");
})