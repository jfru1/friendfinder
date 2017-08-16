var path = require("path")

module.exports = function(app){
	//move you to the survey
	app.get("/survey", (req, res)=>{
		res.sendFile(path.join(__dirname, "../public/survey.html"))
	});
	//default to home if no path
	app.use((req, res)=>{
		res.sendFile(path.join(__dirname, "..public/home.html"))
	});
}