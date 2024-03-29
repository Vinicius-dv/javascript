let respostas = ['A' , 'B' , 'A' , 'E' , 'C' , 'B']
let gabarito  = ['C' , 'B', 'A' , 'D' ,'E' ,'B']

let acertou = 0

for(r = 0; r<respostas.length ; r++){
    if(respostas[r] === gabarito[r]){
        acertou++
    }
}


console.log('Você acertou ' +acertou + ' Perguntas'); 