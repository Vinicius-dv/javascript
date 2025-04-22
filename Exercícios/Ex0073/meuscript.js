const caixaCursos = document.getElementById('caixacursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML','CSS' ,'javascript','PHP','react','MySQL','ReactNative']
const btnCursosselecionados = document.getElementById('btn-cursoSelecionado')

cursos.map( (el,chave )=>{
    console.log(el)
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id','c'+chave)
    novoElemento.setAttribute('class' ,'curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_cursos')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

//quero transformar todosRadios em um array , para fazer isso eu posso usar o spread
btnCursosselecionados.addEventListener('click',(event)=>{
    const todosRadios = [...document.querySelectorAll('input[type =radio]')]
    let radioSelecionado = todosRadios.filter((el,indice,arr)=>{
        return el.checked
    }) 
    radioSelecionado = radioSelecionado[0]
    const cursoSelecionado = radioSelecionado.parentNode.parentNode.textContent
    alert('O curso selecionado é o : '+cursoSelecionado)
    /*console.log(todosRadios)
    console.log(radioSelecionado)
    console.log(cursoSelecionado)*/
})


//previousSibling = irmão anterior
