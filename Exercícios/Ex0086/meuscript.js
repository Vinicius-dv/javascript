const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp =  [...document.querySelectorAll('.op')]
const teclaRes = document.querySelectorAll('.res')
const display = document.getElementById('display')
const tOn = document.getElementById('ton')
const tLimpar = document.getElementById('tlimpar')
const res = document.getElementById('tigual')


let sinal = false
console.log(teclasNum)
console.log(teclasOp)

// para cada elemento ou tecla clicada eu preciso adicionar no display , no lugar de 0 
teclasNum.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        sinal = false
        display.innerHTML += event.target.innerHTML
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        if(!sinal){
            sinal = true

            if( display.innerHTML =='0'){
                display.innerHTML = ''
                
            }
            if(event.target.innerHTML == 'x'){
                display.innerHTML += '*'
            } else{
                display.innerHTML += event.target.innerHTML
            }
            
        }
       
     
    })
})

tLimpar.addEventListener('click',(event)=>{
   sinal = false
    display.innerHTML = ''
})




