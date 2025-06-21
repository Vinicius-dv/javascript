function Calcular_troco(pagamento,preco_compra){
    let troco = pagamento-preco_compra
    return `Troco: R$${Number(troco).toFixed(2)}`
}

const retorno_troco  = Calcular_troco(100, 67.35)
console.log(retorno_troco)


function Validar_email(email){
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

const retorno_email = Validar_email('viniciushenrrique@gmail.com')
console.log(retorno_email)

function Converter_temp(c){
    const f = c*1.8+32+'°F'
    return `A conversão de Celsius ${c}°C para Fahrenheit = ${f}`
}

const retorno_temp = Converter_temp(25)
console.log(retorno_temp)

function Contar_palavras(str){
    let separar_palavras = str.split(' ')
    return separar_palavras.length
}

const retorno_palavras = Contar_palavras('Hoje o dia está bonito')
console.log(retorno_palavras)

function Verificar_num(n){
    let n_retornado = n%2 === 0 ? 'Par':'impar'
    return n_retornado
}

const retorno_num = Verificar_num(6)
console.log(retorno_num)


const carrinho = [
    { nome: "Camisa", preco: 49.9 },
    { nome: "Calça", preco: 89.5 },
    { nome: "Boné", preco: 25.0 }
]

function Calcular_total(subtotal){
    let preco = []
    let separar_preco = subtotal.forEach(item=>{
        preco.push(item.preco)
    })
    let res_total = preco.reduce((acc,valor)=>acc+valor,0)
    return 'Total: R$'+Number(res_total).toFixed(2)
}

const retorno_total = Calcular_total(carrinho)
console.log(retorno_total)

function Filtrar_nomes(nomes){
    let nome_filtrado = nomes.filter(n=>n.startsWith('A'))
    return nome_filtrado
}

const retorno_nomes = Filtrar_nomes(["Ana", "João", "Amanda", "Carlos"])
console.log(retorno_nomes)