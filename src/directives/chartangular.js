angular.module('ChartAngular', []).
  directive('pie', function(){

  return {
    restrict: 'E',
    scope: {
      source: '=',
      options: '='
    },
    replace: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      var r, source;

      scope.$watch('source', function(new_source) {
        source = angular.copy(scope.source);
        removeChart();
        createChart();
      }, true);

      function createChart() {
        r = Raphael(attrs.id);
        if (attrs.title) {
          r.text(320, 70, attrs.title).attr(scope.options.title);
        }
        r.piechart(parseInt(attrs.width), parseInt(attrs.height), parseInt(attrs.radius), source, scope.options.chart);
      }

      function removeChart() {
        if (typeof r !== 'undefined') {
          r.clear();
          r.remove();
        }
      }
    }
  };
});
