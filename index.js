var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');

var multer = multer();
app = express();
/*

app.get("/", function(req, res){
    res.send("Home Page");
})

app.post("/about", function(req, res){
    res.send("About Page");
})

app.put("/contact", function(req, res){
    res.send("Contact Page");
})

app.post("/terms", function(req, res){
    res.send("Terms Page");
})
*/

/*
app.get("/four", function(req, res){

    let MyJSONArray = [
        {
            name: "Aurin",
            city: "Dhaka",
            occupation: "Engr."
        },
        {
            name: "Samia",
            city: "Dhaka",
            occupation: "Chef"
        },
    ]

    res.json(MyJSONArray);
})    
*/

app.use(multer.array());
app.use(express.static('public'));


app.post('/', function(req, res){
    let ReqBody = req.body;
    res.send(JSON.stringify(ReqBody));
});

app.listen(8000, function() {
    console.log("Server Run Success");
}) 