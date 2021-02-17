const express = require("express");
const app = express();
const mongoose = require("./database/mongoConnection")
const users = require("../backend/database/schemas/users");



// just for testing
app.use("/users", async(req, res) => {
    let result = await users.find();
    res.send(`Hello E mart , ${result[0].username}`);
})


app.listen(8090, ()=> {
    console.log("listening to port 8090");
})