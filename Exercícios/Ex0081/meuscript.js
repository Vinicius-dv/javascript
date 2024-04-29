const pessoa  = {
    nome: 'bruno' ,
    canal: 'cfbcursos',
    curso: 'Javascript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'variaveis',
        aula03: 'condicionais'
    }
}


const s_json = JSON.stringify(pessoa)
console.log(pessoa)
console.log(s_json)

/*let arr = [1,2,3,4,5]

const soma = arr.reduce( (total, current)=>{
    return total + current
},0)

console.log(soma)*/

