const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;  //should this be 3001?  Why?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactnews");
//what is the second half of this or?  Did I do this right?

app.listen(PORT, function () {
    console.log(`API server now listening on PORT ${PORT}!`);
})