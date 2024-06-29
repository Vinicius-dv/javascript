const slider = document.getElementById('slider')
let btn_senha = document.getElementById('btn-senha')

let valor = document.getElementById('valor')
let password = document.getElementById('password')

const container_password = document.getElementById('container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@'

let novaSenha = ''

valor.innerHTML = slider.value

slider.oninput = function(){
    valor.innerHTML = this.value

}

function generatePassword(){
    let pass = ''
    for(let i =0 ,n=charset.length;i<slider.value;i++){
        pass += charset.charAt(Math.floor(Math.random()*n))
       

    }
    container_password.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

btn_senha.addEventListener('click',()=>{
    generatePassword()
})

function copy(){
    navigator.clipboard.writeText(novaSenha)
}

container_password.addEventListener('click',()=>{
    copy()
    alert('Senha copiada com sucesso')
})

let v;
console.log(v) 





