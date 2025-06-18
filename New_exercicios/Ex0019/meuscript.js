/*function treinando_for_of(arr,arr_02,arr_03){
    for(let fruta of arr){
        console.log(fruta)
    }

    let soma = 0
    for(let num of arr_02){
        soma+=num
    }
    console.log(soma)
    let tam_srt = []
    for(let str of arr){
        tam_srt.push(str.length)
    }
    console.log(tam_srt)
}

treinando_for_of(['maçã', 'banana', 'laranja', 'uva'],[2, 4, 6, 8, 10],['Ana', 'Carlos', 'Beatriz'])
*/

function treinando_for_in(obj_01,arr,obj_02){
    for(const chave in obj_01){
        console.log(chave,obj_01[chave])
    }

    for(let index in arr){
        console.log(index,arr[index])
    }

    let invertido = {}
    for(const key in obj_02){
        let valor = obj_02[key]
        invertido[valor] = key
        
    }
    console.log(invertido)

}

treinando_for_in({ nome: 'João', idade: 30, cidade: 'São Paulo'},['a', 'b', 'c', 'd'],{ nome: 'c', preco: 29.99, cor: 'azul' })