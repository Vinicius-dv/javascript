let notas = [100, 80, 75, 50];

//Se eu trocar para in eu recebo o valor indice que no caso acima é 0 , 1 , 2 e 3 
let aprovados = 0;
let reprovados = 0;

for (let dado of notas) {
    if (dado > 60) {
        aprovados++;
        
    } else {
        reprovados++;
       
    }
}


console.log('Aprovados: ' + aprovados);
console.log('Reprovados: ' + reprovados);

