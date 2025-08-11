/*const arr = [1,2,2,3]
const target = 3
let res = []
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            res.push(i+1,j+1)
        }
    }
}
console.log(res)*/


//Ao inves de usar 2 fors eu usaria uma técnica melhor que facilitaria o desempenho
const arr = [1,3,5,8]
const target = 4
let i = 0
let j = arr.length-1
while(i<j){
    let soma_att = arr[i]+arr[j]
    if(arr[i]+arr[j]==target){
       console.log(i+1,j+1)
    }
    if(soma_att<target){
        i++
    }else{
        j--
    }
}


// [1,3,5,8]
// i = 1 e j = 8
// pegamos a soma atual que é 1+8=9 e se for igual ao target, retornamos o index atual do i e j, e tbm verificamos, se a soma atual, é menor que o target, se for, o i vai para o próximo elemento, e o j permanece no mesmo index, agr se a soma for maior que o target, eu volto um elemento do j, e o i continua o mesmo, ai eu faço a soma, até ser igual ao target