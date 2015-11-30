var model = {
	user: 'Use',
	courses: [{
		name: 'A',
		pass: true
	}, {
		name: 'B',
		pass: false
	}, {
		name: 'C',
		pass: true
	}, {
		name: 'D',
		pass: false
	}]
};

var app = angular.module('HelloApp', []);

app.controller('HelloCtrl', function($scope, $interval) {
	$scope.list = model;

	$scope.handler = function() {
		$scope.list.courses.push({
			name: $scope.text,
			pass: true
		});
	};

});