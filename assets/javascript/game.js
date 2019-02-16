

<script>
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)

  $('#randomNumber').text(Random);
  
 
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)

  var totalScore= 0; 
  var Wins= 0;
  var Losses = 0;

$('#numberWins').text(Wins);
$('#numberLosses').text(Losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random);
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
     
	  userTotal= 0;
	
      $('#totalFinal').text(userTotal);
      } 

function yay(){
alert("You won!");
  Wins++; 
  $('#numberWins').text(Wins);
  reset();
}

function loser(){
alert ("You lose!");
  Losses++;
  $('#numberLosses').text(Losses);
 reset();
}

  $('#one').on ('click', function(){
    totalScore = totalScore + num1;
    console.log("New totalScore= " + totalScore);
    $('#totalFinal').text(totalScore); 
          //sets win/lose conditions
        if (totalScore == Random){
          yay();
        }
        else if ( totalScore > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    totalScore = totalScore + num2;
    console.log("New totalScore= " + totalScore);
    $('#totalFinal').text(totalScore); 
 
        if (totalScore == Random){
          yay();
        }
        else if ( totalScore > Random){
          loser();
        }   
  })  
   $('#three').on ('click', function(){
    totalScore = totalScore + num3;
    console.log("New totalScore= " + totalScore);
    $('#totalFinal').text(totalScore); 

        if (totalScore == Random){
          yay();
        }
        else if ( totalScore > Random){
          loser();
        }   
  })  
  $('#four').on ('click', function(){
    totalScore = totalScore + num4;
    console.log("New totalScore= " + totalScore);
    $('#totalFinal').text(totalScore); 
      
          if (totalScore == Random){
          yay();
        }
        else if ( totalScore > Random){
          loser();
        }
  });   
}); 

</script>
