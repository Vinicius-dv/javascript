import contato from "./contato.js";

const listaContatos = document.getElementById('listaContatos')
const btn_gravar  = document.getElementById('btn_gravar')
const btn_remover = document.getElementById('btn_remover')

btn_gravar.addEventListener('click',(evt)=>{
    const cont = {
        nome: document.getElementById('f_nome').value,
        telefone: document.getElementById('f_telefone').value,
        email: document.getElementById('f_email').value
    }
    contato.addContato(cont,listaContatos)
})
btn_remover.addEventListener('click',()=>{
    listaContatos.innerHTML = ''
})
