const buttonPlay = document.querySelector("#play");
const buttonPause = document.querySelector("#pause");
const buttonStop = document.querySelector("#stop");
const getMinute = document.querySelector("#minute");
const getSeconds = document.querySelector("#seconds");
const buttonSet = document.querySelector("#set");
const buttonSoundOff = document.querySelector("#sound-off");
const buttonSoundOn = document.querySelector("#sound-on");
let minutes

function countDown(){
    setTimeout(() =>{
        let seconds = +getSeconds.innerText
        let minutes = +getMinute.innerText;

        if (minutes <= 0) {
            buttonPlay.classList.remove("hidden");
            buttonPause.classList.add("hidden");

            buttonSet.classList.remove("hidden");
            buttonStop.classList.add("hidden");
            return
        }

        if (seconds <= 0){
            seconds = 10;
            getMinute.innerText = String(minutes - 1).padStart(2, "0");
        }
        getSeconds.innerText =  String(seconds - 1).padStart(2, "0")

    countDown()
    }, 1000);
}


buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.add("hidden");
    buttonPause.classList.remove("hidden");

    buttonSet.classList.add("hidden");
    buttonStop.classList.remove("hidden");

    countDown();

});

buttonPause.addEventListener("click", () => {
    buttonPlay.classList.remove("hidden");
    buttonPause.classList.add("hidden");
});

buttonStop.addEventListener("click", () => {
    buttonSet.classList.remove("hidden");
    buttonPlay.classList.remove("hidden");
    buttonStop.classList.add("hidden");
    buttonPause.classList.add("hidden");
});

buttonSoundOn.addEventListener("click", () =>{
    buttonSoundOn.classList.add("hidden");
    buttonSoundOff.classList.remove("hidden");
});

buttonSoundOff.addEventListener("click", () =>{
    buttonSoundOff.classList.add("hidden");
    buttonSoundOn.classList.remove("hidden");
});

buttonSet.addEventListener("click", () =>{
    minutes = +prompt("Informe quantos minutos?");
    getMinute.innerText = String(minutes).padStart(2, "0");
})
