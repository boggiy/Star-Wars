angularApp.controller('MainCtrl', [ 
  '$scope',
  'SwapiService',
  function($scope, SwapiService){
    $scope.page = 1;
 	refreshPeople = function(){
 		SwapiService.people($scope.page)
      		.then(function(data) {
        		$scope.data = data.data.results;
    		});
 	};
    refreshPeople(); 
      	$scope.previousPage = function() {
      		$scope.page--;
      		refreshPeople(); 
    	};

    	$scope.nextPage = function() {
      		$scope.page++;
      		refreshPeople(); 
    	};

    	$scope.parsePersonId = function(url) {
      		return url.replace(/[^0-9]/g, '');
    	};
  }
]);