const tarefas = [
    { nome: "Estudar React", prioridade: "alta", tempo: 2 },
    { nome: "Ver série", prioridade: "baixa", tempo: 1 },
    { nome: "Fazer mercado", prioridade: "media", tempo: 1.5 },
    { nome: "Revisar JS", prioridade: "alta", tempo: 1 },
]

function mostrar_tarefa(tarefas){
    let arr_alta = []
    let fil_alta = tarefas.filter(item=>item.prioridade == 'alta')
    let fil_med = tarefas.filter(item=>item.prioridade == 'media')
    let fil_baixa = tarefas.filter(item=>item.prioridade == 'baixa')
    arr_alta.push(fil_alta[0],fil_alta[1],fil_med[0],fil_baixa[0])
    console.log(arr_alta)
}
mostrar_tarefa(tarefas)