document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
});

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
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    install = e;
});
const installPrompt = () => install.prompt();

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

fetch('https://visitors.sx9.repl.co/').then(res => res.json()).then(data => {
    console.log(data);
    document.getElementById('counter').innerText = data.visits + "th";
}).catch(err => {
    if (err.status === 429) {
        alert("You Are Rate Limited");
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        document.getElementById('counter').innerText = "You Are Rate Limited For 2 Hours!";
    }
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
    window.open(`https://twitter.com/share?url=${window.location.href}`);
}
document.getElementById('pwa').onclick = () => {
    installPrompt();
}

console.log(
    "%cHello%cWorld()", 
    "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold;", 
    "color:red; background-color: white; font-family: sans-serif; font-weight: bold;"
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('pwa/sw.js');
    console.log("Service Worker Registered!");
}
