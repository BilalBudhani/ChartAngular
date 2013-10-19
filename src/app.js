angular.module('ChartAngular', []).
  controller('MyCtrl', function($scope){

  $scope.chart_data = [55, 20, 13, 32, 5, 1, 2, 10];
}).
  directive('pie', function(){

  return {
    restrict: 'E',
    scope: {
      source: '='
    },
    replace: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      var pie = Raphael(attrs.id);
      pie.text(320, 70, attrs.title).attr({font: "20px sans-serif"});
      pie.piechart(320, 240, 150, scope.source);
    }
  };
});
