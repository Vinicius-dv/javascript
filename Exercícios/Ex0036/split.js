var str = "Isto é uma cadeia de caracteres"
var arr = str.split(" ")

console.log(arr)


//Percorrendo com for in
var str = "primeiro, segundo, terceiro"
var arr = str.split(", ")
for (var i in arr){
    console.log(arr[i])
}


//Acessando pela chave do array
var data_qualquer = '24-02-2009'
var arr_data = data_qualquer.split('-')

console.log(arr_data[0]) // 24
console.log(arr_data[1]) // 02
console.log(arr_data[2]) // 2009



//Impondo um limite

var str = "Apples are round, and apples are juicy.";
var splitted = str.split(" ", 3);
console.log(splitted) // [ 'Apples', 'are', 'round,' ]