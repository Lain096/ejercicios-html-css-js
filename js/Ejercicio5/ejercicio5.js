let timer = document.querySelector(".timer");
let startBtn = document.querySelector("#start");
let endBtn = document.querySelector("#end");
let totalSeconds = document.querySelector("#quant");
let intervalId;

function startTimer(){
    //let seconds = parseInt(totalSeconds.value);
    
    timer.textContent = parseInt(totalSeconds.value)
    intervalId = setInterval(() => {
        if (parseInt(timer.textContent) > 0) {
        // si lo meto dentro de una variable, el conteo se hace "raro",
        // como que resta 2 y suma 1 (que al final sale lo mismo, pero es raro)
          
        // seconds--;
        // timer.textContent = seconds;

           timer.textContent = parseInt(timer.textContent) -1;

        } else {
            clearInterval(intervalId);
            timer.textContent = "¡Tiempo terminado!";
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(intervalId);
}

startBtn.addEventListener("click", startTimer)
endBtn.addEventListener("click", stopTimer);


