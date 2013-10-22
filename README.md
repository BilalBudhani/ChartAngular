ChartAngular
============

Charting in AngularJS made easy :)

### Live Previews
Plnkr examples space

### Dependencies 
* Charts are built using [Raphael](http://raphaeljs.com) and [gRaphael](http://g.raphaeljs.com/).
* Add [PieChart](http://github.com/DmitryBaranovskiy/g.raphael/blob/master/min/g.pie-min.js?raw=true) or [BarChart](http://github.com/DmitryBaranovskiy/g.raphael/blob/master/min/g.bar-min.js?raw=true) or both based on what your usage.

### How to use

* Drop the chartangular library in your project's javascripts.
* Add the dependency 
```javascript
angular.module('MyChartApp', ['ChartAngular'])
```

* Options can be provided to charts via controller. 
```javascript
$scope.chart_options = {
    title: {
      font: "26px verdana",
      x: 320,
      y: 70
    },
    chart: {
    }
  };
```

Now, just drop the appropriate html tag in your views and see it in action

Pie Chart:
```html
<piechart title="Pie Chart" id="holder" width="320" height="240" radius="150" data-source="chart_data" data-options="chart_options"></piechart>
```

Bar Chart: 

```html
 <barchart title="Single Series" id="holder" x="10" y="10" width="300" height="220" data-source="chart_data" data-options="chart_options"></barchart>
```

### Features
* Two way bindings on chart data source.

### Todo/Roadmap
* Add line and dot charts.

