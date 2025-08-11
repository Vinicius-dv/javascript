function converter(s){
    const valores = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let res = 0
    for(let i=0;i<s.length;i++){
       const atual = valores[s[i]]
       const prox  = valores[s[i+1]]
       if(prox&&atual<prox){
        res-=atual
       }else{
        res+=atual
       }
    }
    console.log(res)
}
converter('MCMXCIV')
