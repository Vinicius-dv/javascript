const produtos = [
    { id: 1, nome: "Camiseta", preco: 29.90, categoria: "roupas" },
    { id: 2, nome: "Calça Jeans", preco: 89.90, categoria: "roupas" },
    { id: 3, nome: "Tênis", preco: 159.90, categoria: "calçados" },
    { id: 4, nome: "Livro", preco: 39.90, categoria: "livros" },
    { id: 5, nome: "Smartphone", preco: 899.90, categoria: "eletrônicos" }
  ];
  
  const carrinho = [
    { produtoId: 1, quantidade: 2 },
    { produtoId: 3, quantidade: 1 },
    { produtoId: 5, quantidade: 1 }
  ];
  

//Para calcular o subtotal fazemos o seguinte:
function calcularSubtotal(carrinho,produtos){
    //iniciamos a varivel que vai armazenar o total
    let subtotal = 0;
    //Percorremos o carrinho, e procuramos pelo produto que o id é igual ao id do carrinho e adicionamos ao subtotal o resultado
    carrinho.map(item=>{
        const produto = produtos.find(prod=> prod.id==item.produtoId)
        if(produto){
            subtotal+= produto.preco*item.quantidade
        }
    })
    return subtotal
}
//calcularSubtotal(carrinho,produtos)
const subtotal = calcularSubtotal(carrinho, produtos)
function aplicarDesconto(subtotal,codigoDesconto){
    if(codigoDesconto ==''){
        return subtotal
    }
    let total;
    let desconto;
    if(codigoDesconto ==='PRIMEIRA10'){
        desconto = subtotal*0.10
        total = subtotal-desconto
    }else if(codigoDesconto ==='FRETE20'){
        desconto = subtotal*0.20
        total = subtotal-desconto
    }else if(codigoDesconto ==='VIP15'){
        desconto = subtotal*0.15
        total = subtotal-desconto
    } 
    return total
}
//aplicarDesconto(1119.70,'PRIMEIRA10')
const valorComDesconto = aplicarDesconto(1119.70, "PRIMEIRA10")

function calcularFrete(subtotal,frete){
    let price_frete = 0
    if(frete.startsWith('01')){
        price_frete = parseFloat(10)
    }else if(frete.startsWith('02')||frete.startsWith('03')){
        price_frete = parseFloat(15)
    }else{
        price_frete = parseFloat(25)
    }
    if(subtotal>500){
        price_frete = parseFloat(0)
    }
    return price_frete
}

calcularFrete(600,'05234-567')

function processarCompra(subtotal, valorComDesconto){
    let desconto = Number(subtotal-valorComDesconto).toFixed(2)
    let obj_final = {
        subtotal:subtotal,
        valorComDesconto:valorComDesconto,
        desconto:desconto
    }
    console.log(obj_final)
}

processarCompra(subtotal,valorComDesconto)