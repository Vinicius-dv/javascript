const obj = {
    "compras":[
        {
            "data": "2022-01-01",
            "produtos": [
                {
                    "cod": "a",
                    "qtd": 2,
                    "valor_unitario": 12.24
                },
                {
                    "cod": "b",
                    "qtd": 1,
                    "valor_unitario": 3.99
                },
                {
                    "cod": "c",
                    "qtd": 3,
                    "valor_unitario": 98.14
                }
            ]
        },
        {
            "data": "2022-01-02",
            "produtos": [
                {
                    "cod": "a",
                    "qtd": 6,
                    "valor_unitario": 12.34
                },
                {
                    "cod": "b",
                    "qtd": 1,
                    "valor_unitario": 3.99
                },
                {
                    "cod": "c",
                    "qtd": 1,
                    "valor_unitario": 34.02
                }
            ]
        }
    ]
}

const separar_obj = [obj.compras]
const soma_num =  []
separar_obj.forEach((item)=>{
    item.forEach((item_02)=>{
       item_02.produtos.forEach((valor_uni)=>{
        soma_num.push(valor_uni.valor_unitario)
       })
    })
})
console.log(soma_num.reduce((acc,valor)=>acc+valor,0))
