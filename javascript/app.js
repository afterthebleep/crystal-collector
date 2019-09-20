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

  $('#scoreToMatch').html(scoreToMatch);
  $('#playerScore').html(playerScore);
  
}

function tallyCrystals (crystal){
  playerScore = playerScore + crystal.value;

  $('#playerScore').html(playerScore);

  compare();
}

function compare () {
  if(playerScore === scoreToMatch) {
    alert('WINNER!');
    wins++;
    $('#wins').html(wins);
  }
 else if(playerScore > scoreToMatch) {
    alert('LOSER');
    losses++;
    $('#losses').html(losses);
  }
}

$('#blue').on('click', function(){
  tallyCrystals(crystal.blue);
});
$('#blended').on('click', function(){
  tallyCrystals(crystal.blended);
});
$('#purple').on('click', function(){
  tallyCrystals(crystal.purple);
});

startGame();