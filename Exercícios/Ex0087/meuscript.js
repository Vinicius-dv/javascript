const numero = document.getElementById('numero')
const btn_promessa = document.getElementById('btn_promessa')


btn_promessa.addEventListener('click',(event)=>{
    numero.innerHTML = 'Processando...'
    console.log(promessa())

        // Então se deu certo ou seja se o res_ok der certo a promessa cai dentro de then e vai para o parametro retorno se o res_erro for true ele cai no catch e vai para o parametro retorno
        /*.then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove('erro')
        numero.classList.add('ok')
        })
        .catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add('erro')
        numero.classList.remove('ok')
        })*/
})

const promessa = ()=>{
     // Aqui eu estou criando a minha promessa, nesses parametros eu estou dizendo que se tudo ocorrer certo vai cair no parametro ok ,  se não cai no outro parametro
     let p = new Promise((res_ok,res_erro)=>{
    
        let resultado = true
        let tempo = 3000
    
        setTimeout(()=>{
           if(resultado){
            res_ok('Deu tudo certo')
           } else{
            res_erro('Deu tudo errado')
           }
        },tempo)
    })
    return p 
}

    
numero.innerHTML = 'Esperando'




