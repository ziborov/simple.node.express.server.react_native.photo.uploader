const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const multer  = require("multer");
const app = express();
 

app.use(function(request, response, next){
     
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
    console.log(data);
    fs.appendFile("server.log", data + "\n", function(){});
    next();
});

const urlencodedParser = bodyParser.urlencoded({extended: false});
 
app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/html/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){
     
    //response.sendFile(__dirname + "/html/index.html");
    response.sendFile(__dirname + "/html/upload.html");
});
app.get("/about", function(request, response){
     
    response.sendFile(__dirname + "/html/about.html");
});
app.get("/contact", function(request, response){
     
    response.sendFile(__dirname + "/html/contact.html");
});
app.post('/ReceiveJSON', function(req, res){
    console.log("ReceiveJSON:"+req.body);
    res.send("Received");
});
app.get("/upload", function(request, response){
     
    response.sendFile(__dirname + "/html/upload.html");
});

app.use(express.static(__dirname));
app.use(multer({dest:"uploads"}).single("fileData"));
app.post("/upload", function (req, res, next) {
    const fs = require("fs");
   
    let fileData = req.file;
    console.log(fileData);
    if(!fileData)

        res.send("" +
            "<h1>File loading error</h1>"
        );

    else {
        res.send("<h1>File uploaded</h1>");
		
        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile('message.txt', data, (err) => {
            if (err) throw err;
            console.log('The file had been saved!');
        });

    }
});

console.log('Open localhost:3000');
app.listen(3000);

 
