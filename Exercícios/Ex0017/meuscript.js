function verificar(){
    var n1 = document.getElementById('num')
    var res = window.document.getElementById('tabu')
    if(n1.value.length == 0 || n1.value == 0 || n1.value>10 ){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else{
        if(n1.value ==1){
            res.innerHTML = '1x1 = 1 <br> 1x2 = 2 <br> 1x3 = 3 <br> 1x4 = 4 <br> 1x5 = 5 <br> 1x6 = 6 <br> 1x7 = 7 <br> 1x8 = 8 <br> 1x9 = 9 <br> 1x10 = 10'
        } else{
            if(n1.value ==2){
                res.innerHTML = '2x1 = 2 <br> 2x2 = 4 <br> 2x3 = 6 <br> 2x4 = 8 <br> 2x5 = 10 <br> 2x6 = 12 <br> 2x7 = 14 <br> 2x8 = 16 <br> 2x9 = 18 <br> 2x10 = 20'
            } else{
                if(n1.value ==3){
                    res.innerHTML = '3x1 = 3 <br> 3x2 = 6 <br> 3x3 = 9 <br> 3x4 = 12 <br> 3x5 = 15 <br> 3x6 = 18 <br> 3x7 = 21 <br> 3x8 = 24 <br> 3x9 = 28 <br> 3x10 = 30'
                } else{
                    if(n1.value ==4){
                        res.innerHTML = '4x1 = 4 <br> 4x2 = 8 <br> 4x3 = 12 <br> 4x4 = 16 <br> 4x5 = 20 <br> 4x6 = 24 <br> 4x7 = 28 <br> 4x8 = 32 <br> 4x9 = 36 <br> 4x10 = 40'
                    } else{
                        if(n1.value ==5){
                            res.innerHTML = '5x1 = 5 <br> 5x2 = 10 <br> 5x3 = 15 <br> 5x4 = 20 <br> 5x5 = 25 <br> 5x6 = 30 <br> 5x7 = 35 <br> 5x8 = 40 <br> 5x9 = 45 <br> 5x10 = 50'
                        } else{
                            if(n1.value ==6){
                                res.innerHTML = '6x1 = 6 <br> 6x2 = 12 <br> 6x3 = 18 <br> 6x4 = 24 <br> 6x5 = 30 <br> 6x6 = 36 <br> 6x7 = 42 <br> 6x8 = 48 <br> 6x9 = 54 <br> 6x10 = 60'
                            } else{
                                if(n1.value ==7){
                                    res.innerHTML = '7x1 = 7 <br> 7x2 = 14 <br> 7x3 = 21 <br> 7x4 = 28 <br> 7x5 = 35 <br> 7x6 = 42 <br> 7x7 = 49 <br> 7x8 = 56 <br> 7x9 = 63 <br> 7x10 = 70'
                                }else{
                                    if(n1.value ==8){
                                        res.innerHTML = '8x1 = 8 <br> 8x2 = 16 <br> 8x3 = 24 <br> 8x4 = 32 <br> 8x5 = 40 <br> 8x6 = 48 <br> 8x7 = 56 <br> 8x8 = 64 <br> 8x9 = 72 <br> 8x10 = 80'
                                    }else{
                                        if(n1.value ==9){
                                            res.innerHTML = '9x1 = 9 <br> 9x2 = 18 <br> 9x3 = 27 <br> 9x4 = 36 <br> 9x5 = 45 <br> 9x6 = 54 <br> 9x7 = 63 <br> 9x8 = 72 <br> 9x9 = 81 <br> 9x10 = 90'
                                        }else{
                                            if(n1.value ==10){
                                                res.innerHTML = '10x1 = 10 <br> 10x2 = 20 <br> 10x3 = 30 <br> 10x4 = 40 <br> 10x5 = 50 <br> 10x6 = 60 <br> 10x7 = 70 <br> 10x8 = 80 <br> 10x9 = 90 <br> 10x10 = 100'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}