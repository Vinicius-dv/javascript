const config = {
    titulo : 'CFB Cursos',
    texto : 'Curso de javascript',
    cor : '#48f'
}

const cxmsg = new msg(config)

const btn_msg = document.getElementById('btn_msg')

btn_msg.addEventListener('click',()=>{
    cxmsg.mostrar()
})