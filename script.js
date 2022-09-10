

let lampada = document.querySelector(".lampada");
let button = document.querySelector("button");


button.addEventListener("click",function(event){

    event.preventDefault();

    lampada.classList.toggle("desligada");

    if(lampada.classList.contains("desligada")){
        lampada.src="imagem/apagada.jpg"
        button.textContent="Ligar"
    }
    else{
        lampada.src="imagem/ligada.jpg"
        button.textContent="Desligar"
        
    }




})