$(document).ready(function(){

var inputText = [];
var text = document.name

console.log(name);

var jeez = function(){
	console.log("inside")
}

// $("submit").onSubmit,(jeez()
// );

// $("form").submit(function)

var fan = function(){

    $('.fields').each(function(){
		inputText.push($(this).val())
	});

	$("#help1").append(inputText[0]);
	$("#help2").append(inputText[1]);
	$("#help3").append(inputText[2]);
	$("#help4").append(inputText[3]);
	return false;

};


// $('.fields').each(function(){
// 	inputText.push($(this).val())
// 	});



// $(#help).supplant(inputText);




// for (var i=0; i<4; i++){
// 	var a ="#input"+i;
// 	inputText.push(a);
// 	console.log(a);
// }


$("#harmful").on("submit",fan);




});