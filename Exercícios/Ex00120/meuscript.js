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