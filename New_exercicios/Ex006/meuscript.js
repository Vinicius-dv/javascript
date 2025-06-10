function escada(n){
    let forquilha = ''
    for(let i = 0;i<n;i++){
        forquilha += '#'
        let espaco = ' '.repeat(n-i-1)
        console.log(espaco+forquilha)
    }
}

escada(10)