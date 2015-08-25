var quiz1 = [['להימצא', 'be located at'], ['להוסיף', 'add'], ['להבין', 'understand'], ['להתערב', 'interfere'], ['להפסיק', 'stop doing STH'], ['להפוך', 'turn in sideup', 'upside down']
              , ['לחקות', 'imitate'], ['לנסות', 'try'], ['להיכנס', 'enter'], ['לפנות', 'turn to'], ['לפסול', 'disqualify'], ['להיגמר', 'come to an end'], ['להרגיז', 'annoy'], ['להסתובב', 'walk around']
              , ['להשחית', 'destroy'], ['לזכות', 'merit'], ['לספר', 'tell a story', 'recount']];

var quiz2 = [ ['אקונומיקה', 'bleach'], ['מלחמות', 'war'], ['מכירת סוף העונה', 'sale', 'end of season sale'], ['מלאה', 'full'], ['הכשר', 'Kosher certification'], ['נגד','against']
              , ['אישה', 'woman'], ['ישן', 'things'], ['רשימה', 'list'], ['לוח מודעות', 'לוחות מודעות ','billboard'], ['עיר', 'ערים', 'city'], ['איסור', 'איסורים ','prohibition'], ['פעוּלה', 'פעוּלות', 'action', 'activity']
              , ['קורבָּן','victim'], ['הודעה', 'הודעות', 'announcement'], ['מרוּצה','happy','content'] ];

var quiz3 = [['גופייה', 'גופיות', 'undershirt'], ['מכנסיים','pants'], ['צמוד', 'צמודה','tight'], ['חולצה', 'חולצות',  'shirt', 'blouse'], ['שמלה', 'שמלות', 'dress'], ['חנות', 'חנויות',  'store']
              , ['שרווּל', 'שרווּלים','sleeve'], ['אורך', 'length'], ['לבוש','garment', 'attire'], ['גזרה', 'גזרות', 'shape of garment'], ['סוּג', 'סוּגים','kind'], ['בד', 'בדים', 'material']
              , ['סריג', 'סריגים', 'knit'], ['קצר', 'קצרה','short'],['מתאים', 'מתאימה', 'appropriate fit']];

var quiz4 = [['נציג', 'נציגים', 'representative'], ['דרישה', 'דרישות',  'demand'], ['מוּגזם', 'מוּגזמת','exaggerated'], ['עשוּי', 'עשוּייה','made of'], ['ברך', 'ברכיים','knee'], ['צניעוּת', 'modesty']
              , ['הציבוּר החרדי', 'the Xaredi public'], ['מלחמת קודש',  'holy war'], ['חילוני', 'חילונית',  'secular person'], ['מעצב', 'מעצבת','designer'], ['איזור', 'איזורים','area'], ['השפעה','influence']
              , ['מסר','message'], ['אמור', 'אמורה','supposed to'],['שמרני', 'שמרנית  ','conservative']];


var wordList = quiz1;

var wrongList = [];
var customWords = [];

var currWord = 0;

var wrongAmount = wrongList.length;

$('#list1').click( function() {
  wordList = quiz1;
  currWord = 0;
  wrongList = [];

  $("#wrong").html(wrongAmount);
  $('#instruct').html(wordList[currWord][wordList[currWord].length - 1]);
});

$('#list2').click( function() {
  wordList = quiz2;
  currWord = 0;
  wrongList = [];

  $("#wrong").html(wrongAmount);
  $('#instruct').html(wordList[currWord][wordList[currWord].length - 1]);
});

$('#list3').click( function() {
  wordList = quiz3;
  currWord = 0;
  wrongList = [];

  $("#wrong").html(wrongAmount);
  $('#instruct').html(wordList[currWord][wordList[currWord].length - 1]);
});

$('#list4').click( function() {
  wordList = quiz4;
  currWord = 0;
  wrongList = [];

  $("#wrong").html(wrongAmount);
  $('#instruct').html(wordList[currWord][wordList[currWord].length - 1]);
});

//current if statement is only set up for hebrew spellcheck!!!!
$( "#subButton" ).click(function() {
    alert(wordList[currWord][0]);
    if ( $( "#answerBox" ).val() == wordList[currWord][0].split('').reverse().join('') ) {
      $("#my_span").css('color','green');
      $("#my_span").html('correct');
      
      
      currWord += 1;
      $("#right").html(wordList.length);
      $('#instruct').html(wordList[currWord][1]);

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
// right now the default is set up for hebrew spell checking, commented out code right now is for english spell checking which is much simpler
$('#hintButton').click( function() {
  var input = document.getElementById('answerBox').value;
  var word = wordList[currWord][0].split('').reverse().join('');
  //var word = wordList[curWord][0];

  var correct = 0;
  var inputLength = input.length;
  
  for(i = 0 ;  i < inputLength; i++) {
    if( input[i] === word[i]) {
      
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


$("#right").html("Total Words: " + wordList.length);





