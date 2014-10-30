var app = angular.module('lawyerErr');

app.service('myService', function ($http){

	this.getLawyers = function(){
			return $http({
				method: 'GET',
				url: 'http://localhost:3001/lawyers'
			});
		}
});
