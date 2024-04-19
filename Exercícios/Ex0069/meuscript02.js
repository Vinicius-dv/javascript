// nessa const obj1 eu tenho um HTMLCollection

// no const obj2 com o uso do spread eu transformei o HTMLcollection em um array com elementos do meu html , ai você pode falar ta mas é a mesma coisa mas é ai que você se engana , com o HTMLcollection essa coleção só recebe elementos html , já quando eu tenho um array eu posso adicionar outros tipos de elementos que não seja html , eu posso adicionar qualquer coisa , com um HTMLcollection eu tenho muitas poucas funções para trabalhar com ele , ja com o array eu tenho muito mais exemplo eu posso usar um obj2.indexOf , ja com o HTMLcollection não consigo usar isso.

const obj1 = document.getElementsByTagName('div')
const obj2 = [...document.getElementsByTagName('div')]
console.log(obj1)
console.log(obj2)

// vamos dar mais um exemplo aqui , supunhetamos que eu queira percorrer o obj1 vai dar erro pq ele é um HTMLcollection ja com o obj2 eu consigo tranquilamente , imprimir no console os elementos do obj2 ja que ele é um array

/*obj1.forEach(element => {
    console.log(element)
});*/


// esse el representa a div do obj2 então eu posso fazer isso 
obj2.forEach((el) =>{
    el.innerHTML = 'cursos'
})
