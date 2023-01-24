import { getMinutes, getSeconds } from "./elements.js";
import { stopAudio } from "./sounds.js";

let minutes = +getMinutes.textContent;
let idTimeOut
function countDown() {
    idTimeOut = setTimeout(() => {
        let minutes = +getMinutes.textContent;
        let seconds = +getSeconds.textContent;


        if (minutes <= 0 && seconds <= 0) {
            stopAudio();
            updateDisplay();
            return;
        }

        if (seconds <= 0) {
            seconds = 60;
            --minutes;
        }

        updateDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)
}

function hold(){
    clearTimeout(idTimeOut);
}

function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    getMinutes.textContent = String(newMinutes).padStart(2, "0");
    getSeconds.textContent = String(seconds).padStart(2, "0");
}

export {
    countDown,
    updateDisplay,
    hold
}