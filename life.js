if (window.innerWidth < 380) {
    let answear = prompt("Your Device Is Too Small, Are You Sure You Want To View This Page?\n\nType 'yes' to continue.");
    if (answear.toLowerCase() !== "yes") {
        document.body.style.display = 'none';
    } else {
        document.body.style.display = 'block';
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll');
        }
    });
});
let scrollItems = document.querySelectorAll('div.container');
scrollItems.forEach(item => {
    observer.observe(item);
});

var install;
window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    install = e;
});

const typingChange = () => {
    const typing = document.getElementById('typing');
    setTimeout(() => typing.innerText = 'Developer', 500);
    setTimeout(() => typing.innerText = 'Tech Enthusist', 1500);
    setTimeout(() => typing.innerText = 'Cat Lover', 2500);
    setTimeout(() => typing.innerText = 'Fake Hacker', 3500);
    setTimeout(() => typing.innerText = 'Arch User', 4500);
    setTimeout(() => typing.innerText = 'Secret Agent', 5500);
}

typingChange();
setInterval(typingChange, 7000);

fetch('https://visitors.sx9.repl.co/').then(res => res.json()).then(data => {
    console.log(data);
    document.getElementById('counter').innerText = data.visits + "th";
}).catch(err => {
    console.log(err);
    document.getElementById('visits').remove();
});

document.getElementById('email').onclick = () => window.open('mailto:hello@mail.sx9.is-a.dev');
document.getElementById('discord').onclick = () => window.open('https://discord.st/sx-aircraft');
document.getElementById('github').onclick = () => window.open('https://github.com/SX-9');
document.getElementById('twitter').onclick = () => window.open('https://twitter.com/SX_Disord');
document.getElementById('share').onclick = window.open("https://twitter.com/share?url=" + window.location.href);
document.getElementById('pwa').onclick = install.prompt;

console.log(
    "%cHello%cWorld()", 
    "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold;", 
    "color:red; background-color: white; font-family: sans-serif; font-weight: bold;"
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('pwa/sw.js');
    console.log("Service Worker Registered!");
}
