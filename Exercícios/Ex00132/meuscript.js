const usuario = document.getElementById('usuario')
const button = document.getElementById('button')
const jogo = ['pedra','papel','tesoura']
button.addEventListener('click',(e)=>{
    let aleatorio = jogo[Math.floor(Math.random()*jogo.length)]
    if(aleatorio ===usuario.value){
        alert(`Empate você digitiu ${usuario.value} e eu ${aleatorio}`)
    }
    if(aleatorio =='pedra' &&usuario.value ==='papel'){
        alert(`você ganhou você digitou ${usuario.value} e eu ${aleatorio}`)
    }else if(aleatorio =='papel' && usuario.value =='pedra'){
        alert(`você perdeu você digitou ${usuario.value} e eu ${aleatorio}`)
    }else if(aleatorio =='tesoura' &&usuario.value =='pedra'){
        alert(`você ganhou você digitou ${usuario.value} e eu ${aleatorio}`)
    }else if(aleatorio =='pedra' &&usuario.value =='tesoura'){
        alert(`você perdeu você digitou ${usuario.value} e eu ${aleatorio}`)
    }
})