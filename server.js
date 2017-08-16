var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")

var htmlRoute = require(path.join(__dirname, "app/routing", "htmlroutes.js"))
var apiRoute = require(path.join(__dirname, "app/routing", "apiroutes.js"))

var PORT = process.env.PORT || 8080
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application.vnd.api+json"}));
app.use(express.static("app/public"));

apiRoute(app)
htmlRoute(app)

app.listen(PORT, ()=>{console.log("Server listening on port: " + PORT)});