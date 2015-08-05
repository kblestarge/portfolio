//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
var main = function() {

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

    $('#chf').hover(function() {
            $('#chf span').text('');},
            function() {
            $('#chf span').text('CHF');
    });
};

$(document).ready(main);