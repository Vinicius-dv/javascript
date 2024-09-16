class login{
    static logado = false
    static matlogado = false
    static nomelogado = null
    static acessologado = null
    static endpoint = 'http://localhost:3000'
    
    static login=(mat,pas)=>{
        this.endpoint+= `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                console.log(res)
            }else{
                console.log('Usuario não encontrado')
            }
        })
    }
}

export {login}