var app = angular.module('app', ['ngRoute', 'firebase']);

app.controller('ContactController', ['$scope', '$firebase', function($scope, $firebase) {
	var ref = new Firebase("https://glowing-fire-3534.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.contacts = sync.$asArray();

	$scope.tile = false;
	$scope.page = 'contacts';
	$scope.obj = {};
	$scope.save = false;
	$scope.mode = '';

	$scope.setPage = function(p, index) {
		if (p === 'create') {
			$scope.mode = 'create';
			$scope.obj = {};
			$scope.page = 'info';
		} else {
			$scope.mode = 'update';
			$scope.obj = $scope.contacts[index];
			$scope.page = p;
		}
	};


	$scope.createContact = function() {
		$scope.contacts.$add($scope.obj);
		console.log('add');
	};

	$scope.updateContact = function(contact) {
		if ($scope.mode === 'create') {
			$scope.createContact();
		} else {
			$scope.contacts.$save($scope.obj);
		}
	};

	$scope.deleteContact = function(contact) {
		$scope.contacts.$remove(contact);
		$scope.setPage('contacts');
	};

}]);