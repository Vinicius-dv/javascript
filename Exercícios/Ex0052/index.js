/*n1 = 5
n2 = 10
n3 = 15 

var soma = n1+n2+n3

console.log(soma)
var media = soma/3

console.log(media)*/


// Defina os números em um array
var numeros = [5, 10, 15];

// Função para calcular a soma
function calcularSoma(numeros) {
    var soma = 0;
    for (var i = 0; i < numeros.length; i++) {
        soma +=numeros[i];
    }
    return soma;
}

// Função para calcular a média
function calcularMedia(soma, quantidade) {
    return soma / quantidade;
}

// Chama a função para calcular a soma
var soma = calcularSoma(numeros);
console.log("Soma:", soma);

// Chama a função para calcular a média
var media = calcularMedia(soma, numeros.length);
console.log("Média:", media);
    
