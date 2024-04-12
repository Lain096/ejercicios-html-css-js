let content = document.querySelectorAll(".now");


function updateTime(){
    let date = new Date();

    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    content.forEach(time =>{
        time.innerText = "Horas: " + hour + " Minutos: " + min + " Segundos: " + sec;
    })
}

setInterval(updateTime, 1000)