let input = [
    '13', '\r', '\n',
    '2', ' ',  '1',
    ' ', '2','2'
]
let cliques = parseFloat(input[0])
console.log(cliques)
let filtrado = input.filter(item=>item.trim())
let filtrado_num = []
for(let i in filtrado){
    filtrado_num.push(parseFloat(filtrado[i]))
}
let sequencia_clicada = filtrado_num.filter(item=>item!==cliques)
let filtrar_02 = sequencia_clicada.filter(item=>item ===2).length

/*console.log(cliques%2==0?'0':'1')
console.log(filtrar_02%2==0?'0':'1')*/
