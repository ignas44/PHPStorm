let app = angular.module('manoApsas', ["ngRoute"]);

app.controller('menuController', function ($http) {
    let vm = this;
    $http.get("/meniu.json").then(function (response) {
        vm.meniu = response.data;
    })
});


+app.config(function($routeProvider,$locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "/inc/pradzia.html"
            })
           .when("/apie", {
                    templateUrl : "/inc/apie.html"
           })
           .when("/Katalogas", {
                    templateUrl : "/inc/Katalogas.html"
           });
    $locationProvider.html5Mode(true);
});