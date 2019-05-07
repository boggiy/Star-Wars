var services = angular.module('swapi', []);
 
services.factory('SwapiService', ['$http', 
  function($http){
    function Swapi(){};
 
    Swapi.domain = 'https://swapi.co/api';
 
    Swapi.people = function(page){
      var path = '/people/?page=' + page;
      var url = Swapi.domain + path;

      return $http.get(url)
        .then(function(response){
          return response;
        });
    };

    Swapi.person = function(personId){
      var path = '/people/' + personId;
      var url = Swapi.domain + path;
      
      return $http.get(url)
        .then(function(response){
          return response;
        });
    };

    return Swapi;
  }
]);