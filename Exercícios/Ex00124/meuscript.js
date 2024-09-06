const timer = document.getElementById('timer')
const btn_iniciar = document.getElementById('btn_iniciar')
const btn_parar = document.getElementById('btn_parar')
const btn_zerar = document.getElementById('btn_zerar')
const btn_parcial = document.getElementById('btn_parcial')
const tempo = document.getElementById('tempo')
let parciaisregistrada = document.getElementById('parciaisregistradas')
let intervalo = null

let tmp_inicial = null

const contador = ()=>{
    const tmp_atual = Date.now()
    let cont = tmp_atual-tmp_inicial
    let seg = (tmp_atual-tmp_inicial)/1000
    timer.innerHTML = converter(seg)
}

const converter = (seg)=>{
    //Pq 3600 ? bom 3600 é a quantidade de segundos que eu tenho em uma hora 
    const hora = Math.floor(seg/3600)
    // Aqui eu estou obtendo o resto da divisão
    const resto = seg%3600
    const min = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const form = (hora<10?'0'+hora:hora)+':'+ (min<10?'0'+min:min)+':'+ (segundo<10?'0'+segundo:segundo)
   return form
}

btn_iniciar.addEventListener('click',()=>{
    tmp_inicial = Date.now()
    intervalo = setInterval(contador,1000)
})
btn_parcial.addEventListener('click',(evt)=>{
    let parcial = timer.innerHTML
    parciaisregistrada.innerHTML += parcial+'<br>'

})
btn_parar.addEventListener('click',()=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener('click',()=>{
    tmp_inicial = Date.now()
    timer.innerHTML = '00:00:00'

})


contador()