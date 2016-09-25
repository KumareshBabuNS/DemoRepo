var registerUser = angular.module("userModule", ["ngStorage"]);
			registerUser.controller("userController", function($scope,$localStorage,$sessionStorage,$window){
				$scope.saveUser = function(){
					
					if($localStorage.username == $scope.username){
						//$window.alert("User already exist..");
						$scope.registerError=true;
						$scope.registerSignupError="User already exists.";
					}
					else if($localStorage.username != $scope.username){
						$scope.registerSuccess=true;
						$scope.registerSignupSuccess = $scope.username + " successfully registered. Please login.";
						$localStorage.firstname = $scope.firstname;
						$localStorage.lastname = $scope.lastname;
						$localStorage.username = $scope.username;
						$localStorage.userpassword = $scope.userpassword;
						//$sessionStorage.username = $scope.username;
						//$window.location = "MyApp6.html";
					}
				}
				//$scope.getUser = function(){
					//$window.alert("Registered user is " + $sessionStorage.username);
				//}
			});