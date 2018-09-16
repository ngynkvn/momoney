const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Hi");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("website started");
});