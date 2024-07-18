const f_texto = document.getElementById('f_texto')
const p_texto = document.getElementById('p_texto')
const btn_texto = document.getElementById('btn_texto')

btn_texto.addEventListener('click',(evt)=>{
    
})

const curso = 'Javascript'
localStorage.setItem('Nome','bruno')
localStorage.setItem('Canal','CFB Cursos')
localStorage.setItem('Curso', curso)
alert(localStorage.key(0))
alert(localStorage.length)
/*alert(localStorage.getItem('Nome'))
alert(localStorage.getItem('Canal'))
alert(localStorage.getItem('Curso'))*/



/*let num = 10
localStorage.setItem('numero',num)
alert(localStorage.getItem('numero'))
localStorage.clear()*/