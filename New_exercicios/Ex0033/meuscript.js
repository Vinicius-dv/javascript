let n_clicada = 12
function receber_valores(n,arr_n){
    if(n%2==0){
        console.log(0)
    }else{
        console.log(1)
    }
    let lam_02 = arr_n.filter(item=>item === 2).length
    console.log(lam_02%2==0?'0':'1')
}
receber_valores(n_clicada,[1,2,2])

    //let lampada_b = false 
    /*for(let i =0;i<arr_n.length;i++){
        if(arr_n[i]===2){
            if(lampada_b ===false){
                lampada_b = true
            }else if(lampada_b === true){
                lampada_b = false
            }
        }
    }*/

    //console.log(lampada_b==true?'1':'0')