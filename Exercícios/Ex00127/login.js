class login{ 
    static logado = false
    static matlogado = false
    static nomelogado = null
    static acessologado = null
    static estilo_css = null
    static endpoint = 'http://localhost:3000'
    
    
    static login=()=>{
        this.estilo_css = `
        .fundo_login {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: rgba(0,0,0,0.75);
        }
        .base_login {
            display: flex;
            justify-content: center;
            align-items: center;
            width: inherit;
        }
        .elementos_login {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 30%;
            background-color: #bbb;
        }
        label {
            display: flex;
        }
        .botões_login {
            cursor: pointer;
        }
        h1 {
            margin-top: 200px;
            text-align: center;
        }`;
        
        const estilo = document.createElement('style');
        estilo.setAttribute('id', 'id_estilologin');
        estilo.setAttribute('rel', 'stylesheet');
        estilo.setAttribute('type', 'text/css');
        estilo.innerHTML = this.estilo_css;
        document.head.appendChild(estilo);
       
        this.btn_cancelar()
        this.btn_login()
        
    }


    static verifica_login = ()=>{
        let mat = document.getElementById('usuario').value
        let pas = document.getElementById('senha').value
        
        const endpoint = `http://localhost:3000/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res){
                this.logado = true
                this.matlogado = mat
                this.nomelogado = res.nome
                this.acessologado = res.acesso
                this.fechar()
            }else{
                this.logado = false
                this.matlogado = null
                this.nomelogado = null
                this.acessologado = null
               return false
            }
        })
    }

    static fechar = ()=>{
       const  id_estilologin = document.getElementById('id_estilologin')
       id_estilologin.remove()
       const fundo_login = document.getElementById('fundo_login')
       fundo_login.remove()

    }

    static btn_cancelar = ()=>{
        const btn_cancelar= document.getElementById('btn_cancelar')
        btn_cancelar.addEventListener('click',()=>{
            this.fechar()
        })
    }

    static btn_login = ()=>{
        const btn_login= document.getElementById('btn_login')
        btn_login.addEventListener('click',()=>{
            this.verifica_login()
                this.fechar()
        })
    }
  
    
}

export {login}