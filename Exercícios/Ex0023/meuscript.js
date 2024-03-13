var num = document.getElementById('num')
var lista = document.getElementById('list')
var res = window.document.getElementById('res')
var valores = []

function nume(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(nume(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores [0]
        var soma = 0
        var media = 0
    
        for(var pos in valores){
            soma+= valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] <menor)
             menor = valores[pos]
        }
        media  = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo , temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>somando todos os valores , o resultado é ${soma}`
        res.innerHTML += `<p>A médias dos valores digitados é ${media}`
    }
}