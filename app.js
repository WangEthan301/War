const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

// learning canvas functions
/*
fillStyle: sets color

fillRect: draws filled rect
strokeRect: draws rectangle outline
clearRect: clears speciifed rectangle area

path:
beginPath
moveTo
lineTo
fill

drawImage draws js image (made with new Image(src))
*/

ctx.fillStyle = "red";
ctx.fillRect(0,0,600,600);
ctx.fillStyle = "blue";
ctx.fillRect(600,0,1200,600);

ctx.fillStyle = "#bbb";

ctx.beginPath();
ctx.arc(600,300,150,0,Math.PI*2,true);
ctx.fill();

ctx.fillStyle = "white";
ctx.font = "100px arial";
ctx.fillText("Deal",500,350,200);
