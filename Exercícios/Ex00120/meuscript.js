//sintaxe

/*function primeira_função(){
    return new Promise((resolve)=>{
        // Esse setTimeout 
        setTimeout(()=>{
            console.log('Esperou isso aqui')
            resolve()
        },1000)
    })
}

 async function segunda_função(){

    // Então primeiro eu dou um console.log('iniciou') depois eu dou um await que vai esperar a primeira_funçao 
    //ser executada para executar o outro console.log(), 
    //ou sejá só vai executar  o console.log('terminou') quando a primeira_funçao for executada
    console.log('iniciou')
    await primeira_função()
    console.log('terminou')
}

segunda_função()*/


// Pratico 

//Aqui eu estou fazendo uma requisição para a url e estou passando o id 3 que defini la em baixo em showUsername , 
//ent eu vou fazer uma requisição no id 3 e com isso essa url ira me retornar os dados do usuario com o id 3,
//transformara em um obj json após a requisição me retornar os dados do usuario ja em um obj json eu armazeno na minha const user
//e após ela resolver a promise que é os dados do usuario eu mando no console.log exibir o nome do usuario com o id 3.
function getUser(id){

    return fetch(`https://reqres.in/api/users?id= ${id}`)

    .then(dados=>dados.json())
    .catch(err=>console.log(err))
}

async function showUserName(id){


    try{
        const user  = await getUser(id)

        console.log(`O nome do usuario é ${user.data.first_name}`)
    
    }catch(err){
        console.log(`Erro ${err}`)
    }
 
}

showUserName(3)