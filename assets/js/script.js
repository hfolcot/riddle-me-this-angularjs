var app = angular.module("application", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "templates/game.html"
  });

}); 

// app.controller('hiScoreCtrl', function($scope, $http) {
//  	$http.get("../data/scores.json")
//  	.then(function(response) {
//  		$scope.scores = response.data;
//  	})
// });

app.controller('gameCtrl', function($scope, $http) {
	$scope.uscore = 0;
 	$scope.getQ = function(num, skip, restart) {
		$scope.game = true;
		if(restart) {
			$scope.uscore = 0;
			$scope.finish = false;
			$scope.qnumber = 1;
		}
 		if (!skip) {
 			if ($scope.uanswer.toLowerCase() == $scope.answer) {
			$scope.correct = true;
			$scope.uscore++;
			}
			else {
				$scope.correct = false;
			}
 		}
		$scope.qnumber = num;
		if (num < 21) {
			$http.get("../data/riddles.json")
			.then(function(response) {
			$scope.question = response.data[num].question;
			$scope.answer = response.data[num].answer;
			})
			$scope.nextnum = num + 1;
		}
		else {
			$scope.game = false;
			$scope.finish = true;
			}
		$scope.uanswer = "";
		}

	
	$scope.reset = function() {
		$scope.uscore = 0;
		$scope.game = false;
		$scope.finish = false;
		$scope.uname = "";
	}
 });