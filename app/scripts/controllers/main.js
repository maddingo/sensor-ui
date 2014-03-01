'use strict';

angular.module('sensorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.measureTypes = ['TEMP', 'HUM'];
    $scope.measureType = 'TEMP';
    $scope.graphConfig = {
      title: 'Measurements',
      seriesDefaults: {
        showMarker: false,
      },
      axes: {
        xaxis: {
          renderer: jQuery.jqplot.DateAxisRenderer,
        },
        yaxis: {
          tickOptions: {
            formatString: '%.1f'
          }
        }
      },
    };
    $scope.graphData = [
      [
        ['2014-02-16 00:01:00', 1],
        ['2014-02-16 00:02:00', 3],
        ['2014-02-16 00:03:00', 1],
        ['2014-02-16 00:04:00', 2],
        ['2014-02-16 00:05:00', 1],
        ['2014-02-16 00:06:00', 4],
        ['2014-02-16 00:07:00', 2],
        ['2014-02-16 00:08:00', 3],
        ['2014-02-16 00:09:00', 10],
        ['2014-02-16 00:10:00', 9],
      ],
      [
        ['2014-02-16 00:01:00', 10],
        ['2014-02-16 00:02:00', 30],
        ['2014-02-16 00:03:00', 10],
        ['2014-02-16 00:04:00', 20],
        ['2014-02-16 00:05:00', 10],
        ['2014-02-16 00:06:00', 40],
        ['2014-02-16 00:07:00', 20],
        ['2014-02-16 00:08:00', 30],
        ['2014-02-16 00:09:00', 100],
        ['2014-02-16 00:10:00', 90],
      ]
    ];
    
    $scope.chartType = 'line';

    $scope.endDate = moment().toDate();
    $scope.startDate = moment().subtract('days', 2).toDate();
  }
  
);
