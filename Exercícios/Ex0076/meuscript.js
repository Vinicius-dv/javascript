
// Objetivo é encontrar o total de launches feito por todos esses países e vamos usar o reduce para isso
const rockets = [
   {Country: 'Russia', launches: 32},
   {Country: 'Us', launches: 23},
   {Country: 'China', launches: 16},
   {country: 'Europe', launches: 7},
   {country: 'India', launches: 4},
   {country: 'Japão', launches: 3}
]

//No caso oque estamos fazendo é somar o valor anterior com o numero de launches
const totalLaunches = rockets.reduce((preval, elemAtual)=> preval + elemAtual.launches ,0)
console.log(totalLaunches)