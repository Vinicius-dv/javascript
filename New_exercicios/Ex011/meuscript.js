function casa_sam(s,t,a,b,apples,oranges){
    let qtd_maça_caiu = 0
    let qtd_orange_caiu = 0
    apples.map((itens,index)=>{
        if(itens+a>=s&&itens+a<=t){
            qtd_maça_caiu+=1
        }
    })
    oranges.map((itens,index)=>{
        if(itens+b>=s&&itens+b<=t){
            qtd_orange_caiu+=1
        }
    })

    console.log(qtd_maça_caiu)
    console.log(qtd_orange_caiu)
}

casa_sam(7,11,5,15,[-2,2,1],[5,-6])