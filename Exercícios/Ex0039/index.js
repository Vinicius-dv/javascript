let preço = 200
let total = preço
let região = 'Sul'
let fretegratis = (preço >150 && região == 'Sul')
let premium = false
if(!fretegratis){
    total +=25
}else if(fretegratis == true){
    total -=10
}

if(premium || total >=220){
    total-=15
}

console.log('Você vai pagar neste produto '+total+ ' R$')