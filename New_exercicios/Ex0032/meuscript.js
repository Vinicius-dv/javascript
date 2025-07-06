let a  = 'a'
let b = 'b'
let c = 'c'

function receber_num(p,r){
    /*if(p===0 && r===0){
        console.log(c)
    }else if(p===1&&r===1){
        console.log(a)
    }else if(p===0&&r===1){
        console.log(c)
    }else if(p===1&&r===0){
        console.log(b)
    }*/
    console.log(p==0 && r==0?c:p==1&&r==1?a:p==0&&r==1?c:b)
}
receber_num(1,0)