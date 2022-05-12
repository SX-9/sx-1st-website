//LIFE.JS
var welcome = "Hi, Welcome to SX's 1st Website!";
var suprise = "R̶̲̋ė̴͙ă̸̼d̸̮͝T̴͍͗ĥ̵̩ē̶͓C̷͈͝o̵͙̓ṉ̷͠s̵̫̈́ô̴̰ḻ̸͐e̷̛̖";
var link = "1st.sx9.repl.co";
var colors = ['red', 'lime', 'cyan', 'yellow'];
var random = colors[Math.floor(Math.random()*colors.length)];
var mess = "ReadTheConsole";
var formEmail = document.getElementById("formEmail").value;
var typingElements = document.getElementsByClassName("typing");
var data = document.cookie
var discord = "other-project-files/discord.html";
var calc = "other-project-files/calc.html";
var cmd = "other-project-files/cmd.html";

data = suprise

window.addEventListener('load', () => {
  setTimeout(hideLoader, 5000)
});

function punnish() {
	document.getElementById("punnish").href = "https://youtu.be/Ux0YNqhaw0I"
}

document.querySelector("h1.title").addEventListener("mouseover", glitch);
document.querySelector("h1.title").addEventListener("mouseout", unglitch);

for (var typingElement of typingElements) {
  var originalText = typingElement.innerText;

  typingElement.innerHTML = " ";

  let nextCharIndex = 0;
    var interval = setInterval(() => {
        if (nextCharIndex >= originalText.length - 1) {
          clearInterval(interval);
        }
    typingElement.innerHTML += originalText[nextCharIndex];
    nextCharIndex++;
    }, 75);
}

function hideLoader() {
  document.getElementById("popup").showModal();
	document.getElementById("loader").remove();
}

function closePopup() {
	document.getElementById("popup").close();
}

document.getElementById("formName").value = "Your Name Here!"
document.getElementById("formEmail").value = "user@example.com"
document.getElementById("formMess").value = "Hello!"

function formSubmit() {
	document.getElementById("submit").href = "mailto:sx-91@outlook.com?subject=A%20New%20Form%20Submition%20From%20Your%20Website!&body=From%3A%20" + document.getElementById("formName").value + "%0AEmail%3A%20" + document.getElementById("formEmail").value + "%0AMessage%3A%20" + document.getElementById("formMess").value;
}

function showEmail() {
  document.getElementById("formEmail").type = "text";
}

function destroy() {
	document.getElementById("body").style.opacity = "0%";
	document.getElementById("body").style.backgroundImage = "url('images/white.jpg')"
	document.getElementById("body").style.cursor = "wait";
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

function share() {
  navigator.clipboard.writeText("1st.sx9.replco");
	alert("Copied The Website Link!");
}

function opeTab(link) {
  window.open(link);
}

console.log('System: ' + welcome);
console.log('Warning: DO NOT RUN destroy()')

document.getElementById("secret").innerHTML = suprise;

document.querySelectorAll('img').loading = "lazy";

document.getElementById('share').onclick = async () => {
  if (navigator.canShare) {
    navigator.share({
      url: 'https://sx9.is-a.dev',
      title: "SX's Website",
      text: "Check out SX's Website!"
    })
  } else {
    alert("Your Browser Doesn't Support This Feature!")
  }
}

if ('IdleDetector' in window) {
  async function runIdleDetection() {
    const state = await IdleDetector.requestPermission();
    console.log(state);
    const idleDetector = new IdleDetector();
    idleDetector.addEventListener('change', () => {
      const { userState, screenState } = idleDetector;
      if (userState === 'idle') {
        alert('Anybody there?');
      }
    });
    await idleDetector.start({
      threshold: 120000,
    });
  }
}