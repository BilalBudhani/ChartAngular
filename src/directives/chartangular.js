angular.module('ChartAngular', []).
  directive('barchart', function(){
  function createChart(el_id, options) {
    options.element = el_id;
    var r = new Morris.Bar(options);    
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
      return createChart(attrs.id, scope.options);
    }
  };
});