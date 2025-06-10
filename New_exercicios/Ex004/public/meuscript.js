const div = document.createElement('div')
const body = document.body
async function main(){
     const req = await fetch('http://localhost:3000/users',{
      headers:{
         'Content-Type':'application/json'
      },
      method:'post'
     })
     try {
      const dados =  await req.json()
      for(let itens of dados){
         const p_01 = await document.createElement('p')
         p_01.innerText = 'Seu nome ' +itens.name
         const p_02 = await document.createElement('p')
         p_02.innerText = 'Curso selecionado:'+itens.curso
         div.appendChild(p_01)
         div.appendChild(p_02)
         body.appendChild(div)
     }
     } catch (error) {
         console.log(error)
     }
}

main()