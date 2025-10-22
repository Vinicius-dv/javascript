#include <stdio.h>
void merge(int vetor[],int ini,int fim){
   if(ini<fim){
   int meio = (ini+fim)/2;
   int i,j,k,aux[10];
   merge(vetor,ini,meio);
   merge(vetor,meio+1,fim);
   i = ini;
   j = meio+1;
   //k é o indice do aux, por isso ele começa do inicio tbm!
   k = ini;
   while(i<=meio && j<=fim){
    if(vetor[i]<vetor[j]){
        aux[k] = vetor[i];
        i++;
        k++;
    }else{
        aux[k] = vetor[j];
        j++;
        k++;
    }
   }
   while(i<=meio){
    aux[k] = vetor[i];
    i++;
    k++;
   }
   while(j<=fim){
    aux[k] = vetor[j];
    j++;
    k++;
   }
   for(int i=ini;i<=fim;i++){
    vetor[i] = aux[i];
   }
   }
}
int main(void){
    int tamanho = 10;
    int vetor[10] = {5,7,3,6,8,9,4,1,10,2};
    merge(vetor,0, tamanho-1);
    printf("O array foi arrumado\n");
    for(int i=0;i<tamanho;i++){
        printf("%d\n",vetor[i]);
    }
   return 0;
}
