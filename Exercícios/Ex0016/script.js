function contar(){
    var ini = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('n3')
    var res = document.getElementById('Respo')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else{
      res.innerHTML = 'Contando:'
      var i = Number(ini.value)
      var f = Number(fim.value)
      var p = Number(passo.value)
      if(p<=0){
        window.alert('Passo invalído! considerando passo 1')
        p = 1
      }
      if(i<f){
        //contagem crescente
        for(var c = i; c<=f; c += p){
            res.innerHTML += `${c} \u{1F449}`
          }
      } else {
        //contagem regressiva
        for(var c = i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
      res.innerHTML += `\u{1F3C1}`
    } 
} 