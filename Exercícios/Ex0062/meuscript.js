const botão = document.getElementById('click')

function red(){
    document.body.style.background = 'red'
}

function white(){
    document.body.style.background = ''
}
botão.addEventListener('click', ()=>{
    if(document.body.style.background === 'red'){
        white()
    } else{
        red()
    }
})

