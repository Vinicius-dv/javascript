let numeros = [10,20,30,40,50,60,70,80,90]
let [a,b,c,...d] = numeros
console.log(a,b,c,d)


let obj = {nome:'Bruno',curso:'javascript',canal:'CFBcursos'}
let {nome,curso} = obj

console.log(nome,curso)

const cores = ()=>{
    return ['verde','vermelho','azul','roxo']
}
let [c1,c2,,c3]=cores()
console.log(c1,c2,c3)


let texto = 'Curso de javascript'
let [p1,p2,p3]= texto.split(' ')
console.log(p1,p2,p3)









/*

const formatar = Intl.NumberFormat('en',{
    notation:'compact'
})

console.log(formatar.format(123456))*/
