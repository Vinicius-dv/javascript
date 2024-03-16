function calcular() {
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var soma = document.getElementById('soma').checked;
    var sub = document.getElementById('sub').checked;
    var mult = document.getElementById('mult').checked;
    var div = document.getElementById('div').checked;
    var res = document.getElementById('res');

    if (n1.length == 0 || n2.length == 0 ) {
        window.alert('[ERRO] Informe algum valor');
    } else {
        if (soma) {
              res.value = 'Resultado da soma: ' + (n1+n2)
        } else if(sub){
            res.value = 'Resultado da subtração: '  + (n1 - n2)
        } else if(mult){
            res.value = 'Resultado é: ' + (n1*n2)
        } else if(div){
            res.value = 'Resultado é: ' + (n1/n2)
        }
    }
}