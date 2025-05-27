fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})

async function main(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dados =  await res.json()
    console.log(dados)
}

main()