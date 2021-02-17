const mongoose = require("mongoose");
var connectionUrl = " mongodb://127.0.0.1:27017/emart";

mongoose.connect(connectionUrl, {useNewUrlParser : true, useUnifiedTopology : true})
.then(() => console.log("connected to database successfully"))
.catch((error) => console.log(error))
