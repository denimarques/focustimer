const cafeteria = new Audio("http://localhost:63342/FocusTimer/public/sounds/cafeteria.wav ");
const chuva = new Audio("http://localhost:63342/FocusTimer/public/sounds/chuva.wav ");
const floresta = new Audio("http://localhost:63342/FocusTimer/public/sounds/floresta.wav ");
const lareira = new Audio("http://localhost:63342/FocusTimer/public/sounds/lareira.wav ");

function playCafeteira(){
    cafeteria.loop = true;
    cafeteria.play();
}

function playChuva(){
    chuva.loop = true;
    chuva.play();
}

function playFloresta(){
    floresta.loop = true;
    floresta.play();
}

function playLareira(){
    lareira.loop = true;
    lareira.play();
}
function stopAudio(){
    cafeteria.pause();
    chuva.pause();
    floresta.pause();
    lareira.pause();
}

export {
    playCafeteira,
    playChuva,
    playFloresta,
    playLareira,
    stopAudio,
}