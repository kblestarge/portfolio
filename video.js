//I need to figure out how to use HTML5 storage to save the state of a page when the back button is pressed.
// var main = function() {

    var app = angular.module('portfolio', []);

    // app.controller('MainController', function() {
    //     this.world = 'hello world';
    // });
    app.config(function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**',
        'https://player.vimeo.com/video/**'
      ]);
    });
    app.directive('vidproj', function(){
        return {
            restrict: 'E',
            templateUrl: 'vid-proj.html',
            controller: function() {
                this.projects = [
                    {
                        class : 'youtube',
                        src : 'https://www.youtube.com/embed/R1wM3lmLufI'
                    },
                    {
                        class : 'youtube',
                        src : 'https://www.youtube.com/embed/gfRkMKyC4R0'
                    },
                    {
                        class : 'vimeo',
                        src : 'https://player.vimeo.com/video/49177543?title=0&byline=0&portrait=0'
                    },
                    {
                        class : 'vimeo',
                        src : 'https://player.vimeo.com/video/128838712'
                    },
                    {
                        class : 'youtube',
                        src : 'https://www.youtube.com/embed/Fk20VdL-LYI'
                    }
                ];

            },
            controllerAs: "vid"
        };
    });
// };

// $(document).ready(main);