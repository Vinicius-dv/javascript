function calcular(){
    var nome = document.getElementById('inome').value
    var altura= document.getElementById('alt').value;
   
    var peso = document.getElementById('ipe').value
    var res = document.getElementById('res')
    if(nome.length==0 || altura.length==0 || peso.length==0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        if(altura>225 || peso>300){
            window.alert('[ERRO] Parece que os dados fornecidos em altura , peso estão incorretos')
        }else{
            var valorIMC = (peso/(altura*altura)).toFixed(1)
            
            if(valorIMC<15 ||peso< 46){
                res.innerHTML = ` Olá ${nome} Seu IMC é de ${valorIMC} você esta abaixo do peso recomendado , e precisa chegar a 70kg para chegar em um IMC normal`
            } else{
                if(valorIMC <24||peso >= 46 && peso<= 70){
                    res.innerHTML = ` Olá ${nome} Seu IMC é de ${valorIMC} De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal parabéns!!`
                }  else{
                    if(valorIMC<28||peso >=75 && peso<=83){
                        res.innerHTML = ` Olá ${nome} Seu IMC é de ${valorIMC} você esta acima do peso recomendado ,  Para atingir um valor de IMC normal, seu peso deve estar entre 46 e 69.9 kg.`
                    } else{
                        if(valorIMC>28||peso>83){
                            res.innerHTML= `Olá ${nome} Seu IMC é de ${valorIMC} você esta acima do peso recomendado ,  Para atingir um valor de IMC normal, seu peso deve estar entre 46 e 69.9 kg.`
                        }
                    }
                }
            }   
            }
          
    
}
}