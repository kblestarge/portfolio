//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
var main = function() {

	$('.kbtn, #home h1').click(function() {
            $('#home h1').toggleClass("appear slide");
            $('#home .main-btn').toggleClass("appear");

            $('#proj-menu').removeClass("appear fade");
            $('#soc-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
            $('#socialM').removeClass("main-btnPressed");

            $(".kbtn").toggleClass("kbtnPressed");
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

};

$(document).ready(main);