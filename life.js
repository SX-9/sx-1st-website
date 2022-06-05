let deferredPrompt;

fetch('https://visitorcounter.sx9.repl.co/').then(res => res.json()).then(data => {
    console.log(data);
    document.getElementById('counter').innerText = data.visits;
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

window.addEventListener('appinstalled', (evt) => {
    alert('Thanks for installing!');
});

document.getElementById('web').onclick = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            alert('Thanks for installing my pwa!');
        }
    });
};

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
    window.open('https://discord.gg/Pj2Qgqd');
}
document.getElementById('github').onclick = () => {
    window.open('https://github.com/SX-9');
}
document.getElementById('twitter').onclick = () => {
    window.open('https://twitter.com/SX_Disord');
}