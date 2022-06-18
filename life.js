const typingChange = () => {
    const typing = document.getElementById('typing');

    setTimeout(() => {
        typing.innerHTML = 'Developer';
    }, 0);

    setTimeout(() => {
        typing.innerHTML = 'Tech Enthusist';
    }, 1500);

    setTimeout(() => {
        typing.innerHTML = 'Cat Lover';
    }, 2500);

    setTimeout(() => {
        typing.innerHTML = 'Fake Hacker';
    }, 3500);
    
    setTimeout(() => {
        typing.innerHTML = 'Secret Agent';
    }, 4500);
}

typingChange();
setInterval(typingChange, 7000);

fetch('https://visitorcounter.sx9.repl.co/').then(res => res.json()).then(data => {
    console.log(data);
    document.getElementById('counter').innerText = data.visits + "th";
}).catch(err => {
    console.log(err)
    document.getElementById('visits').remove()
});

document.getElementById('bot').onclick = () => {
    window.open('https://top.gg/bot/889384219678232606');
}

document.getElementById('chat').onclick = () => {
    window.open('https://x-cord-client.sx9.repl.co');
}

document.getElementById('email').onclick = () => {
    window.open('mailto:sx-91@outlook.com');
}

document.getElementById('discord').onclick = () => {
    window.open('https://discord.st/sx-aircraft');
}
document.getElementById('github').onclick = () => {
    window.open('https://github.com/SX-9');
}
document.getElementById('twitter').onclick = () => {
    window.open('https://twitter.com/SX_Disord');
}
document.getElementById('share').onclick = () => {
    window.open('https://twitter.com/share?url=https://sx9.is-a.dev/');
}

console.log(
    "%cHello%cWorld()", 
    "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold;", 
    "color:red; background-color: white; font-family: sans-serif; font-weight: bold;"
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
    console.log("Service Worker Registered!");
}