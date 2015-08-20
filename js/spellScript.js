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



$('#customSubmit').click( function() {
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

  alert(customWords[0]);
});


$("#right").html(wordList.length);


