const carrinho = [  
    { Produto: 'Peixe', Quantidade: 2, Total: 59.60 },
    { Produto: 'Arroz', Quantidade: 1, Total: 10.00 },
    { Produto: 'Feijão', Quantidade: 1, Total: 12.00 }
]
function add_car(nome_prod,qtd_prod,subtotal_prod){
    let conta_total = subtotal_prod*qtd_prod
    carrinho.push({Produto:nome_prod,Quantiddade:qtd_prod,Total:conta_total})
    return {nome_prod,qtd_prod,subtotal_prod}
}
const {nome_prod,qtd_prod,subtotal_prod} = add_car('Celular',2,29.80)

function remover_car(nome_real,nome_prod){
  const index = carrinho.findIndex(item=>item.Produto == nome_prod)
  if(index!==-1){
    carrinho.splice(index,1)
  }else{
    console.log('Errou seu merda')
  }
}
remover_car(nome_prod,'Celular')

function att_car(nome_prod,qtd_prod_att,subtotal_prod_att){
    let pegar_nome = carrinho.filter(item=>item.Produto == nome_prod)
    let total = subtotal_prod_att*qtd_prod_att
    pegar_nome.forEach((item)=>{
        item.Quantiddade = qtd_prod_att
        item.Total = total
    })
    return {qtd_prod_att,total}
}
const {qtd_prod_att,total} = att_car('Peixe',6,subtotal_prod)

function listar_car(nome_prod,qtd_prod_att,subtotal_prod_att){
    return `Produto:${nome_prod} | Quantidade:${qtd_prod_att} | Subtotal:${subtotal_prod_att}`
}
const listar_prod = listar_car(nome_prod,qtd_prod_att,total)
console.log(carrinho)
console.log(listar_prod)

