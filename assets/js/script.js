// var app = angular.module('application', ["ngRoute"]);
// app.controller('riddleCtrl', function($scope, $http) {
//   // $http.get("../data/riddles.json")
//   // .then(function(response) {
//   //   $scope.allData = response.data;
//   // });
// 	app.config(function($routeProvider) {
// 	  $routeProvider
// 	  .when("/", {
// 	    templateUrl : "test.html"
// 	  });
// });

var app = angular.module("application", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/welcome.html"
  });

}); 
app.controller('scoreCtrl', function($scope, $http) {
 	$http.get("../data/scores.json")
 	.then(function(response) {
 		$scope.scores = response.data;
 	})
 });