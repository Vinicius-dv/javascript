// 1 situação
// Aqui ele me retornara só o resultado , o ; indica que o código acabou e pode ser executado logo ele n irá fazer o loop , 
//só ira me retornar o resultado , isso vale tanto para o console.log(i) quanto para o console.log('valor)
let i = null
for(i=0;i<10;i++);
console.log(i)
console.log('valor')


// 2 situação
// onde eu tenho mais te uma instrução na mesma linha o ; é obrigatório 
let o = 10; o=0
console.log(o)


// 3 situação
// É obrigatório o uso do ; quando a proxima linha começa com [] ou () se a proxima linha do meu código começar com um desses dois é 
//obrigatio o uso do ;

let texto = 'canal';
['j','a','v','a','s','c','r','i','p','t'].forEach(i=>console.log(i));

let n1 = [1,2]
let n2 = [3,4];
[n1 ,n2].map(v=>console.log(v))


let n = null;
(n=10) 
console.log(n)


// nesse caso abaixo para resolver este problema eu n preciso obrigatoriamente usar o ; 
//eu posso declarar o array n1,n2,n3 como uma variavel
let numeros = [10,20,30]
let [n3,n4,n5] = numeros
console.log(n3)
console.log(n4)
console.log(n5)