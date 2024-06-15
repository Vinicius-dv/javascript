import { contatos } from "./bancoContatos.js";

let contato = {
    getTodos_contados:function(){
        return contatos
    },
    getContado:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destino_lista_contatos){
        contatos.push(this.addContato)
        const div = document.createElement('div')
        div.setAttribute('class','contato')

        const p_nome = document.createElement('p')
        p_nome.innerHTML = novoContato.nome

        const p_telefone = document.createElement('p')
        p_telefone.innerHTML = novoContato.telefone

        const p_email = document.createElement('p')
        p_email.innerHTML = novoContato.email

        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)

        destino_lista_contatos.appendChild(div)
    }
}

export default contato