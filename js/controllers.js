///////////////////////////////////////////////////
//////////////App Directives //////////////////////
	

	
///////////////////////////////////////////////////
//////////////App Controllerers //////////////////////	
	
	//////////////////////////////////////////////////////  
	//////////////App Controller (called on every page)////	
	
	function appController() {
	
	
	 
	}
	
	///////////////////////////////////////////////////
	//////////////Main Controller /////////////////////
	
	
	App.controller('mainController', function($scope, $http, $routeParams) {
		
	
	});
	
	  
 	///////////////////////////////////////////////////
	//////////////Address Controller /////////////////////
	
	
	App.controller('firstController', function($scope, $http, $routeParams) {
			
        $http.get('').
        success(function(data, status, headers, config) {
            console.log("success");
            $scope.data = data;
        }).
        error(function(data, status, headers, config) {
            console.log("error");
        });

	 
	}); 
  