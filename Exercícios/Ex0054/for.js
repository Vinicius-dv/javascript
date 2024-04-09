let nome = prompt('Informe seu nome')
let senha = prompt('Informe uma senha')

for(i=0; i<nome.length; i++){
    if(nome[i] === senha[i]){
        prompt('parece que a alguma informação errada')
    }
}