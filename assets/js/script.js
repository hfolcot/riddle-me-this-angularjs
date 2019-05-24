var app = angular.module("application", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/game.html"
  });

}); 

app.controller('hiScoreCtrl', function($scope, $http) {
 	$http.get("../data/scores.json")
 	.then(function(response) {
 		$scope.scores = response.data;
 	})
});

app.controller('gameCtrl', function($scope, $http) {
 	$scope.getQ = function(num) {
		$scope.game = true;

		$scope.qnumber = num;
		if (num < 21) {
			$http.get("../data/riddles.json")
			.then(function(response) {
			$scope.question = response.data[num].question;
			})
			$scope.nextnum = num + 1;
		}
		else {
			$scope.game = false;
			$scope.finish = true;
			}
		}
	$scope.reset = function() {
		$scope.game = false;
		$scope.finish = false;
	}
 });