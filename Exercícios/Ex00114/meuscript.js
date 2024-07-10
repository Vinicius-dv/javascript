const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(mostrarPosloc,erroLoc)

}else{
    console.log('Geolocalização não suportada')
}

function mostrarPosloc(pos){
    long.innerHTML = pos.coords.longitude
    lati.innerHTML = pos.coords.latitude
}


function erroLoc(){
    console.log('Erro ao obter a localização')
}