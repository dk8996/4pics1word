var mainApp = angular.module('MainApp', []);

mainApp.controller('ContentCtrl', function ($scope) {



$scope.answerBoxes = [
    {'letter': 'answer-block',
     'set': false             },
    {'letter': 'answer-block',
     'set': false             },
    {'letter': 'answer-block',
     'set': false             },
    {'letter': 'answer-block',
     'set': false             },
    {'letter': 'answer-block',
     'set': false             }
  ];

$scope.letterBoxes = [
    {'letter': 'a',
     'original':'a',
     'selected': false},
    {'letter': 'b',
     'original':'b',
     'selected': false},
    {'letter': 'c',
     'original':'c',
     'selected': false},
   {'letter': 'd',
     'original':'d',
     'selected': false},
   {'letter': 'e',
     'original':'e',
     'selected': false}
  ];

$scope.letterClick = function(letterBox) {

for (var i=0;i<$scope.answerBoxes.length;i++)
{ 
if(!$scope.answerBoxes[i].set){
letterBox.selected = true
$scope.answerBoxes[i].letter = letterBox.letter
$scope.answerBoxes[i].set = true
return
}
}

}


$scope.answerClick = function(answerBox) {
for (var i=0;i<$scope.letterBoxes.length;i++)
{ 
if($scope.letterBoxes[i].selected && $scope.letterBoxes[i].letter === answerBox.letter) {

answerBox.letter='answer-block'
$scope.letterBoxes[i].letter = $scope.letterBoxes[i].original
$scope.letterBoxes[i].selected = false
answerBox.set = false
return
}
}


}

});
