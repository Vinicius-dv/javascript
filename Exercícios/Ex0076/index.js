
const numbers = [1, 2, 3, 4, 5];

// o reduce aqui funciona da seguinte maneira o currentValue interaje com os elementos do array e o accumulator começa em 0 então o current value começa em 1 e o acumulador em 0 então faz a soma 0+1 1 dai o acumalador fica com o valor 1 e o currentValue vai para o 2 elemento do array ai faz a soma o aculador com o valor 1 e o current com o 2 , e assim por diante
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Saída: 15