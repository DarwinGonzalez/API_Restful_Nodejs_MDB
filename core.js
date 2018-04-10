angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newItem = {};
	$scope.items = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/item').success(function(data) {
		$scope.items = data;

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectItem = function(item) {
		$scope.newItem = item;
		$scope.selected = true;
		console.log($scope.newItem, $scope.selected);
	};
}