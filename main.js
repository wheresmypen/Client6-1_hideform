$(document).ready(function(){

var inputText = [];
var open="not";
var returnString=""

var collectProfile = function(){

    $('.fields').each(function(){
		inputText.push($(this).val())
	});

    returnString = "Please meet {0}".supplant(inputText);
    console.log(returnString);
	// $("#help1").append(inputText[0]);
	// $("#help2").append(inputText[1]);
	// $("#help3").append(inputText[2]);
	// $("#help4").append(inputText[3]);
	personalInfo = "This is a little information about {0}<br>{1}<br>{0} reads {2}<br>But, when working with jQuery, {0} reads {3}.".supplant(inputText);
	$("#help1").append(returnString);
	$("#help2").append(personalInfo);

	return false;

};

var showForm = function(){
	if (open){
		$(".input").show();
		$("#shower").text("Hide");
		open="";
	}
	else {
		$("#shower").text("Show");
		$(".input").hide();
		open="not";
	}

};




$("#shower").on("click",showForm);
$("#harmful").on("submit",collectProfile);





});