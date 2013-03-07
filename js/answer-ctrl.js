angular.module("answer").controller("AnswerCtrl",
	function ($scope, $http, $log) {
		var SIZE = 2;
		var start = 1;
		$scope.allResults = [];

		$scope.answerSearch = function() {
			var postData =
			{
				start:start,
				count:SIZE,
				vanityUrl:"/faq/mormon-christian",
				lang:'eng'
			};

			$http.post('http://dev.mormon.org/ws/moreAnswers', postData).success(function(data) {
				$scope.allResults = $scope.allResults.concat(data.results);
				start += SIZE;
			});
		};
	}
);


