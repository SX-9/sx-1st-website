//LIFE.JS
var welcome = "Hi, Welcome to SX's 1st Website!";
var suprise = "R̶̲̋ė̴͙ă̸̼d̸̮͝T̴͍͗ĥ̵̩ē̶͓C̷͈͝o̵͙̓ṉ̷͠s̵̫̈́ô̴̰ḻ̸͐e̷̛̖"
var link = "1st.sx9.repl.co"
var answear = ['Rock', 'Paper', 'Scissor']; 
var picker = answear[Math.floor(Math.random()*answear.length)];
var colors = ['red', 'lime', 'cyan', 'yellow']
var random = colors[Math.floor(Math.random()*colors.length)];
var mess = "ReadTheConsole"
var h1 = document.querySelector("h1.title");

h1.addEventListener("mouseover", glitch);
h1.addEventListener("mouseout", unglitch);

function light() {
					document.getElementById("toggle").innerHTML = "Please Wait For 3s...";
						setTimeout(lightModeToggle, 3000)
}

function lightModeToggle() {
					 document.getElementById("toggle").style.color = "red";
						document.getElementById("toggle").style.backgroundColor = "white";
						document.getElementById("toggle").innerHTML = "REFRESH TO TURN OFF LIGHT MODE!!!";
						alert("Light Mode Is Now On!")
						document.getElementById("about").style.backgroundColor = "white";
						document.getElementById("p1").style.color = "black";
						document.getElementById("p2").style.color = "black";
						document.getElementById("p3").style.color = "black";
						document.getElementById("p4").style.color = "black";
						document.getElementById("p5").style.color = "black";
						document.body.style.backgroundImage = "url('white.jpg')";
}

function unglitch() {
						document.getElementById("title").style.color = "cyan";
}

function glitch() {
						document.getElementById("title").style.color = random;
}

function reveal() {
						document.getElementById('secret').innerHTML = mess
}

function rpc()
{
						document.getElementById("rpc-answear").innerHTML = "I Pick " + picker + "! <br> Refresh To Play Again!";
}

function share() {
      navigator.clipboard.writeText(link);
						alert("Copied The Website Link!");
}

console.log('System: ' + welcome);

document.getElementById("secret").innerHTML = suprise;

window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
    px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}
