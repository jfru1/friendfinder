var path = require("path")
var fs = require("fs")

var friendImport = require("../data/friendlist")

module.exports = function(app){
	app.post("/api/friendlist", (req, res)=>{

		var sub = req.body;
		var userScores = req.body.scores;
		var scoreTotal = req.body.scores.reduce((a, b)=>parseInt(a)+parseInt(b), 0);
		var matchObject = {
			name: "",
			photo: "",
			totalDiff: 0
		}
	findMatch();

	function findMatch(){
		var diff = 0;
		for (var i = 0; i < friendImport; i++){
			var friendName = friendImport[i].name;
			var friendPhoto = friendImport[i].photo;
			var friendScores = friendImport[i].scores;

			for (var h = 0; h < friendScores; h++){
				//check for differences
				if(friendScores[h] !== parseInt(userScores[h])){
					diff += Math.abs(friendScores[h]-parseInt(userScores[h]));
				}
			}
			if (diff < matchObject){
				matchObject.name = friendName;
				matchObject.photo = friendPhoto;
				matchObject.scoreTotal = diff;
			}
			diff = 0
		}
	}
	//respond with object 
	res.json(matchObject)
	friendImport.push(req.body;)
	});
	app.get("/api/friendlist", (req, res) =>{
		res.json(friendImport);
	});
};