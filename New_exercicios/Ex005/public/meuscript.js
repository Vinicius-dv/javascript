async function login(){
    try {
       const req = await fetch('http://localhost:3000/login',{
        headers:{
            'Content-Type':'application/json'
        },
        method:'Post',
        body:JSON.stringify({nome:'vinicius'})
       }) 
       const res = await req.json()
       console.log(res.token)
       localStorage.setItem('token',res.token)
       const token = localStorage.getItem('token')
       const req_get = await fetch('http://localhost:3000/pag',{
        headers:{
            'Content-Type':'application/json'
        },
        method:'Post',
        body:JSON.stringify({token:token})
       })
       const res_get = await req_get.json()
       console.log(res_get.message)
    } catch (error) {
        console.log(error)
    }
}

login()
