// Draw a circle
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(240,115,70,0,2*Math.PI);
ctx.stroke();

// Gradient
let d = document.getElementById("myCanvas2");
let dtx = d.getContext("2d");
let grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(10, 40, 180, 150);