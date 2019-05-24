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
    templateUrl : "templates/game.html"
  });
  var welcome;

}); 

app.controller('scoreCtrl', function($scope, $http) {
 	$http.get("../data/scores.json")
 	.then(function(response) {
 		$scope.scores = response.data;
 	})
});

app.controller('gameCtrl', function($scope, $http) {
	
 	$scope.getQ = function(num) {
		$http.get("../data/riddles.json")
		.then(function(response) {
		$scope.question = response.data[num].question;
		})
		$scope.game = true;
		$scope.qnumber = num;
		$scope.nextnum = num++;
		}
 });