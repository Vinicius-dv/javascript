let aluno = {nome:'Vinicius' , sobrenome:'Henrrique'}
let notas = {n1:80 , n2:75 , n3:92 , n4:85}
let info = { ...notas}


/*Nessa estruta abaixo perceba-se que eu percorro a variavel aluno ou seja cada propriedade do aluno ele vai colocar dentro de dados*/
for(let dados in aluno){
    console.log(aluno[dados])
}


/* Isso também funciona nas outras variaveis veja só */

for(let informação in info){
    console.log(info[informação])
}


