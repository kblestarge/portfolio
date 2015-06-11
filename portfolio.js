
var main = function() {

	console.log("Hello world");

	$('#kbtn').click(function() {
            $('#main h1').toggleClass("appear");
            $('#main .main-btn').toggleClass("appear");
            $('#proj-menu').removeClass("appear");
            $('#soc-menu').removeClass("appear");

            $(this).toggleClass("pressed");
    });

	$('#main #projects').click(function() {
            $('#proj-menu').toggleClass("appear");
            $('#soc-menu').removeClass("appear");
    });

	$('#main #socialM').click(function() {
            $('#soc-menu').toggleClass("appear");
            $('#proj-menu').removeClass("appear");
    });

}

$(document).ready(main);