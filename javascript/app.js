var crystal = {
blue:
{
 value: 0
},
blended:
{
  value: 0
},
purple:
{
  value: 0
}
};

var scoreToMatch = 0;
var playerScore = 0;

var wins = 0;
var losses = 0;

function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame () {
  var playerScore = 0;
  var scoreToMatch = getRandomNum(19, 120);

  crystal.blue.value = getRandomNum(1,12);
  crystal.blended.value = getRandomNum(1,12);
  crystal.purple.value = getRandomNum(1,12);
  
}

$('#blue').on('click', function(){
  // alert('success');
});
$('#blended').on('click', function(){
  // alert('success');
});
$('#purple').on('click', function(){
  // alert('success');
});

startGame();