import {startTree, removeBg} from "./events.js";
import {play, stop, more, less, getMinutes, getSeconds} from "./elements.js";
import { stopAudio } from "./sounds.js";
import { hold, updateDisplay } from "./actions.js";
import darkMode from "./darkmode.js";


let minutes = +getMinutes.textContent;

play.addEventListener("click", () => {
    startTree();
});
stop.addEventListener("click", () => {
    hold()
    stopAudio();
    removeBg();
    updateDisplay(minutes, 0);
});
more.addEventListener("click", () => {
    let minutes = +getMinutes.textContent;
    let seconds = +getSeconds.textContent;

    updateDisplay(minutes + 5, seconds)
});
less.addEventListener("click", () => {
    let minutes = +getMinutes.textContent;
    let seconds = +getSeconds.textContent;

    if ((minutes - 5) < 0) {
        return
    }

    updateDisplay(minutes - 5, seconds)
});

darkMode();
