function bolo_velas(velas){
   let max = Math.max(...velas)
   let count = velas.filter(n=>n===max).length
   console.log(count)
}
bolo_velas([4,4,1,3])