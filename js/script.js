"use strict";

let app = angular.module("blogApp", []);
app.controller("bagCtrl", function($scope, $http){
    $http.get("../data/bagofholding.json")
        .then( res => {
            $scope.items = res.data.items;
        });
});

app.controller("statsCtrl", function($scope, $http){
    $http.get("../data/gamestats.json")
        .then( res => {
            $scope.stats = res.data.stats;
        })
})