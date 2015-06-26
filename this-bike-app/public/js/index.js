var thisBikeApp = angular.module("thisBike", ['ui.bootstrap']);

	thisBikeApp.controller("thisBikeCtrl", ['$scope', function ($scope, $state, $http) {
		console.log('dupa')
  		$scope.test = 'Hola!';

		$scope.user = [{
			"login": "loginTest1",
			"avatar":"avatar.jpg",
			"bike": {
			"photos": [
				"img1.jpg",
				"img2.jpg",
				"img3.jpg"
			],
				"desc" : "Awesome bike bike bike bikebike",
				"name" : "Mr-White"
		},
			"options" : {
			"email":"testEmail@gmail.com",
				"city":"Lodz"
		}
		}];

	}]);




