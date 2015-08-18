var quiz1 = ['cat','doge','quail','cappy'];
var quiz2 = ['pigeon','hyrax','piglet','snugglefish'];
var wordList = quiz1;


var wrongList = [];
var customWords = [];

var currWord = 0;

var wrongAmount = wrongList.length;

$('#list1').click( function() {
  wordList = quiz1;
  
  currWord = 0;
  
  wrongList = [];
  alert("Loading Quiz 1");
});

$('#list2').click( function() {
  wordList = quiz2;
  
  currWord = 0;
  
  wrongList = [];
  alert("Loading Quiz 2");
});

$('#customList').click( function() {
  $('#customOption').show('fast')

});


$( "#subButton" ).click(function() {
    if ( $( "#answerBox" ).val() === wordList[currWord] ) {
      document.getElementById('my_span').style.color='green';
      document.getElementById('my_span').innerHTML='correct';
      
      currWord += 1;
      $("#right").html(wordList.length);
      
      if(currWord == wordList.length) {
        if (wrongList.length != 0){
          wordList = wrongList;
          currWord = 0
        }
        currWord = 0;
      }
      
      return;
  }
    else{
      document.getElementById('my_span').style.color='red';
      document.getElementById('my_span').innerHTML='incorrect';
      
      wrongList.push(wordList[currWord]);
      
      alert(wrongList);
      currWord += 1;
      wrongAmount += 1;
      $("#wrong").html(wrongAmount);
     
      if(currWord == wordList.length) {
        if (wrongList.length != 0){
          wordList = wrongList;
          currWord = 0
        }
        
      }
      }
});

$('#hintButton').click( function() {
  var input = document.getElementById('answerBox').value;
  var correct = 0;
  var word = wordList[currWord];

  for(i = 0; i<input.length; i++) {
    if(input[i] == word[i]){
      correct += 1;
    }
    else{
      break;
    }
  }
  document.getElementById('answerBox').value = word.slice(0, correct+1);

});

$("#right").html(wordList.length);


