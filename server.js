var express = require("express");
var mongoose = require("mongoose");
var app = express();

app.use(express.static(__dirname));

var dbUrl = "mongodb+srv://heyrio:<password>@cluster0-7cpbz.mongodb.net/test?retryWrites=true"




app.listen(3000, function(){

console.log("Server is running...");


});
