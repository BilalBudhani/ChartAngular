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
    chart.remove();
  }

  function createChart(scope, attrs) {
    if (angular.isUndefined(scope.options)) {
      scope.options = default_options;
    }

    var chart_opts = scope.options.chart;
    var title_opts = scope.options.title;
    var r = Raphael(attrs.id);

    source = angular.copy(chart_opts.source); // Prevents from getting changed by raphael
    r.text(title_opts.x, title_opts.y, attrs.title).attr(title_opts.options);

    r.piechart(
      parseInt(chart_opts.width), 
      parseInt(chart_opts.height), 
      parseInt(chart_opts.radius), 
      source, 
      chart_opts.options);
    
    return r;
  }

  return {
    restrict: 'E',
    scope: {
      options: '='
    },
    replace: true,
    template: '<div></div>',
    link: function link(scope, element, attrs) {
      var chart = createChart(scope, attrs);

      scope.$watch('options.chart.source', function(new_source, old_source) {
        if (new_source === old_source) return ; // do nothing when the source is same
        removeChart(chart);
        createChart(scope, attrs);
      }, true);

    }
  };
}).
directive('barchart', function($log, $window){
  var chart, source;
  var default_options = {
      title: {
        font: "20px sans-serif"
      },
      chart: {}
  };

  function removeChart(chart) {
    chart.remove();
    $window.chart = chart;
  }

  function createChart(scope, attrs) {
    if (angular.isUndefined(scope.options)) {
      scope.options = default_options;
    }

    var chart_opts = scope.options.chart;
    var title_opts = scope.options.title;
    var r = Raphael(attrs.id);

    source = angular.copy(chart_opts.source); // Prevents from getting changed by raphael
    r.text(title_opts.x, title_opts.y, attrs.title).attr(title_opts.options);

    r.barchart(
      parseInt(chart_opts.x), 
      parseInt(chart_opts.y), 
      parseInt(chart_opts.width),
      parseInt(chart_opts.height), 
      source, 
      chart_opts.options);
    
    return r;
  }
    return {
    restrict: 'E',
    scope: {
      options: '='
    }, 
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attrs) {
     var chart = createChart(scope, attrs);

      scope.$watch('options.chart.source', function(new_source, old_source) {
        if (new_source === old_source) return ; // do nothing when the source is same
        removeChart(chart);
        createChart(scope, attrs);
      }, true); 
    }
  };
});