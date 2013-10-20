angular.module('MyApp', ['ChartAngular']).
  controller('MyCtrl', function($scope, $timeout){

  $scope.chart_data = [55, 20, 13, 32, 5];
  $scope.chart_options = {
    title: {
      font: "20px sans-serif"
    },
    chart: {
    }
  };
  $scope.addVal = function addVal() {
    $scope.chart_data.push(Math.floor(Math.random() * 100));
  };

  $scope.addTimedVal = function addTimedVal() {
    $timeout(function() {
      $scope.chart_data.push(Math.floor(Math.random() * 100));
    }, 2000);
  };

});
