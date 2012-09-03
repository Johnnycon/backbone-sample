var app = angular.module('app', []);

app.controller('QuestionsCntl', ['$scope', function ($scope) {
	var id = -1;

	$scope.questions = [];

	$scope.ask = function (question) {
		id += 1;

		var q = {id: id, question: question, votes: 0};

		$scope.questions.push(q);
	};

	$scope.upvote = function (id) {
		angular.forEach($scope.questions, function (question) {
			if (angular.equals(question.id, id)) {
				var votes = question.votes;

				question.votes = votes + 1;
			}
		});
	};
}]);