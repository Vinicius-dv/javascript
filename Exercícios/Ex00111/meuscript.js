const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const auto = document.getElementById('automatico')
const imagem = document.getElementById('img')

let estadoSemafaro = false
let interv

vermelho.addEventListener('click',()=>{
    if(estadoSemafaro){
        imagem.src = './imagens/desligado.png'
        estadoSemafaro = false
    }else{
        imagem.src = './imagens/vermelho.png'
        estadoSemafaro = true
    }
    
})


amarelo.addEventListener('click',()=>{
    if(estadoSemafaro){
        imagem.src = './imagens/desligado.png'
        estadoSemafaro = false
    }else{
        imagem.src = './imagens/amarelo.png'
        estadoSemafaro = true
    }
})


verde.addEventListener('click',()=>{
    if(estadoSemafaro){
        imagem.src = './imagens/desligado.png'
        estadoSemafaro = false
    }else{
        imagem.src = './imagens/verde.png'
        estadoSemafaro = true
    }
})


auto.addEventListener('click', () => {
    if (estadoSemafaro) {
        clearInterval(interv);
        imagem.src = 'imagens/desligado.png'
        estadoSemafaro = false
    } else {
        estadoSemafaro = true
        interv = setInterval(() => {
            imagem.src = 'imagens/vermelho.png'
            setTimeout(() => {
                imagem.src = 'imagens/amarelo.png'
            }, 1000);
            setTimeout(() => {
                imagem.src = 'imagens/verde.png'
            }, 2000)
        }, 3000)
    }
});
