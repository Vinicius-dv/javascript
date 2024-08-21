const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

function obterNUm(){

const end_point = "http://localhost:3000/"
fetch(end_point)
.then(res=>res.json())
.then(dados=>{
    p_temp.innerHTML = dados.temperatura
    p_nivel.innerHTML = dados.nivel
    p_press.innerHTML = dados.pressão
    console.log(dados)
})

}

let intervalo = setInterval(obterNUm,1000)
