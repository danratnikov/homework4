var app = angular.module('app', []);

app.controller('ContactController', function($scope) {
	$scope.tile = false;
	$scope.contacts = [{
		"index": 0,
		"firstname": "Nieves",
		"secondname": "Phelps",
		"email": "nievesphelps@hometown.com",
		"phone": "+7 (837) 522-3755"
	}, {
		"index": 1,
		"firstname": "Beulah",
		"secondname": "Ball",
		"email": "beulahball@hometown.com",
		"phone": "+7 (807) 492-2973"
	}, {
		"index": 2,
		"firstname": "Paul",
		"secondname": "Parker",
		"email": "paulparker@hometown.com",
		"phone": "+7 (881) 494-2439"
	}, {
		"index": 3,
		"firstname": "Coleen",
		"secondname": "Jacobson",
		"email": "coleenjacobson@hometown.com",
		"phone": "+7 (919) 545-2388"
	}, {
		"index": 4,
		"firstname": "Frye",
		"secondname": "Hudson",
		"email": "fryehudson@hometown.com",
		"phone": "+7 (965) 447-3883"
	}, {
		"index": 5,
		"firstname": "Trudy",
		"secondname": "Santos",
		"email": "trudysantos@hometown.com",
		"phone": "+7 (818) 581-3300"
	}, {
		"index": 6,
		"firstname": "Tara",
		"secondname": "Stone",
		"email": "tarastone@hometown.com",
		"phone": "+7 (961) 560-2796"
	}, {
		"index": 7,
		"firstname": "Bullock",
		"secondname": "Price",
		"email": "bullockprice@hometown.com",
		"phone": "+7 (998) 556-2618"
	}]
});