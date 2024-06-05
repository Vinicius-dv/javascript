const n1 = document.getElementById('n1')
const clicou = document.getElementById('clicou')
const res = document.getElementById('res')

clicou.addEventListener('click',() =>{
   let valor1 = parseInt(n1.value)
   if(valor1 %2 == 0){
    res.innerHTML = 'Par'
   } else{
    res.innerHTML = 'Impar'
   }
})

let arr = [21 ,5,67,2,90,1]

// se n1 for menor que n2 o n1 vai vim antes de n2 e o sort organiza tudo isso e vice versa , se os numeros for igual a sequencia não muda
arr.sort((n1,n2) => n1-n2)
console.log(arr)


