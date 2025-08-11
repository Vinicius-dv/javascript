const num = 371449635398431  
const num_str = String(num)
const num_arr = num_str.split("").reverse()
const arr_esq = []
const arr_dir = []
const verificar_marca_cartao =  Number(num_arr[num_arr.length-1]+num_arr[num_arr.length-2])
for(let i=0;i<num_arr.length;i+=2){
    arr_esq.push(Number(num_arr[i]))
}
for(let j=1;j<num_arr.length;j+=2){
    arr_dir.push(Number(num_arr[j]*2))
}
const str_dir = arr_dir.join("")
const arr_dir_separado = str_dir.split("")
const arr_dir_separado_num = []
for(let i=0;i<arr_dir_separado.length;i++){
    arr_dir_separado_num.push(Number(arr_dir_separado[i]))
}

const soma_dir_separado_num = arr_dir_separado_num.reduce((acc,valor)=>acc+valor,0)
arr_esq.push(soma_dir_separado_num)
const res_cartao = arr_esq.reduce((acc,valor)=>acc+valor,0)
console.log(res_cartao)
if(res_cartao%10==0){
    if(verificar_marca_cartao==40){
        console.log("Seu cartão é visa e ele é valido")
    } else if(verificar_marca_cartao ==51 || verificar_marca_cartao ==52 || verificar_marca_cartao ==53 || verificar_marca_cartao ==54 || verificar_marca_cartao ==55 ){
        console.log("Seu cartão é mastercard e ele é valido")
    } else if(verificar_marca_cartao==34 || verificar_marca_cartao==37){
        console.log("Seu cartão é american express e é valido")
    }
}else{
    console.log("não é valido")
}