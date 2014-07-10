'use strict';

angular.module('dockerMeetupFrontendApp')
  .controller('HomeBaseCtrl', function ($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    $scope.addedLibraries = [
      {
        id: 1,
        name: 'Django',
        version: '1.0.0',
        isSubmit: true,
        isCreate: true,
        isBuild: true,
        isDeploy: true
      },
      {
        id: 2,
        name: 'MySQL',
        version: '0.4.5',
        isSubmit: false,
        isCreate: false,
        isBuild: false,
        isDeploy: false
      }
    ];

    $scope.addLibrary = function(item) {
      console.log(item);
    };

    $scope.getImage = function(val) {
      return $http.get('https://index.docker.io/v1/search?q='+val, {
        headers: {
          'Access-Control-Allow-Headers': 'index.docker.io',
          'Accept': 'application/json'
        }
      }).then(function(res){
        console.log(res);
        var addresses = [];
        // angular.forEach(res.data.results, function(item){
        //   addresses.push(item.formatted_address);
        // });
        return addresses;
      });
    };
  });
