function soma(n){
   const num_min = Math.min(...n)
   const num_max = Math.max(...n)
   let total = n.reduce((acc,valor)=> acc+valor,0)
   let soma_min = total-num_max
   let soma_max = total-num_min
   console.log(soma_min,soma_max)
}

soma([1,3,5,7,9])