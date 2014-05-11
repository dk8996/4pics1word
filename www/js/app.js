var mainApp = angular.module('MainApp', []);

mainApp.controller('ContentCtrl', function($scope) {
	$scope.Math = window.Math;
	
	var str = "abcdefghijklmnopqrstuvwxyz";

	var alphaArray = str.split("");

	$scope.answerBoxesClass = "pure-u-1-8"
		
	$scope.answerBoxes = [];

	$scope.letterBoxes = [];

	$scope.createAnswerBoxes = function(word) {
		var wordArray = word.split("");
		for (var i = 0; i < wordArray.length; i++) {
			$scope.answerBoxes.push({
				'letter' : 'answer-block',
				'set' : false
			})
		}
	}
	
	$scope.createLetterBoxes = function(word, numLetters) {
		var wordArray = word.split("");
		var diffAlphaArray = alphaArray.diff(wordArray);
		var fillerLettersArray = $scope.shuffle(diffAlphaArray).slice(0,
				numLetters - wordArray.length);
		var lettersArray = $scope.shuffle(fillerLettersArray.concat(wordArray))

		for (var i = 0; i < lettersArray.length; i++) {
			$scope.letterBoxes.push({
				'letter' : lettersArray[i],
				'selected' : false
			})
		}

	}
	

	$scope.letterClick = function(letterBox) {
		$scope.answerBoxes.push({
			'letter' : 'answer-block',
			'set' : false
		})
		for (var i = 0; i < $scope.answerBoxes.length; i++) {
			if (!$scope.answerBoxes[i].set) {
				letterBox.selected = true
				$scope.answerBoxes[i].letter = letterBox.letter
				$scope.answerBoxes[i].set = true
				return

			}
		}
		

	}

	$scope.answerClick = function(answerBox) {
		for (var i = 0; i < $scope.letterBoxes.length; i++) {
			if ($scope.letterBoxes[i].selected
					&& $scope.letterBoxes[i].letter === answerBox.letter) {

				answerBox.letter = 'answer-block'
				$scope.letterBoxes[i].selected = false
				answerBox.set = false
				return

				

			}
		}

	}

	$scope.shuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

	Array.prototype.diff = function(a) {
		return this.filter(function(i) {
			return a.indexOf(i) < 0;
		});
	};
	
	$scope.createLetterBoxes("a",16)
	$scope.createAnswerBoxes("a")

});
