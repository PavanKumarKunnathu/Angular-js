(function () {
	'use strict';
	angular.module('namecalculator',[])
	.controller('namecontroller',function($scope){
		$scope.name="";
		$scope.totalvalue=0;
		$scope.displaynumeric=function(){
			var tnameval=calculatestring($scope.name);
			$scope.totalvalue=tnameval;
		};
		function calculatestring(str){
			var v=0;
			for(var i=0;i<str.length;i++){
				v=v+str.charCodeAt(i);
			}
			return v;
		}
	});
})()