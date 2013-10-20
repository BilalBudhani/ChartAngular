angular.module('MyChartApp', ['ChartAngular']).
  controller('PieChartCtrl', function($scope, $timeout){

  $scope.chart_data = [55, 20, 13, 32, 5];
  $scope.chart_options = {
    title: {
      font: "26px verdana",
      x: 320,
      y: 70
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

}).
controller('BarChartCtrl', function($scope, $timeout) {

  $scope.chart_data = [[55, 20, 13, 32, 5, 1, 2, 10]];
  $scope.chart_options = {
    title: {
      font: "12px sans-serif",
      x: 160,
      y: 10
    },
    chart: {
    }
  };
  $scope.addVal = function addVal() {
    $scope.chart_data[0].push(Math.floor(Math.random() * 100));
  };

  $scope.addTimedVal = function addTimedVal() {
    $timeout(function() {
      $scope.chart_data[0].push(Math.floor(Math.random() * 100));
    }, 2000);
  };
});