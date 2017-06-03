
//Application Variables
var express = require('express');
var app = express();
var path = require('path');

//Serve the HTML folder
app.use(express.static(__dirname + '/views'));

//Serve the CSS and Img Folder
app.use(express.static(__dirname + '/static'));

//Render index.html as root route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html')); 
}); 

//Set Listening Port
app.listen(process.env.PORT || 1337); 

console.log("Web App [John A. Hopper] live at Port 1337"); 




