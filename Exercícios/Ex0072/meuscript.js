const idades = [15,18,16,19,22]

/*const maior = idades.filter((valor,indice,array)=>{

})*/
const maior = idades.filter((valor)=>{
    if(valor >= 18)
    return valor
})

console.log(idades)
console.log(`As idades maiores de 18 anos são:  ${maior}`)

const menor = idades.filter((valores)=>{
    if(valores<18)
    return valores
})

console.log(`As idades menores de 18 são: ${menor}`)