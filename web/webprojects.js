//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
var app = angular.module('portfolio', []);

app.directive('webproj', function(){
    return {
        restrict: 'E',
        templateUrl: 'web-proj.html',
        controller: function() {

            var self = this;

            self.projects = [
                {
                    href : 'worldtechacademystudents.com/klestarge/fizzbuzz/',
                    id : 'fizzbuzz',
                    title: 'FizzBuzz'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/madlib/',
                    id : 'madlib',
                    title: 'Madlib'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/tictactoe/',
                    id : 'tictactoe',
                    title: 'TicTacToe'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/calculator/',
                    id : 'calculator',
                    title: 'Calculator'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/photogallery/',
                    id : 'photogallery',
                    title: 'PhotoGallery'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/hybridvsnormalcar/',
                    id : 'hybrid',
                    title: 'CarFighter'
                },
                {
                    href : 'http://worldtechacademystudents.com/klestarge/snake/',
                    id : 'snake',
                    title: 'Snake'
                }
            ];

        },
        controllerAs: "web"
    };
});