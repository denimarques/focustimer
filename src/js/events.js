import {countDown} from "./actions.js";
import {cloud, hot, shop, tree} from "./elements.js";
import { hold } from "./actions.js";
import {playCafeteira, playChuva, playFloresta, playLareira, stopAudio} from "./sounds.js";

function removeBg(){
    tree.classList.remove("bg-regence-blue", "dark:bg-slate-300");
    cloud.classList.remove("bg-regence-blue", "dark:bg-slate-300");
    shop.classList.remove("bg-regence-blue", "dark:bg-slate-300");
    hot.classList.remove("bg-regence-blue", "dark:bg-slate-300");
}

function setDefault(){
    hold();
    countDown();
    removeBg();
    stopAudio();
}

function startTree(){
    setDefault()
    tree.classList.add("bg-regence-blue", "dark:bg-slate-300");
    playFloresta();
}

tree.addEventListener("click", (e) => {
    setDefault()
    e.currentTarget.classList.add("bg-regence-blue", "dark:bg-slate-300");
    playFloresta();
});
cloud.addEventListener("click", (e) => {
    setDefault()
    e.currentTarget.classList.add("bg-regence-blue", "dark:bg-slate-300");
    playChuva();
});
shop.addEventListener("click", (e) => {
    setDefault()
    e.currentTarget.classList.add("bg-regence-blue", "dark:bg-slate-300");
    playCafeteira();
});
hot.addEventListener("click", (e) => {
    setDefault()
    e.currentTarget.classList.add("bg-regence-blue", "dark:bg-slate-300");
    playLareira();
})

export {
    startTree,
    removeBg
}