//eventos onload onload só vai ser executado após carregar o conteúdo do site , veja que seu eu botar o carregou js fora do evento de onload  carregou js vai ser executado primeiro pq o evento onload só vai ser executado depois do conteúdo do site
window.onload = ()=>{
    console.log('Carregou o dom')
    console.log('Carregou o js')
}

