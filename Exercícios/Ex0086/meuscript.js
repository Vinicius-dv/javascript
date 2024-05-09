const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp =  [...document.querySelectorAll('.op')]
const teclaRes = document.querySelectorAll('.res')
const display = document.getElementById('display')
const tOn = document.getElementById('ton')
const tLimpar = document.getElementById('tlimpar')
const res = document.getElementById('tigual')


let sinal = false
let decimal = false
console.log(teclasNum)
console.log(teclasOp)

// para cada elemento ou tecla clicada eu preciso adicionar no display , no lugar de 0 
teclasNum.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        sinal = false
      
        if(event.target.innerHTML == ','){
           if(!decimal){
            decimal = true 
            if(display.innerHTML == '0'){
                display.innerHTML  = '0,'
            }else{
                display.innerHTML += event.target.innerHTML
            }
           }
        }else{
            if( display.innerHTML =='0'){
                display.innerHTML = ''
                
            }
            display.innerHTML += event.target.innerHTML
           }
        
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
   decimal = false
    display.innerHTML = ''
})

res.addEventListener('click',()=>{
    sinal = false
   decimal = false
    const result = eval(display.innerHTML)
    display.innerHTML = result
})




