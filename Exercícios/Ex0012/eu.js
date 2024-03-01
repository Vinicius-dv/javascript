function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade< 10){
                //Criança
                img.setAttribute('src','bebemasculino.png')
            } else if(idade>=10 && idade<21){
                //JOVEM
                img.setAttribute('src','jovemmasculino.png')
            } else if(idade>=21 && idade<50){
                //ADULTO
            } else{
                //IDOSO
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade< 10){
                //Criança
            } else if(idade>=10 && idade<21){
                //JOVEM
            } else if(idade>=21 && idade<50){
                //ADULTA
            } else{
                //IDOSA
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        
        res.appendChild(img)
        
    }
}