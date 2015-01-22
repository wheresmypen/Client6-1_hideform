$(document).ready(function(){

var inputText = [];
var open="not";
var returnString="";

$("#help").hide();

var collectProfile = function(){

    $('.fields').each(function(){
		inputText.push($(this).val())
	});

    returnString = "Please meet {0}".supplant(inputText);
	personalInfo = "This is a little information about {0}<br>{1}<br>{0} reads {2}<br>But, when working with jQuery, {0} reads {3}.".supplant(inputText);
    $("#help1").append(returnString);
	$("#help2").append(personalInfo);
    $('.fields').each(function(){
        console.log($(this).val());
        if($(this).val()){
            console.log($(this).val());
            $("#help").show();
        }
    });

	return false;

};

var showForm = function(){
	if (open){
		$(".input").show();
		$("#shower").text("Click to hide form");
		open="";
	}
	else {
		$("#shower").text("Click to show form");
		$(".input").hide();
		open="not";
	}

};




$("#shower").on("click",showForm);
$("#harmful").on("submit",collectProfile);





});