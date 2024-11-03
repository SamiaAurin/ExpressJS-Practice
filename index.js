var express = require('express');
var multer = require('multer');
var path = require('path');

var app = express();

// Set up multer storage
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './uploads');  // Ensure 'uploads' folder exists
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname)); // Add unique timestamp to filename
    }
});

var upload = multer({ storage: storage }).single('myfile');

app.post('/', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File Uploaded Successfully!");
    });
});

// Ensure the server is running
app.listen(8000, function() {
    console.log("Server Run Success on port 8000");
});
