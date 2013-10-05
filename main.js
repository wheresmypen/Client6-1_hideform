$(document).ready(function(){

var inputText = [];
var open="not";

var collectProfile = function(){

    $('.fields').each(function(){
		inputText.push($(this).val())
	});

	$("#help1").append(inputText[0]);
	$("#help2").append(inputText[1]);
	$("#help3").append(inputText[2]);
	$("#help4").append(inputText[3]);
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