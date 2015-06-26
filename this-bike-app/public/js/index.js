var thisBikeApp = angular.module("thisBike", []);

	thisBikeApp.controller("thisBikeCtrl", ['$scope', function ($scope) {
		console.log('dupa')
  		$scope.test = 'Hola!';
	}]);


