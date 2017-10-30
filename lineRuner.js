var canvas;
var canvasContext;
var textXPos=540;
var text2XPos;
var textSpeed=0.5;
var runningText1 = 'On October 20, 2008, more UFO files were released. One case released detailed that in 1991 an Alitalia passenger aircraft was approaching London Heathrow Airport when the pilots saw what they described as a "cruise missile" fly extremely close to the cockpit. '
var runningText2 = 'The pilots believed that a collision was imminent. UFO expert David Clarke says that this is one of the most convincing cases for a UFO he has come across.'



canvas = document.getElementById('gC');
canvasContext = canvas.getContext('2d');
canvasContext.fillStyle = 'white';
canvasContext.fillRect(0,0, 540, canvas.height);
text2XPos = textXPos + 1855;
setInterval(function(){
  moveText()
  drawText()
})
console.log(canvasContext.measureText(runningText1).width);
function moveText(){
  if (textXPos+1855<0){
    textXPos = text2XPos+1113;
  }
  if(text2XPos+1113<0){
    text2XPos = textXPos+1855; 
  }
  //1111
  textXPos = textXPos-textSpeed;
  text2XPos = text2XPos-textSpeed;
}

function drawText(){
  canvasContext.fillStyle = 'white';
  canvasContext.fillRect(0,0, 540, canvas.height);
  canvasContext.fillStyle = "black";
  canvasContext.font = "16px Arial";
  canvasContext.fillText(runningText1 ,textXPos,canvas.height/2+5);
  canvasContext.fillText(runningText2 ,text2XPos,canvas.height/2+5);
}
