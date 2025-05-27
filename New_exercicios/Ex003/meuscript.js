/*function main(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(dados=>{
        dados.forEach((itens,index)=>{
            console.log(itens.name)
        })
    })
}

main()*/

async function main_async(){
   try {
    const req = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await req.json()
    for(let itens of res){
       const req_for = await fetch('https://jsonplaceholder.typicode.com/posts')
       const res_for = await req_for.json()
       console.log(res_for)
    }
   } catch (error) {
       console.log(error)
   }
}

main_async()