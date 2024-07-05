let numeros = ()=>{
    return [10,20,30,40]
}

let [a,b,c,d] = numeros()

console.log(a,b,c,d)

const formatar = Intl.NumberFormat('en',{
    notation:'compact'
})

console.log(formatar.format(123456))
