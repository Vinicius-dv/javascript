const notificacoes = [
    { id: 1, tipo: "comentario", lida: false, texto: "Comentaram no seu post." },
    { id: 2, tipo: "like", lida: true, texto: "Alguém curtiu seu post." },
    { id: 3, tipo: "comentario", lida: false, texto: "Mais um comentário!" },
]

function mostrar_not(notificacoes){
    let filtrar_n_lidas = notificacoes.filter(n=>n.lida == false)
    let filtrar_lidas = notificacoes.filter(n=>n.lida == true)
    let nao_lidas = filtrar_n_lidas.length
    let lidas = filtrar_lidas.length
   return {nao_lidas,lidas, filtrar_n_lidas,filtrar_lidas}
}
const {filtrar_n_lidas,filtrar_lidas} =  mostrar_not(notificacoes)


function marcar_lida(filtrar_n_lidas,filtrar_lidas){
    filtrar_n_lidas.forEach(item=>{
        item.lida = true
    })
    return `A notificação são: ${filtrar_n_lidas.length} comentarios e ${filtrar_lidas.length} like`
}

const mostrar_lida =  marcar_lida(filtrar_n_lidas,filtrar_lidas)
console.log(mostrar_lida)