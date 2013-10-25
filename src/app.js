angular.module('MyChartApp', ['ChartAngular']).
  controller('PieChartCtrl', function($scope, $timeout){

  $scope.chart_options = {
    title: {
      x: 320,
      y: 70,
      options: {
        font: "26px verdana"
      }
    },
    chart: {
      width: 320,
      height: 240,
      radius: 150,
      source: [55, 20, 13, 32, 5],
      options: {}
    }
  };
  $scope.addVal = function addVal() {
    $scope.chart_options.chart.source.push(Math.floor(Math.random() * 100));
  };

  $scope.addTimedVal = function addTimedVal() {
    $timeout(function() {
      $scope.chart_options.chart.source.push(Math.floor(Math.random() * 100));
    }, 1000);
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