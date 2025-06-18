function bolo_velas(n){
    let max = Math.max(...n)
    let n_index = 0
    for(let i=0;i<n.length;i++){
        if(n[i]==max){
            n_index+=1
        }
    }
    console.log(n_index)
}

bolo_velas([7, 6, 7, 7, 6])

