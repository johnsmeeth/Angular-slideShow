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
	$scope.img = $scope.items[0].path;
	$scope.isActive = false;
	

	//Declare method : Hover mouse change image
	$scope.changeImage = function(index){
		$scope.img = $scope.items[index].path;
		$scope.isCurrentActive = true;

	}

	/*Defined Active Class Hover || Auto Change*/
	$scope.active = "";

	/*Defined id images*/
	var idImg = 0;
	var active = 1;
	$scope.getId = function(index){
		console.log(index);
	}
	// init Auto change images slide
	$scope.autoChange = function(){

		if(idImg == 5){idImg = 0};

		$scope.img = $scope.items[idImg].path;
		if(idImg == $scope.getId()){
			$scope.getId(idImg) = "ActiveClass";
		}
		if($scope.getId())

		idImg++; //3

		myTimer = $timeout($scope.autoChange, 2000);
		active = 0;
	}




});



			/*-- Auto play with badway (traditional of javascript) --
	$scope.autoChangeDanToc = function(){
		var index = 0;
		//check index when at final
		var timer = setInterval(function(){
			if(index == 5){index = 0};
			$scope.img = $scope.items[index].path;
			$scope.$apply();
			console.log('index = ' + index);
			index++;
		}, 2000);
	}
		/*-- Auto play with good way by angular --*/