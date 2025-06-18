const produtos = [
    { id: 1, nome: "Camisa", preco:15},
    { id: 2, nome: "Calça", preco: 80 },
    { id: 3, nome: "Tênis", preco: 20 }
]
  
const carrinho = [
    { idProduto: 1, quantidade: 2 },
    { idProduto: 3, quantidade: 1 }
]

function Calcular_subtotal(produtos,carrinho){
    let subtotal = 0
    carrinho.map(item=>{
       let prod = produtos.find(prod=> prod.id ==item.idProduto) 
       if(prod){
        subtotal+=prod.preco*item.quantidade
       }
    })
    return subtotal
}
const subtotal = Calcular_subtotal(produtos,carrinho)

function Calcular_desconto(subtotal){
    let total;
    let desconto = subtotal*0.10
    if(subtotal>200){
        total = subtotal-desconto
    }else{
        total = subtotal
        desconto = 0
    }
    return {total,desconto}
}
const {total,desconto} = Calcular_desconto(subtotal)

function Calcular_frete(total){
    let frete;
    if(total<100){
        frete = 20
    }else{
        frete = 0
    }
    return frete
}

const frete = Calcular_frete(total)


function Calculo_final(subtotal,total,desconto,frete){
    let total_final = total+frete
    let obj_final = {
        subtotal:subtotal,
        total:total,
        desconto:desconto,
        frete:frete,
        total_final:total_final
    }
    return obj_final
}

const calc = Calculo_final(subtotal,total,desconto,frete)
console.log(calc)