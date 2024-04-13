const ligar = document.getElementById('ligado')
const desligar = document.getElementById('desligado')
const lamp = document.getElementById('lampada')

function lampIsbroken(){
    return lamp.src.indexOf('quebrada') >-1
}



function lampOn(){
    if(!lampIsbroken()){
        lamp.src = './imagens/ligada.jpg'
    }
  
}
function lampOf(){
    if(!lampIsbroken()){
        lamp.src = './imagens/desligada.jpg'
    }
    
}
function lampBroken(){
    lamp.src = './imagens/quebrada.jpg'
}

ligar.addEventListener('click',lampOn)
desligar.addEventListener('click',lampOf)
lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseleave',lampOf)
lamp.addEventListener('dblclick',lampBroken)