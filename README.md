ChartAngular
============

Charting in AngularJS made easy :)

### Dependencies 
* Charts are built using [Raphael](http://raphaeljs.com) and [Morris](http://www.oesmith.co.uk/morris.js/).

### How to use

* Drop the chartangular library in your project's javascripts.
* Add the dependency ` angular.module('MyChartApp', ['ChartAngular']) `
* Now, drop the appropriate html tag in your views and see it in action
* Options can be provided to charts via controller. 

### Bar Chart
```html
  <barchart id="bar-example" data-options="chart_options"></barchart>
```
* Options in controller 

```javascript
  $scope.chart_options = {
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']
  };
```
### Donut Chart 

```html
  <donutchart id="donut-example" data-options="chart_options"></donutchart>
```

* Options in controller 

```javascript
  $scope.chart_options = {
    data: [
      {label: "Download Sales", value: 12},
      {label: "In-Store Sales", value: 30},
      {label: "Mail-Order Sales", value: 20}
    ]
  };
```

### Line Chart 
```html
  <linechart id="line-example" data-options="chart_options"></linechart>
```
* Options in controller 

```javascript
 $scope.chart_options = {
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']  
  };
```
### Area Chart 
```html
  <areachart id="area-example" data-options="chart_options"></areachart>
```
* Options in controller 

```javascript
 $scope.chart_options = {
    data: [
      { y: '2006', a: 100, b: 90 },
      { y: '2007', a: 75,  b: 65 },
      { y: '2008', a: 50,  b: 40 },
      { y: '2009', a: 75,  b: 65 },
      { y: '2010', a: 50,  b: 40 },
      { y: '2011', a: 75,  b: 65 },
      { y: '2012', a: 100, b: 90 }
    ],
    xkey: 'y',
    ykeys: ['a', 'b'],
    labels: ['Series A', 'Series B']  
  };
```

### Features
* Simple directives for charts   

### Todo/Roadmap
* Two way bindings on chart data source.
 

