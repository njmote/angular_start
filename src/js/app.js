// app.js

	// create the module and name it staysocialApp
        // also include ngRoute for all our routing needs
	var App = angular.module('App', ['ngRoute']); 

	//Work around needed for Angular 1.3 
 	App.config(['$controllerProvider', function($controllerProvider) {
		$controllerProvider.allowGlobals();
	}]); 

	App.config(function($routeProvider) {
		$routeProvider

			// route for the   
			.when('/', {
				templateUrl : 'pages/main.html',
				controller  : 'mainController' 
			})
			
			// first page 
			.when('/first', { 
				templateUrl : 'pages/first.html',
				controller  : 'firstController'
			})  
			.otherwise({
				redirectTo: '/'
			}); 
	});

     