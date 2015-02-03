var app = angular.module('app', ['ngRoute']);

app.controller('ContactController', function($scope) {
	$scope.tile = false;
	$scope.page = 'contacts';
	$scope.id = 0;
	$scope.setPage = function(p, contact) {
		$scope.page = p;
		if (contact) {
			$scope.id = contact.index;
		}
	};
	$scope.contacts = [{
			"index": 0,
			"firstname": "",
			"secondname": "",
			"image": "",
			"email": "",
			"phone": ""
		}, {
			"index": 1,
			"firstname": "Henry",
			"secondname": "Vaughan",
			"image": "http://lorempixel.com/200/200/people/1",
			"email": "henryvaughan@nipaz.com",
			"phone": "+7 (979) 553-3392"
		}, {
			"index": 2,
			"firstname": "Valarie",
			"secondname": "Hayes",
			"image": "http://lorempixel.com/200/200/people/2",
			"email": "valariehayes@nipaz.com",
			"phone": "+7 (816) 463-2316"
		}, {
			"index": 3,
			"firstname": "Raymond",
			"secondname": "Bates",
			"image": "http://lorempixel.com/200/200/people/3",
			"email": "raymondbates@nipaz.com",
			"phone": "+7 (850) 534-3416"
		}, {
			"index": 4,
			"firstname": "Gayle",
			"secondname": "Jones",
			"image": "http://lorempixel.com/200/200/people/4",
			"email": "gaylejones@nipaz.com",
			"phone": "+7 (835) 406-3349"
		}, {
			"index": 5,
			"firstname": "Gaines",
			"secondname": "Frank",
			"image": "http://lorempixel.com/200/200/people/5",
			"email": "gainesfrank@nipaz.com",
			"phone": "+7 (971) 527-2145"
		}, {
			"index": 6,
			"firstname": "Mandy",
			"secondname": "Lambert",
			"image": "http://lorempixel.com/200/200/people/6",
			"email": "mandylambert@nipaz.com",
			"phone": "+7 (871) 476-3907"
		}, {
			"index": 7,
			"firstname": "Ida",
			"secondname": "Harper",
			"image": "http://lorempixel.com/200/200/people/7",
			"email": "idaharper@nipaz.com",
			"phone": "+7 (968) 556-2809"
		}, {
			"index": 8,
			"firstname": "Strong",
			"secondname": "Hopkins",
			"image": "http://lorempixel.com/200/200/people/8",
			"email": "stronghopkins@nipaz.com",
			"phone": "+7 (923) 405-3413"
		}],

		addContact = function(id) {
			contacts.push({
				index: contacts,
				firstname: firstname,
				secondname: secondname,
				email: email,
				phone: phone
			});
		}

});