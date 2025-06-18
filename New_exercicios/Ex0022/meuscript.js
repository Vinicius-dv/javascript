const usuarios = [
    { id: 1, nome: "Vinicius", email: "vinicius@email.com", senha: "123456" },
    { id: 2, nome: "Ana", email: "ana@email.com", senha: "senhaAna123" },
    { id: 3, nome: "Carlos", email: "carlos@email.com", senha: "car123los" }
]

function login(email,senha){
  let email_filtrado = usuarios.filter(user=>user.email == email)
  if(email_filtrado ===0){
    console.log('digite um email valido pilantra')
    return
  }
   for(user of email_filtrado){
    console.log(user.email)
    if(user.email===email&&user.senha ===senha){
        console.log(`Bem vindo ${email}`)
    }else{
        console.log('Email e Senha incorreto')
    }
  }
}
login('carlos@email.com','car123los')