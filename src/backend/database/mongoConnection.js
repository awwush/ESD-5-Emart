// const mongoose = require("mongoose");
// var connectionUrl = " mongodb://127.0.0.1:27017/emart";

// mongoose.connect(connectionUrl, {useNewUrlParser : true, useUnifiedTopology : true})
// .then(() => console.log("connected to database successfully"))
// .catch((error) => console.log(error))


// online mongodb connection

const mongoose = require("mongoose");
var connectionUrl = " mongodb+srv://admin:1234@cluster0.topdd.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => console.log("connected to database successfully"))
.catch((error) => console.log(error))
