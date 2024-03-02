function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(txtano.value.length == 0 || Number(txtano.value) > ano || Number(txtano.value) <1924){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        genero = ''
        var img = document.createElement('img')
         img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 || idade<10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebemasculino.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
    } 
        
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    res.appendChild(img)
}
