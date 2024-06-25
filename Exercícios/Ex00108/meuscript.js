const carro = document.getElementById('carro')
const btn_esquerda = document.getElementById('btn-esquerda')
const btn_direita = document.getElementById('btn-direita')

const init = ()=>{
    carro.style= "position:relative;left:0px"
   
}


btn_esquerda.addEventListener('click',()=>{
    carro.style.left = parseInt(carro.style.left) -10 + 'px'
})

btn_direita.addEventListener('click',()=>{
    let pos = parseInt(carro.style.left)
    pos+= 10
        carro.style = `position:relative;left:${pos}px`
   
})

window.addEventListener('load',init())