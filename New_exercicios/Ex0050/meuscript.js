function calcular_valor_letra(frase){
    let soma_frase = 0
    const valor_letras = {a:1,b:3,c:3,d:2,e:1,f:4,g:2,h:4,i:1,j:8,k:5,l:1,m:3,n:1,o:1,p:3,q:10,r:1,s:1,t:1,u:1,v:4,w:4,x:8,y:4,z:10}
    for(let i=0;i<frase.length;i++){
        soma_frase+=valor_letras[frase[i]]
    }
    console.log("A soma da sua frase é "+soma_frase)
}
calcular_valor_letra(["h","e","l","l","o","w","o","r","l","d"])
