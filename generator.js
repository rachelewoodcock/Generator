//GLOBAL------------------------------------------------------------------------------
var canvas;
var ctx;
var w = 1000;
var h = 600;



//CALL---------------------------------------------------------------------------------
setUpCanvas();




// FUNCTIONS----------------------------------------------------------------------------
function circle() {
    ctx.beginPath();
    ctx.arc(300,300,5,0,2 * Math.PI, true);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
}

//--------------------------------------------------------------------------------------------

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
} 

var mouseClicked = false, mouseReleased = true;

canvas.addEventListener ("click", onMouseClick, false);
canvas.addEventListener ("mousemove", onMouseMove, false);

function onMouseClick(e){
	mouseClicked = !mouseClicked;
}

function onMouseMove(e){
	if (mouseClicked){
		ctx.clearRect (0,0,w,h);
		ctx.beginPath();
		ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI, false);
		ctx.lineWidth =5;
		ctx.fillStyle = "#FFFFFF";
   		ctx.fill();
	}
}

// https://medium.com/@jagadeshanh/html5-canvas-click-and-draw-f665e02f5744

//-------------------------------------------------------------------------------------

function update() {
   // ctx.clearRect (0,0,w,h);
   ctx.beginPath();
   ctx.arc(mouseX, mouseY, 5, 0, 2 * Math.PI, true);
   ctx.fillStyle = "#FFFFFF";
   ctx.fill();

   requestAnimationFrame(update);
}

update();



//------------------------------------------------------------------------------------


function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}  

//https://www.kirupa.com/canvas/follow_mouse_cursor.htm


//SET UP CANVAS-----------------------------------------------------------------------
function setUpCanvas (){
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext ("2d");
	canvas.width = w;
	canvas.height = h;
	canvas.style.border = "1px solid white";
}

console.log ("Assignment 5");
