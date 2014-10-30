var app = angular.module('lawyerErr');

app.controller('myCtrl', function($scope, myService){
	$scope.test = "Lawyer Scoreboard: ";


	$scope.getLawyers = function(){
		myService.getLawyers().then(function(data){
			$scope.lawyers = data.data;
			console.log(data.data);
		});
	}
	$scope.getLawyers();

});