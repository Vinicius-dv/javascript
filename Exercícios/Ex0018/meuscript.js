function verificar(){
    var num = document.getElementById('num')
    var res = document.getElementById('res')
if(num.value.length == 0){
    window.alert(' [ERRO] Verifique os dados e tente novamente')
} else{
    var n = Number(num.value)
    res.innerHTML = ''
    for(c = 1; c<=10; c++){
        var op = document.createElement('option')
        op.text = `${n} x ${c} = ${n*c}`
        res.appendChild(op)
    }
}
   
}