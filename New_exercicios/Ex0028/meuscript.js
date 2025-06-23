const produtos = [
    { nome: "Arroz", preco: 10, categoria: "Alimentos" },
    { nome: "Feijão", preco: 8, categoria: "Alimentos" },
    { nome: "Camiseta", preco: 25, categoria: "Roupas" },
    { nome: "Calça", preco: 50, categoria: "Roupas" },
    { nome: "Mouse", preco: 100, categoria: "Eletrônicos" },
]

function retonar_arr(arr){
    const obj = {
        Alimentos:[],
        Roupas:[],
        Eletrônicos:[]
    }
    obj.Alimentos = arr.filter(item=>item.categoria == 'Alimentos')
    obj.Roupas = arr.filter(item=>item.categoria == 'Roupas')
    obj.Eletrônicos = arr.filter(item=>item.categoria == 'Eletrônicos')
    console.log(obj)
}

retonar_arr(produtos)