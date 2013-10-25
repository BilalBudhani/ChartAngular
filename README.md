ChartAngular
============

Charting in AngularJS made easy :)

### Live Previews
* Pie Chart: http://plnkr.co/edit/SBc5zo?p=preview
* Bar Chart: http://plnkr.co/edit/XvIJta?p=preview

### Dependencies 
* Charts are built using [Raphael](http://raphaeljs.com) and [gRaphael](http://g.raphaeljs.com/).
* Add [PieChart](http://github.com/DmitryBaranovskiy/g.raphael/blob/master/min/g.pie-min.js?raw=true) or [BarChart](http://github.com/DmitryBaranovskiy/g.raphael/blob/master/min/g.bar-min.js?raw=true) or both based on what your usage.

### How to use

* Drop the chartangular library in your project's javascripts.
* Add the dependency 
```javascript
angular.module('MyChartApp', ['ChartAngular'])
```
* Now, drop the appropriate html tag in your views and see it in action

Pie Chart:
```html
<piechart title="Pie Chart" id="holder" data-options="chart_options"></piechart>
```

* Options can be provided to charts via controller. 
```javascript
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
```
OR 

Bar Chart: 

```html
 <barchart title="Single Series" id="holder" data-options="chart_options"></barchart>
```

* Options
```javascript
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
```

### Features
* Two way bindings on chart data source.

### Todo/Roadmap
* Add line and dot charts.

