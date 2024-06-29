const carro = document.getElementById('carro')
const rodar = document.getElementById('btn-rodar')
const parar = document.getElementById('parar')

const init = ()=>{
    carro.style= "position:relative;left:0px;width:100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
   
}

let anima = null
let tamMax = null
let dir = 0


const mover = ()=>{
   
        if(parseInt(carro.style.left) >=tamMax){
            dir = -1
        }else if(parseInt(carro.style.left) <=0){
            dir = 1
        } 
    

      carro.style.left = parseInt(carro.style.left) +(10*dir) + 'px'
      anima = setTimeout(mover,20)


    
}



parar.addEventListener('click',()=>{
    clearTimeout(anima)
})
rodar.addEventListener('click',()=>{
   mover()
})




window.addEventListener('load',init())

window.addEventListener('resize',()=>{
    tamMax = window.innerWidth - parseInt(carro.style.width)
})
