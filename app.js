var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", function($scope, $http) {
    
    $scope.srchBtn = function(str) {

        $scope.one = $scope.first

        var splitString = $scope.last.split("");

        var reverseArray = splitString.reverse();

        var joinArray = reverseArray.join("");
        
        $scope.two = joinArray;
        }

        var config = {
            headers: {
                "X-Mashape-Key": "Gq3Up8Hmowmshu55qD7CLd7QqLqnp160IFGjsniZI4B3nen4NE"
            }
        };

        $scope.findWord = function (input) {

            $http.get("https://twinword-word-graph-dictionary.p.mashape.com/definition/?entry=" + input + "&example", config ).then(function (response) {

                $scope.results = response.data;
                console.log(response.data);
                var info = response.data;
                $scope.output = info;
            })
            
            $http.get("https://twinword-word-graph-dictionary.p.mashape.com/example/?entry=" + input + "&example", config ).then(function (response) {
    
                console.log(response.data);
                var infoEx = response.data;
                $scope.examp = infoEx;
            })
        };
       
    }]);
