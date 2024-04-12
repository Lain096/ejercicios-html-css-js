let content = document.querySelector("#contenido")


function changeHour(){

    let date = new Date();

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    content.innerText = "Hora: " + hours + ": " + mins + ": " + secs;

}

setInterval(changeHour, 1000)