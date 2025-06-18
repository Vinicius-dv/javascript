function contar_pares(arr,target){
   let contador = 0
   for(let i=0;i<arr.length;i++){
      for(let j=0+i;j<arr.length;j++){
         if(arr[i]+arr[j]==target){
            contador+=1
         }
   }
}
console.log(contador)
}
contar_pares([1, 5, 7, -1, 5], 6)