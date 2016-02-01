var app = angular.module('portfolio', []);

app.directive('webproj', function(){
    return {
        restrict: 'E',
        templateUrl: 'web-proj.html',
        controller: function() {

            var self = this;

            self.projects = [
                {
                    href : 'wta/fizzbuzz',
                    title: 'FizzBuzz',
                    src: '../img/fizzbuzz.png',
                    description: 'FizzBuzz game with JavaScript.',
                    purpose: 'Angular.js (first experience)',
                    pub_date: new Date('August, 2015')
                },
                {
                    href : 'wta/madlib',
                    title: 'Madlib',
                    src: '../img/madlib-angular.png',
                    description: 'Madlib generator equipted to take user input values or use the built-in default values.',
                    purpose: 'Angular.js',
                    pub_date: new Date('August, 2015')
                },
                {
                    href : 'wta/tictactoe',
                    title: 'TicTacToe',
                    src: '../img/tictactoe.png',
                    description: 'TicTacToe game using JavaScript.',
                    purpose: 'Vanilla JavaScript',
                    pub_date: new Date('July, 2015')
                },
                {
                    href : 'wta/calculator',
                    title: 'Calculator',
                    src: '../img/calculator.png',
                    description: 'Simple calculator with some style.',
                    purpose: 'Vanilla JavaScript',
                    pub_date: new Date('June, 2015')
                },
                {
                    href : 'wta/photogallery',
                    title: 'Image Gallery',
                    src: '../img/photogallery-firebase.png',
                    description: 'Web application using a Firebase database to store images from the web.',
                    purpose: 'CRUD functionality with Firebase database',
                    pub_date: new Date('December, 2015')
                },
                {
                    href : 'wta/hybridvsnormalcar',
                    title: 'CarFighter',
                    src: '../img/car.png',
                    description: 'Web application that compares a hybrid car with a normal car --Street Fighter themed!',
                    purpose: 'JavaScript with JQuery',
                    pub_date: new Date('July, 2015')
                },
                {
                    href : 'wta/snake',
                    title: 'Snake',
                    src: '../img/snake.png',
                    description: 'Custom built snake game using the canvas tag.',
                    purpose: 'JavaScript and HTML5 canvas tag',
                    pub_date: new Date('August, 2015')
                },
                {
                    href : 'dight250/rpsls/index.html',
                    title: 'RPSLS',
                    src: '../img/rpsls.png',
                    description: 'Rock, Paper, Scissors, Lizard, Spock --The Game!',
                    purpose: 'Responsive design and JavaScript',
                    pub_date: new Date('December, 2015')
                },
                {
                    href : 'dight250/tranomirary/index.html',
                    title: 'Trano Mirary',
                    src: '../img/trano-mirary.png',
                    description: 'Site created for Trano Mirary --a housing company in Madagascar (because their current site is terrible).',
                    purpose: 'Responsive design',
                    pub_date: new Date('December, 2015')
                },
                {
                    href : 'dight250/nostalgia/index.html',
                    title: 'Nostalgia',
                    src: '../img/nostalgia.png',
                    description: 'A site representing a nostalgic memory from my childhood --Pokemon!',
                    purpose: 'Responsive design (first experience)',
                    pub_date: new Date('September, 2015')
                },
                {
                    href : 'dight250/mini-blog/index.html',
                    title: 'Mini Blog',
                    src: '../img/mini-blog.png',
                    description: '"What is Digital Humanities?" the answer may surprise you...',
                    purpose: 'Responsive design and 90\'s themed styling',
                    pub_date: new Date('October, 2015')
                },
                {
                    href : 'dight250/humor/index.html',
                    title: 'Humor',
                    src: '../img/humor.png',
                    description: 'Site to show humor with HTML5 video elements and iframes.',
                    purpose: 'Responsive design and HTML5 video tag',
                    pub_date: new Date('September, 2015')
                },
                {
                    href : 'dight250/food-for-thought/index.html',
                    title: 'Dinosaurs',
                    src: '../img/dinosaur.png',
                    description: 'Educational site about how the dinosaurs became extinct.',
                    purpose: 'Responsive design',
                    pub_date: new Date('October, 2015')
                },
                {
                    href : 'dight250/discovery/index.html',
                    title: 'The Sauna',
                    src: '../img/sauna.png',
                    description: 'Project to show off something I am passionate about --the sauna.',
                    purpose: 'Responsive design',
                    pub_date: new Date('November, 2015')
                },
                {
                    href : 'dight250/color-blocks/index.html',
                    title: 'Color Blocks',
                    src: '../img/color-blocks.png',
                    description: 'Four characters from a movie represented using four colored divs.',
                    purpose: 'Responsive design',
                    pub_date: new Date('November, 2015')
                }
            ];

        },
        controllerAs: "web"
    };
});