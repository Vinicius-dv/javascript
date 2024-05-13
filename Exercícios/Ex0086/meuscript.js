const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp =  [...document.querySelectorAll('.op')]
const teclaRes = document.querySelectorAll('.res')
const display = document.getElementById('display')
const tOn = document.getElementById('ton')
const tLimpar = document.getElementById('tlimpar')
const res = document.getElementById('tigual')
const tcpy = document.getElementById('tcpy')
const teste = document.getElementById('teste')
const aba_gaveta = document.getElementById('aba_gaveta')
const calc = document.getElementById('calc')

let calculadoraVisivel = false
let sinal = false
let decimal = false
console.log(teclasNum)
console.log(teclasOp)

aba_gaveta.addEventListener('click',()=>{
    if (!calculadoraVisivel) {
        calc.style.left = '0px'
    } else {
        calc.style.left = '-260px'
    }
    calculadoraVisivel = !calculadoraVisivel
   
    
})

// para cada elemento ou tecla clicada eu preciso adicionar no display , no lugar de 0 
teclasNum.forEach((el)=>{
    el.addEventListener('click',(event)=>{
        sinal = false
      
        if(event.target.innerHTML == ','){
           if(!decimal){
            decimal = true 
            if(display.innerHTML == '0'){
                display.innerHTML  = '0.'
            }
           
            else{
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
            }
            if(event.target.innerHTML == ','){
                display.innerHTML += '.'
            }
    
            else{
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


tcpy.addEventListener('click',(event)=>{
    //navigator.clipboard.writeText(display.innerHTML)
    navigator.clipboard.writeText(display.innerHTML)
})




