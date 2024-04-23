const p_array = document.getElementById('array')
const btnRdeuzir = document.getElementById('btn-reduzir')
const resultado = document.getElementById('resultado')

const elementos_array = [1,2,3,4,5]
let aux[]
p_array.innerHTML = '['+elementos_array+']'
// o resultado vai ser 15 pq 15 é a redução do array pq eu pedi a soma 
btnRdeuzir.addEventListener('click', (evento)=>{
    resultado.textContent = elementos_array.reduce((anterior,atual,pos)=>{
        aux += atual*2
        return atual+anterior
    })
})