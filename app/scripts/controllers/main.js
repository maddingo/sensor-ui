'use strict';

angular.module('sensorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.graphConfig = {
      title: 'Measurements',
      seriesDefaults: {
        showMarker: false,
      },
      axes: {
        xaxis: {
          renderer: $.jqplot.DateAxisRenderer,
        },
        yaxis: {
          tickOptions: {
            formatString: '%.1f'
          }
        }
      },
    };
    $scope.graphData = [[
      ['2014-02-16 00:01:00', 1],
      ['2014-02-16 00:02:00', 3],
      ['2014-02-16 00:03:00', 2],
      ['2014-02-16 00:04:00', 3],
      ['2014-02-16 00:05:00', 10],
      ['2014-02-16 00:06:00', 9],
    ]];
    
    $scope.chartType = 'line';
  }
);
