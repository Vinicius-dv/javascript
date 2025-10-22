//Para fazer um merge, vc precisa do vetor, o inicio e o final, ai vc cria as varias que vai servir como indices, 'corta'  o array ou seja divide ele no meio, ai tem a esquerda e a direita ai da um loop enquanto tiver itens na esquerda e direita ele continua percorrendo! e depois eu verifico se ainda tem elementos ainda ou na esquerda ou na direita! ai eu adiciono no vetor o que foi armazenado no vetor auxiliar!

function merge(vetor,ini,fim){
   let meio = parseInt((ini+fim)/2)
   let i,j,k
   let aux = []
   i = ini
   j = fim
   //k é o indice do aux, por isso ele começa do inicio tbm!
   k = ini
   merge(vetor,i,meio)
   merge(vetor,meio+1,j)
   while(i<=meio && j<=fim){
    if(vetor[i]<vetor[j]){
        aux[k] = vetor[i]
        i++
        k++
    }else{
        aux[k] = vetor[j]
        j++
        k++
    }
   }
   while(i<=meio){
    aux[k] = vetor[i]
    i++
    k++
   }
   while(j<=fim){
    aux[k] = vetor[j]
    j++
    k++
   }
   for(let i=0;i<vetor.length;i++){
    vetor[i] = aux[i]
   }
}

function executar_merge(){
    const vetor = [5,7,3,6,8,9,4,1,15,13]
    const tamanho = vetor.length
    console.log("O array atualmente está assim:\n")
    for(let i=0;i<tamanho;i++){
       console.log(vetor[i])
    }
    merge(vetor,4,10)
    /*merge(vetor,0,tamanho-1)
    console.log("O array foi arrumado\n")
    for(let i=0;i<tamanho;i++){
       console.log(`${vetor[i]}`)
    }*/
}

executar_merge()