const p_texto = document.getElementById('p_texto')
const end_point = 'CFB cursos.txt'

fetch(end_point).then((res=>res.text())
).then(res=>{
    res=JSON.parse(res)
    console.log(res.canal)
    console.log(res.curso)
})