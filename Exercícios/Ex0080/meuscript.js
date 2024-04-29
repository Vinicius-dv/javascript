document.addEventListener('DOMContentLoaded', function() {
    // o this esta se referindo ao objeto pessoa
    function Pessoa(pnome,pidade) {
        
        this.nome = pnome
         this.idade = pidade
        

        this.getNome = function() {
            return this.nome
        }

        this.getIdade = function() {
            return this.idade
        }
    }

    const pessoas = []

    const addPessoa = () => {
        const res = document.querySelector('.res')
        res.innerHTML = ''

        pessoas.forEach((p) => {
            const div = document.createElement('div')
            div.setAttribute('class', 'pessoa')
            div.innerHTML = 'Nome: ' + p.getNome() + '<br>Idade: ' + p.getIdade() + '<br><br>'
            res.appendChild(div)
        })
    }

    const btn_add = document.getElementById('btn-add')
    btn_add.addEventListener('click', (event) => {

        const nome = document.getElementById('nom').value
        const idade = Number(document.getElementById('f_idade').value)

        if(nome === ''){
            alert('Digite um nome')
            return
        } 

        if(idade === ''){
            alert('Digite uma idade')
            return
        }

         if(isNaN(idade)){
            alert('Digite uma idade')
            return
        }
        const p = new Pessoa(nome, idade)
        pessoas.push(p)
        addPessoa()
        document.getElementById('nom').value = ''
        document.getElementById('f_idade').value = ''
        document.getElementById('nom').focus()
        console.log(pessoas)
    })
})