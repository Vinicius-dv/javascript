const a = parseInt(prompt('Digite um número'));
const b = parseInt(prompt('Digite outro número'));

// Verificar se são números válidos
if (isNaN(a) || isNaN(b)) {
    console.log("Por favor, insira números válidos.");
} else {
    // Realizar cálculos e exibir resultados
    console.log("Soma:"+ a + b);
    console.log("Subtração:"+ a - b);
    console.log("Multiplicação:"+ a * b);
    
    // Verificar se b é zero para evitar divisão por zero
    if (b !== 0) {
        console.log("Divisão:"+ a / b);
        console.log("Resto:"+ a % b);
    } else {
        console.log("Impossível dividir por zero");
    }
}