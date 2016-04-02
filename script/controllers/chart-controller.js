myApp.controller("ChartController", function($scope) {
    //http://jtblin.github.io/angular-chart.js/
    $scope.linelabels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.lineseries = ['Series A', 'Series B'];
    $scope.linedata = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function(points, evt) {
        // console.log(points, evt);
        $scope.logMsg = points;
    };

    $scope.colours = ['#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'];

    //pie graph
    $scope.doughnutlabels = ["Harun", "Riaz", "Jhon","Mark","Waliz"];
    $scope.doughnutdata = [300, 1000, 100,400,200];

    //Radar 
   $scope.radarlabels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

  $scope.radardata = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];


  //bar 
   $scope.barlabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.barseries = ['Series A', 'Series B'];

  $scope.bardata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
})