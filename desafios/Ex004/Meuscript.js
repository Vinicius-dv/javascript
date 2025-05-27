const produtos = [
    {nome_produto:'Perfume',preço:150},
    {nome_produto:'Lanche',preço:25},
    {nome_produto:'Pizza',preço:60},
    {nome_produto:'Celular',preço:2000}
]

function list_tarefas(produtos,max,min){
    const produtos_filtrados = produtos.filter((item)=>item.preço>=min&&item.preço<=max)
    console.log(produtos_filtrados)
    const produtos_retornados = produtos_filtrados.map((itens,index)=>{
       const lista_retorna = document.createElement('p')
       lista_retorna.innerText = itens.nome_produto
       const preço_prod = document.createElement('p')
       preço_prod.innerText = 'Preço itens: '+'R$'+itens.preço
       const body = document.body
       body.appendChild(lista_retorna)
       body.appendChild(preço_prod)
    })
}

list_tarefas(produtos,1500,30)

