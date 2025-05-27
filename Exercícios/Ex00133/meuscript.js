const valor_list = document.getElementById('valor_list')
const btn_add_task = document.getElementById('btn_add_task')

btn_add_task.addEventListener('click',()=>{
    let valor_tarefa = valor_list.value
    const main_conteudo = document.getElementById('main_list')
    const ul_lista = document.getElementById('ul_lista')
    //const body = document.body
    const li_lista = document.createElement('li')
    li_lista.innerText = valor_tarefa
    const btn_concluido = document.createElement('button')
    btn_concluido.innerText = 'Concluir Tarefa'
    let valor_atual = false
    btn_concluido.addEventListener('click',()=>{
        valor_atual = !valor_atual
        if(valor_atual == false){
            li_lista.classList.remove('Pendente')
            li_lista.classList.add('concluido')
        }else if(valor_atual){
            li_lista.classList.remove('concluido')
            li_lista.classList.add('Pendente')
        }
    })
    ul_lista.appendChild(li_lista)
    ul_lista.appendChild(btn_concluido)
    main_conteudo.appendChild(ul_lista)
})