const p_temp = document.getElementById('p_temp')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

function obterNUm(){

const end_point = "http://localhost:3000/"
fetch(end_point)
.then(res=>res.json())
.then(dados=>{
    p_temp.innerHTML = dados.temperatura
    p_nivel.innerHTML = dados.nivel
    p_press.innerHTML = dados.pressão
    console.log(res) 
})

}

//let intervalo = setInterval(obterNUm,1000)

let dados = {
    nome:'bruno',
    canal:'CFB cursos',
    curso:'Javascript'
}

let cabeçalho = {
    //Aqui eu estou definindo o method da minha requisição 
    //ou seja a minha requisição vai ser do método post para não vazar 
    //os dados como vão ser passados como method post ele ira ficar armazenado no corpo da requisição e 
    //a requisição é a "http://localhost:3000/" ou seja os dados
    // vão ficar armazenados no corpo da requisição 'http://localhost:3000/' 
    // ,após definir o método eu estou trasformando o obj 
    //dados em uma string json que pode ser usada no back , 
    //por exemplo  com req.body eu estou recebendo os dados que estão armazenados no corpo da requisição. 
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(dados)
}

const gravarDados = ()=>{
    const endpoint = "http://localhost:3000/"
    fetch(endpoint,cabeçalho)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}



gravarDados()
