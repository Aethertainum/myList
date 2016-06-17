(function() {
  'use strict';
    angular
      .module('app',[])
      .controller('appController', ['$scope', '$http', function appController($scope,$http) {
      $scope.test = "Hello World!";

      // Adds Video to db. Come back later and make this call a function that takes the id of the data written to DB,
      // and adds the id to the current logged user's object with the associated user-specified listName
      // For example, a user's object will look like this
      /*{
          List1: {},
          List2: {},
          List3: {}
       }*/
      $scope.addVideoToDb = function() {
        $http({
          method: 'POST',
          url: '/videos',
        }).then(function(res) {
          $scope.testBox = res.data;
        });
        console.log("I was invokved! This is a test");
      };
    }]);
  })();
  {}