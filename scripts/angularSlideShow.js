var app = angular.module('App', []);

app.factory('images', function(){
    return [
        {id: 0, name: 'Hà Nội', path: 'images/1.jpg'},
        {id: 1, name: 'HCM', path: 'images/2.jpg'},
        {id: 2, name: 'Huế', path: 'images/3.jpg'},
        {id: 3, name: 'Hải Phòng', path: 'images/4.jpg'},
        {id: 4, name: 'Cần Thơ', path: 'images/5.jpg'},
        {id: 5, name: 'Đà Nẵng', path: 'images/6.jpg'},
    ];
});

//controller
app.controller('slideCtrl', function($scope, images, $timeout){

    //Define and init model
    $scope.items = images;
    //$scope.img = $scope.items[0].path;
    $scope.img = {id: $scope.items[0].id, path: $scope.items[0].path};

    //Declare method : Hover mouse change image
    $scope.changeImage = function(index){
        $scope.img.id = index;
        $scope.img.path = $scope.items[index].path;
    }

    var idImg = 0;
    // init Auto change images slide
    $scope.autoChange = function(){
        if(idImg == 6){idImg = 0};
        $scope.img.id = idImg;
        $scope.img.path = $scope.items[idImg].path;
        idImg++;
        var myTimer = $timeout($scope.autoChange, 2000);
    }

    $scope.next = function(currentIndex){
        if(currentIndex == 5){currentIndex = -1};
        $scope.img.id = currentIndex + 1;
        $scope.img.path = $scope.items[currentIndex + 1].path;
        console.log('img.id = ' + $scope.img.id + ', img.path = ' + $scope.img.path);
    }

    $scope.previous = function(currentIndex){
        if(currentIndex == 0){currentIndex = 6};
        $scope.img.id = currentIndex - 1;
        $scope.img.path = $scope.items[currentIndex - 1].path;
        console.log('img.id = ' + $scope.img.id + ', img.path = ' + $scope.img.path);
    }
});
