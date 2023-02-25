// "Hello World!" - sx9dev

if (confirm('I Have A New Site, Wanna See It?')) window.location.href = 'https://new.sx9.is-a.dev/';

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-2FTPXFSTQQ');

const f = new Intl.NumberFormat('en-US', { notation: 'compact' });

function updateCount(response) {
  localStorage.setItem('visited', 'yes')
  document.getElementById('visits').innerText = f.format(response.value);
}
fetch('https://api.countapi.xyz/' + (localStorage.getItem('visited') === 'yes' ? 'get' : 'hit') + '/sx9dev/visits')
  .then(j => j.json()).then(updateCount);

if (window.innerWidth < 380) {
  let answear = confirm(
    "Your Device Is Too Small, Are You Sure You Want To View This Page?"
  );
  if (!answear) {
    document.body.style.display = "none";
  } else {
    document.body.style.display = "block";
  }
}

var install;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  install = e;
});

fetch("https://api.lanyard.rest/v1/users/882595027132493864")
  .then((r) => r.json())
  .then((j) => {
    document.getElementById("pfp").classList.add(j.data.discord_status)
    let a;
    if (j.data.activities.length !== 0) a = j.data.activities[0];
    a.state = a.state.slice(0, a.state.lastIndexOf(';'));
    document.getElementById('activity').innerText = `${a.name}\n${a.details}\n${a.state}`;
  });

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
function glitch(el) {
  el.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
}
document.querySelectorAll(".glitch").forEach(glitch);

let text = "Developer🚀";
let delay = 150;
let i = 1;
const updateText = () => {
  document.getElementById('typing').innerText = text.substring(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(updateText, delay);
  }
};
setTimeout(updateText, 1700);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll');
    } else {
      entry.target.classList.remove('scroll');
    }
  });
});
document.querySelectorAll('.item').forEach(el => observer.observe(el));

async function getTopLanguages(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();

  const langCount = {};
  repos.forEach((repo) => {
    if (repo.language in langCount) {
      langCount[repo.language]++;
    } else {
      langCount[repo.language] = 1;
    }
  });

  const sortedLangs = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  let num = 0;
  document.getElementById('stats').innerHTML = '<legend>🤔 Top Languages</legend>';
  sortedLangs.forEach(lang => {
    num++;
    let el = document.createElement('p');
    el.innerText = `${num}. ${lang[0]} - ${lang[1]} Repos`;
    el.classList.add('stats');
    document.getElementById('stats').appendChild(el);
  });
}
getTopLanguages('SX-9');

document.getElementById("share").onclick = () => {
  if (navigator.share) {
    navigator.share({
      title: 'SX\'s Website',
      text: 'Hi, Im SX! Wanna Code?',
      url: window.location.href,
    })
      .then(() => console.log('Sharing succeeded.'))
      .catch((error) => console.log('Sharing failed:', error));
  } else {
    window.open("https://twitter.com/share?url=" + window.location.href);
  }
}
document.getElementById("pwa").onclick = () => {
  try {
    install.prompt();
  } catch {
    alert('Click On The 3 Dots In The Upper Right Corner And Click Add To Home Screen');
  }
};

console.log(
  "%cHello%cWorld",
  "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold; font-size: 5em;",
  "color:red; background-color: white; font-family: sans-serif; font-weight: bold; font-size: 5em;"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa/sw.js");
  console.log("Service Worker Registered!");
}
