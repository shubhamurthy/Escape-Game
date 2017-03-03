var lives=5
var round=1
var duration=120;

//randomize div locations
function init(){

  w=document.body.offsetWidth;
  h=document.body.offsetHeight;
  rd=document.getElementsByTagName('div');

  for(c=0;c<rd.length;c++) {
    if(rd[c].className=='random') {
      xCoord=Math.floor(Math.random()*w);
      yCoord=Math.floor(Math.random()*h);

      if(xCoord>=w-rd[c].offsetWidth-10){
        xCoord=w-rd[c].offsetWidth-10;
      }
      if(xCoord<=10){
        xCoord=10;
      }

      if(yCoord>=h-rd[c].offsetHeight-10){
        yCoord=h-rd[c].offsetHeight-10;
      }
      if(yCoord<=10){
        yCoord=10;
      }

      rd[c].style.left=xCoord+'px';
      rd[c].style.top=yCoord+'px';
    }
  }
}

window.addEventListener('load',init,false);

//reload page or return to index.html
function rl(){
  var rel=confirm("Do you want to play again?")
  if (rel==true){
    if(round<9){
      duration=120-round*10
    }
    else{duration=30}
    
    newround()
  }
  else{
    window.location="index.html";     
  }
}

var ID = window.setTimeout('countdown()',1000);

//set timer
function countdown(){
  document.getElementById('time').innerHTML='Seconds left: '+duration;
  ID=window.setTimeout('countdown(duration);',1000);
  if (duration<=0){
    window.clearTimeout(ID);
    alert("You didn't make it out of the forest fast enough. You lose.");
    lifecount()
    if(lives>0){rl()}
  }
  duration--
}

//re-randomize the divs, restart timer
function newround(){
  round+=1
  init();
  countdown();
  document.getElementById("round").innerHTML='Round: '+round;
}

//lose a life, and restart the game if all lives are lost 
function lifecount(){
  lives--;
  document.getElementById("lives").innerHTML='Lives left: '+lives;
  if (lives==0){
    var reload= confirm('You lost all of your lives. Do you want to start over?')
    if (reload){
      window.location.reload()
    }
    else{
      window.location="index.html";     
    }
  }
}

