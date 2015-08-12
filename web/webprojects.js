//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
var app = angular.module('portfolio', []);

app.directive('webproj', function(){
    return {
        restrict: 'E',
        templateUrl: 'vid-proj.html',
        controller: function() {
            this.projects = [
                {
                    class : 'youtube',
                    src : 'https://www.youtube.com/embed/R1wM3lmLufI',
                    title: 'The Kord Lord',
                    description: '30 Second Spot',
                    camera: 'Sony a6000',
                    pub_date: new Date('November, 2014'),
                    role: 'All Roles'
                },
                {
                    class : 'youtube',
                    src : 'https://www.youtube.com/embed/gfRkMKyC4R0',
                    title: 'Songs from the Wood',
                    description: 'Short Narrative: $0 Budget',
                    camera: 'Panasonic AG-HMC150',
                    pub_date: new Date('October 2009'),
                    role: 'Codirector/Coproducer'
                },
                {
                    class : 'vimeo',
                    src : 'https://player.vimeo.com/video/49177543?title=0&byline=0&portrait=0',
                    title: 'The Antagonist',
                    description: 'Short Narrative: $5,000 Budget',
                    camera: 'Red One',
                    pub_date: new Date('August 2009'),
                    role: 'Codirector/Coproducer'
                },
                {
                    class : 'vimeo',
                    src : 'https://player.vimeo.com/video/128838712',
                    title: 'Ashley & Sae',
                    description: 'Wedding Highlight Reel',
                    camera: 'Sony SF7',
                    pub_date: new Date('June 2015'),
                    role: 'Editor'
                },
                {
                    class : 'youtube',
                    src : 'https://www.youtube.com/embed/Fk20VdL-LYI',
                    title: 'Paul Cardall: Teagan\'s Story',
                    description: '3 Minute Viral Video',
                    camera: 'Sony SF7, Sony a72',
                    pub_date: new Date('December 2014'),
                    role: '2nd Camera, Editor'
                }
            ];

        },
        controllerAs: "web"
    };
});

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