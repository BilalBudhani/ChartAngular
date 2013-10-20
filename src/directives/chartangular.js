angular.module('ChartAngular', []).
  directive('piechart', function(){
  
  var chart, source;
  var default_options = {
      title: {
        font: "20px sans-serif"
      },
      chart: {}
  };

  function removeChart(chart) {
    chart.clear();
    chart.remove();
  }

  function createChart(scope, attrs) {
    if (angular.isUndefined(scope.options)) {
      scope.options = default_options;
    }

    var r = Raphael(attrs.id);
    source = angular.copy(scope.source); // Prevents from getting changed by raphael
    if (attrs.title) {
      r.text(320, 70, attrs.title).attr(scope.options.title);
    }
    r.piechart(
      parseInt(attrs.width), 
      parseInt(attrs.height), 
      parseInt(attrs.radius), 
      source, 
      scope.options.chart);
    
    return r;
  }

  return {
    restrict: 'E',
    scope: {
      source: '=',
      options: '='
    },
    replace: true,
    template: '<div></div>',
    link: function link(scope, element, attrs) {
      var chart = createChart(scope, attrs);

      scope.$watch('source', function(new_source, old_source) {
        if (new_source === old_source) return ; // do nothing when the source is same
        removeChart(chart);
        createChart(scope, attrs);
      }, true);

    }
  };
});