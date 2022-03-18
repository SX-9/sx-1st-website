//LIFE.JS
var welcome = "Hi, Welcome to SX's 1st Website!";
var suprise = "R̶̲̋ė̴͙ă̸̼d̸̮͝T̴͍͗ĥ̵̩ē̶͓C̷͈͝o̵͙̓ṉ̷͠s̵̫̈́ô̴̰ḻ̸͐e̷̛̖";
var link = "1st.sx9.repl.co";
var answear = ['Rock', 'Paper', 'Scissor']; 
var picker = answear[Math.floor(Math.random()*answear.length)];
var colors = ['red', 'lime', 'cyan', 'yellow'];
var random = colors[Math.floor(Math.random()*colors.length)];
var mess = "ReadTheConsole";
var formEmail = document.getElementById("formEmail").value;
var typingElements = document.getElementsByClassName("typing");

document.querySelector("h1.title").addEventListener("mouseover", glitch);
document.querySelector("h1.title").addEventListener("mouseout", unglitch);

for (var typingElement of typingElements) {
    var originalText = typingElement.innerText;

    typingElement.innerHTML = "";

    let nextCharIndex = 0;
    var interval = setInterval(() => {
        if (nextCharIndex >= originalText.length - 1) {
            clearInterval(interval);
        }

        typingElement.innerHTML += originalText[nextCharIndex];
        nextCharIndex++;
    }, 75);
} 

document.getElementById("popup").showModal();

function closePopup() {
						document.getElementById("popup").close();
}

function formSubmit() {
						document.getElementById("submit").href = "mailto:sx-91@outlook.com?subject=A%20New%20Form%20Submition%20From%20Your%20Website!&body=From%3A%20" + document.getElementById("formName").value + "%0AEmail%3A%20" + document.getElementById("formEmail").value + "%0AMessage%3A%20" + document.getElementById("formMess").value;
}

function destroy() {
						document.getElementById("body").style.opacity = "0%";
						document.getElementById("body").style.backgroundImage = "url('white.jpg')"
					 document.getElementById("body").style.cursor = "wait";
}

function edit() {
					document.getElementById("edit").innerHTML = "Please Wait For 3s...";
						setTimeout(editWebsite, 3000)
}

function editWebsite() {
						document.getElementById("body").contentEditable = "true";
 document.getElementById("edit").style.color = "red";
						document.getElementById("edit").innerHTML = "REFRESH TO TURN OFF EDIT MODE!!!";
						alert("Edit Mode Is Now On!");
}

function light() {
					document.getElementById("light").innerHTML = "Please Wait For 3s...";
						setTimeout(lightModeToggle, 3000)
}

function lightModeToggle() {
					 document.getElementById("light").style.color = "red";
						document.getElementById("light").innerHTML = "REFRESH TO TURN OFF LIGHT MODE!!!";
						alert("Light Mode Is Now On!")
						document.getElementById("card").style.backgroundColor = "white";
						document.getElementById("p1").style.color = "black";
						document.getElementById("p2").style.color = "black";
						document.getElementById("p3").style.color = "black";
						document.getElementById("p4").style.color = "black";
						document.getElementById("p5").style.color = "black";
						document.getElementById("label1").style.color = "black";
						document.getElementById("label2").style.color = "black";
						document.getElementById("label3").style.color = "black";
						document.getElementById("formName").style.color = "white";
						document.getElementById("formEmail").style.color = "white";
						document.getElementById("formMess").style.color = "white";
						document.getElementById("formName").style.backgroundColor = "black";
						document.getElementById("formEmail").style.backgroundColor = "black";
						document.getElementById("formMess").style.backgroundColor = "black";	
						document.body.style.backgroundImage = "url('images/white.jpg')";
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
      navigator.clipboard.writeText("1st.sx9.replco");
		  	alert("Copied The Website Link!");
}

console.log('System: ' + welcome);
console.log('Warning: DO NOT RUN destroy()')

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
