angularApp.controller('CharacterCtrl', [
  '$routeParams',
  '$scope',
  'SwapiService',
  function($routeParams, $scope, SwapiService){
 
    $scope.character = {};
    $scope.loading = true;
    $scope.id = $routeParams.id;

    SwapiService.person($scope.id)
      .then(function(result) {
        angular.copy(result.data, $scope.character);
        $scope.loading = false;
      });
  }
]);

