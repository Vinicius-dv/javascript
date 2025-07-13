function palindromo(n){
    let str_n = String(n)
    let arr_str = str_n.split('')
    let arr_invertido = arr_str.reduce((acc,valor)=>[valor,...acc])
    let res = []
    for(let i=0;i<arr_str.length;i++){
        if(arr_str[i]===arr_invertido[i]){
            res.push(true)
        }else{
            res.push(false)
        }
    }
    let determinar_res = res.includes(false)
    if(determinar_res){
        return false
    }else{
        return true
    }
}
palindromo(121)