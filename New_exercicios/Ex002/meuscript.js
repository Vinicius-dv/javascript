function main(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(dados=>{
        dados.forEach((itens,index)=>{
            const p = document.createElement('p')
            const body = document.body
            p.innerText = itens.name
            body.appendChild(p)
            if(index>8){
                console.log('tem mais de 8 nome meu peixe')
            }
        })
    })
}

main()

 async function main_async(){ 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dados = await res.json()
    for(const itens of  dados){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dados = await res.json()
        console.log(dados)
        console.log(itens)
    }
}

main_async()