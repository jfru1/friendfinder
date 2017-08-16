$(document).ready(()=>{
	//backbone of the page, this logic collects the entered data
	var surverySub = document.getElementById("surveySub");
	surveySub.addEventListener("click", (e)=>{
		e.preventDefault();
		var currenturl = window.location.origin;
		var friendObj = validateForm();
		if (friendObj) submitNewFriend(friendObj);
		//this function creates a few variables and submits a new model
		function subNewFriend(obj){
			$.post(currenturl + "/api/friend", obj, (data)=>{
				var matchedName = data.name;
				var matchedPhoto = data.photo;
				var matchDiff = data.totalDiff;

				//console.log(matchedName)
				//console.log(matchedPhoto)
				//console.log(matchDiff)

				$("matchedName").html(matchedName);
				$("matchedPhoto").attr("src", matchedPhoto);
				$("matchDiff").text(`You are` + matchDiff `points separated from` + matchedName + `!`)
				$('#resultsMod').modal({show:true});
				$(".Range").val("1");
				$(".Input").val("");
			})
		}
		//this one collects all the entered results and makes sure no fields are empty
		function validateForm(){
			var surveyArr = [];
			var surveyScore = $(".sRange");
			for (var j = 0; j < surveyScore.length; j++){
				surveyArr.push(parseInt(surveyScore[i].options[surveyScore[i].selectedIndex].value))
			}
			var name = $("#Name").val().trim();
			var photo = $("#Photo").val().trim();
			if (name == "" && photo == ""){
				alert("The fields must not be empty!")
				return false;
			} else{
				var nuFriend = {
					name: name,
					photo: photo,
					scores: surveyArr,
				}
				return nuFriend;
			}
		}
	})
})