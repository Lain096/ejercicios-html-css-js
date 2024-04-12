const colores = ["red", "blue", "green", "yellow"]

let i= 0;
const content = document.querySelector("#contenido");

function changeColors(){

    content.style.backgroundColor = colores[i];

    //content.styles.backgroundColor = colores[i];
    
    i = (i===colores.length-1)?0:i+1;
};

setInterval(changeColors,1000);

