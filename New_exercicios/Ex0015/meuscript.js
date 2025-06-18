function somar_String(string){
    let str_separada = string.split(' ')
    let arr = str_separada
    const itens_filter = arr.filter(i=>i.length>=5).length
    console.log(itens_filter)
}

somar_String("Hoje é um ótimo dia para programar bastante")