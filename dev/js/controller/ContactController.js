var app = angular.module('app', ['firebase', 'blueimp.fileupload']);


app.config(['fileUploadProvider',
	function(fileUploadProvider) {

		fileUploadProvider.defaults.url = 'php/upload.php';
		angular.extend(fileUploadProvider.defaults, {
			disableImageResize: /Android(?!.*Chrome)|Opera/
				.test(window.navigator.userAgent),
			maxFileSize: 5000000,
			acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
		});

	}
]);
$
app.controller('ContactController', ['$scope', '$firebase', '$http', function($scope, $firebase, $http) {

	var ref = new Firebase("https://glowing-fire-3534.firebaseio.com/");
	var sync = $firebase(ref);
	$scope.contacts = sync.$asArray();

	$('#contact-img-input').fileupload({
		url: 'php/upload.php',
		done: function(e, data) {
			$scope.obj.image = 'php/files/' + data.files[0].name;
			$('#contact-img').attr('src', $scope.obj.image).css({'width': '200px', 'height': '200px'});

			$scope.changed = true;
		}
	})


	$('#contact-img-input').bind('fileuploadadd', function(e, data) {

		var file = data.files[0].name;

		data.submit();
	});

	$scope.tile = false;
	$scope.page = 'contacts';
	$scope.obj = {};
	$scope.save = false;
	$scope.mode = '';
	$scope.changed = false;

	$scope.setPage = function(p, contact) {
		if (p === 'create') {
			$scope.mode = 'create';
			$scope.obj = {};
			$scope.page = 'info';
		} else {
			$scope.mode = 'update';
			$scope.obj = contact;
			$scope.page = p;
			$scope.changed = false;
		}
	};

	$scope.createContact = function() {
		$scope.contacts.$add({
			firstname: $scope.obj.firstname,
			secondname: $scope.obj.secondname,
			image: $scope.obj.image || 'http://lorempixel.com/200/200/abstract',
			phone: $scope.obj.phone || 'xxxxxxxxxxxx',
			email: $scope.obj.email || '????????????',
		});
	};

	$scope.updateContact = function(contact) {
		if ($scope.mode === 'create') {
			$scope.createContact();
		} else {
			$scope.contacts.$save($scope.obj);
		}
		$scope.changed = false;
		$scope.setPage('contacts');
	};

	$scope.deleteContact = function(contact) {
		$scope.contacts.$remove(contact);
		$scope.setPage('contacts');
	};

}]);