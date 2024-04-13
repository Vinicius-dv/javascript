// revisando  temos uma função que é responsalvel por criar um botão mas antes de inserir o botão na tela a gente que fazer coisas novas nesse botão e personalizar cada botão que eu crie

function novobotao(text , callback){
    let botao = document.createElement('button')
    botao.id =  'clique'
    let p = document.createElement('p')
    p.textContent = text
    botao.appendChild(p)
    callback(botao)

    document.body.appendChild(botao)
    return botao
}


// o parametro callback que eu dei acima esta sendo representado abaixo por essa aero function então tudo que eu botar nessa aero funtion abaixo vai estar dentro de callback

novobotao('login', (botao) => {
   botao.style.cssText  = `
   color: red;
   border : 5px solid pink;
   `

   botao.addEventListener('click', () => {
    console.log('você fez login')
   })
});

novobotao('signup' , (botao) => {
    botao.style.cssText  = `
    color: red;
    border : 5px solid pink;
    `
    botao.addEventListener('click', () => {
        console.log('você entrou na sua conta com sucesso')
       })
})





