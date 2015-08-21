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


$( "#subButton" ).click(function() {
    if ( $( "#answerBox" ).val() == wordList[currWord] ) {
      $("#my_span").css('color','green');
      $("#my_span").html('correct');
      
      
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
      $("#my_span").css('color','red');
      $("#my_span").html('incorrect');
      
      
      wrongList.push(wordList[currWord]);
      
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


//The hintButtion when clicked takes the users word and will return the next correct letter of the word to be spelled
//If the word is totally wrong it will give the first letter of the correct word in the answer box
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


$('#customList').click( function() {
  $('#customOption').toggle('show');
});


//This is super messy but for some reason .serialize() is just not working for this form
// when customList is clicked it checks the value of the 5 inputs and sends them into the array customWords
$('#customSubmit').click( function() {
  customWords = [];
  if( $("#wordOne").val()){
    customWords.push($("#wordOne").val());
  }

  if( $("#wordTwo").val()){
    customWords.push($("#wordTwo").val());
  }

  if( $("#wordThree").val()){
    customWords.push($("#wordThree").val());
  }

  if( $("#wordFour").val()){
    customWords.push($("#wordFour").val());
  }

  if( $("#wordFive").val()){
    customWords.push($("#wordFive").val());
  }

  alert(customWords);
  wordList = customWords;
});


$("#right").html(wordList.length);


