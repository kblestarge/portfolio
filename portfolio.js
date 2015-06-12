
var main = function() {

	console.log("Hello world");

	$('.kbtn').click(function() {
            $('#home h1').toggleClass("appear slide");
            $('#home .main-btn').toggleClass("appear");

            $('#proj-menu').removeClass("appear fade");
            $('#soc-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
            $('#socialM').removeClass("main-btnPressed");

            $(this).toggleClass("kbtnPressed");
    });

	$('#home #projects').click(function() {
            $('#proj-menu').toggleClass("appear fade");
            $(this).toggleClass("main-btnPressed");
            $('#soc-menu').removeClass("appear fade");
            $('#socialM').removeClass("main-btnPressed");
    });

	$('#home #socialM').click(function() {
            $('#soc-menu').toggleClass("appear fade");
            $(this).toggleClass("main-btnPressed");
            $('#proj-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
    });


	//Web Projects
    $('#madlib').hover(function() {
    		$('#madlib span').text('');},
    		function() {
    		$('#madlib span').text('Mad Lib');
	});

    $('#fizzbuzz').hover(function() {
    		$('#fizzbuzz span').text('');},
    		function() {
    		$('#fizzbuzz span').text('Fizzbuzz');
	});
}

$(document).ready(main);