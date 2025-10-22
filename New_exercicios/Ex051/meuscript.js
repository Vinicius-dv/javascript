function merge(arr,ini,fim){
    if(ini<fim){
        let meio = (ini+fim)/2
        let i,j,k
        let aux = []
        merge(arr,ini,meio)
        merge(arr,meio+1,fim)
        i = ini
        j = meio+1
        k = ini
        while(i<=meio && j<=fim){
            if(arr[i]<arr[j]){
                aux[k] = arr[i]
                i++
                k++
            }else{
                aux[k] = arr[j]
                j++
                k++
            }
        }
        while(i<=meio){
            aux = arr[i]
            i++
            k++
        }
        while(j<=fim){
            aux = arr[j]
            j++
            k++
        }
        for(let i=ini;i<arr.length;i++){
            arr[i] = aux[i]
        }
    }
}


const arr = [5,3,8,9,1,4]
console.log("Array original"+arr)

