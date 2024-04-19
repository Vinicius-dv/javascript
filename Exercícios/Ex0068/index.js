/* Bom digamos que eu quero percorrer essa array abaixo mas eu não vou usar o for tradicional , vou usar o map() , porque não usar o for ?. Bom iremos usar o for de uma maneira diferente , quando eu quiser percorrer um array e por exemplo parar ele no meio  , ou quando eu quiser percorrer um array e trabalhar os elementos e retornar é melhor usar o map*/

const cursos = ['html' ,'css' ,'javascript' ,'java' ,'python']
cursos.map((el ,i)=>{
    console.log('Curso:' +el + ` o curso ${el} está na posição: ` +i)
})

//posso também fazer isso 

const novosCursos = ['php' ,'lua' ,'cobol' ,'react' ,'typescript']
const div = document.createElement('div')
novosCursos.forEach((curso) =>{
    const p = document.createElement('p')
    p.textContent = curso
    div.appendChild(p)
    document.body.appendChild(div)
})



