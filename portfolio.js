
var main = function() {

	console.log("Hello world");

	$('#kbtn').click(function() {
            $('#main h1').toggleClass("appear slide");
            $('#main .main-btn').toggleClass("appear");
            $('#proj-menu').removeClass("appear fade");
            $('#soc-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
            $('#socialM').removeClass("main-btnPressed");
            //add http://css3.bradshawenterprises.com/cfimg/
            $(this).toggleClass("kbtnPressed");
    });

	$('#main #projects').click(function() {
            $('#proj-menu').toggleClass("appear fade");
            $(this).toggleClass("main-btnPressed");
            $('#soc-menu').removeClass("appear fade");
            $('#socialM').removeClass("main-btnPressed");
    });

	$('#main #socialM').click(function() {
            $('#soc-menu').toggleClass("appear fade");
            $(this).toggleClass("main-btnPressed");
            $('#proj-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
    });

}

$(document).ready(main);