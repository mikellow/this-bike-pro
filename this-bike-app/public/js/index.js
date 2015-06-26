var thisBikeApp = angular.module("thisBike", ['ui.bootstrap']);

	thisBikeApp.controller("thisBikeCtrl", ['$scope', function ($scope) {
		console.log('dupa')
  		$scope.test = 'Hola!';
		$scope.tabs = [
			{ title:'Dynamic Title 1', content:'Dynamic content 1' },
			{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
		];
	}]);


