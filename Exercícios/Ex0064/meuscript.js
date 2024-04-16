let clique = document.getElementById('clique')

function red(){
    clique.style.background = 'red'
}
function white(){
    clique.style.background =''
}

clique.addEventListener('click',function(){
    console.log('clicou')
    if(clique.style.background ==='red'){
        white()

    }else{
        red()
    }
})
