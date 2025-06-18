function arr(arr){
    const contagem ={}
    for(let num of arr){
        if(contagem[num]){
            contagem[num]+=1
        }else{
            contagem[num] = 1
        }
    }
    let num_res;
    for(let num in contagem){
        if(contagem[num]%2!==0){
            num_res = num
        }
    }
    console.log(num_res)
}

arr([1, 2, 3, 2, 3, 1, 3])