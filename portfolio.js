//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
var main = function() {

    if(localStorage.getItem("visited")){
        // $('.kbtn').click();
        $('body').css('background-color', '#D8CAA8');
        $('#home h1').addClass("appear slide");
        $('#home .main-btn').addClass("appear");

        $(".kbtn").addClass("kbtnPressed");
        $('body').removeClass('body-clickable');
    }

	$('.body-clickable').click(function() {
            $('body').css('background-color', '#D8CAA8');
            $('#home h1').addClass("appear slide");
            $('#home .main-btn').addClass("appear");

            $(".kbtn").addClass("kbtnPressed");
            $('body').removeClass('body-clickable');

            if (typeof(Storage) != "undefined") {
                // Store saved state
                localStorage.setItem("visited", 1);
            }
    });

	$('#home #socialM').click(function() {
            $('#soc-menu').toggleClass("appear fade");
            $(this).toggleClass("main-btnPressed");
            $('#proj-menu').removeClass("appear fade");
            $('#projects').removeClass("main-btnPressed");
    });

};

$(document).ready(main);