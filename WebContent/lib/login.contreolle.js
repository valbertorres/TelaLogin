app.controller("login", function($scope, $http) {

	$scope.login = {
		usuario : "",
		senha : ""
	};
	
	$scope.fazeLogin = function(login) {
		if (login.usuario == 'valber' && login.senha == '123') {
			window.location ="tela.html"
		} else {
			alert("não entrou no login");
			$scope.login = {
				usuario : "",
				senha : ""
			};
		}

	};
});
