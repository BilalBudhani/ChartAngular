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

  $scope.chart_options = {
    title: {
      x: 160,
      y: 10,
      options: {
        font: "12px sans-serif"
      }
    },
    chart: {
      x: 10,
      y: 10,
      width: 300,
      height: 220,
      source: [[55, 20, 13, 32, 5, 1, 2, 10]],
      options: {}
    }
  };

  $scope.addVal = function addVal() {
    $scope.chart_options.chart.source[0].push(Math.floor(Math.random() * 100));
  };

  $scope.addTimedVal = function addTimedVal() {
    $timeout(function() {
      $scope.chart_options.chart.source[0].push(Math.floor(Math.random() * 100));
    }, 1000);
  };
});