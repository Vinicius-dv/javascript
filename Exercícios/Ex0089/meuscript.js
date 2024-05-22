const div_data = document.getElementById('div_data')
const div_relogio = document.getElementById('div_relogio')
const btn_ativar = document.getElementById('btn_ativar')
const btn_parar = document.getElementById('btn_parar')
const tmp_alarme = document.getElementById('tmp_alarme')
const hora_alarme = document.getElementById('hora_alarme')
const timer = document.getElementById('timer')

const alarme = new Audio('alarme.mp3')
alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false 
let alarme_tocando = false

btn_ativar.addEventListener('click' ,() =>{
    ts_atual = Date.now()
    ts_alarme = ts_atual+(tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = 'Hora do alarme'+dt_alarme.getHours()+':'+dt_alarme.getMinutes()+':'+dt_alarme.getSeconds()
})
btn_parar.addEventListener('click' ,() =>{
    let alarme_ativado = false 
    let alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do alarme'
    tmp_alarme.value = 0
    timer.classList.remove('alarme')
    alarme.pause()
    alarme.currentTime = 0
})

const c = ()=>{
    const data = new Date
    div_relogio.innerHTML = data.toLocaleTimeString('pt-BR')
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true 
            alarme.play()
            timer.classList.add('alarme')
        }
    }
}

setInterval(()=>{
    c()
},1000)




