module.exports = function ($scope, $http) {

    $scope.produtos = [];
    $scope.produto = {};


    $http.get("http://localhost:3000/api/feed")
        .then(function (response) {
            $scope.produtos = response.data;
        }, function (error) {
            console.log(error);
        });


}