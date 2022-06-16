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
    window.open('https://discord.gg/Pj2Qgqd');
}
document.getElementById('github').onclick = () => {
    window.open('https://github.com/SX-9');
}
document.getElementById('twitter').onclick = () => {
    window.open('https://twitter.com/SX_Disord');
}
document.getElementById('share').onclick = () => {
    window.open('https://twitter.com/share?text=Check%20Out20%@SX_Disord%20Website!&url=https://sx-9.repl.co/');
}

console.log(
    "%cHello%cWorld()", 
    "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold;", 
    "color:red; background-color: white; font-family: sans-serif; font-weight: bold;"
);