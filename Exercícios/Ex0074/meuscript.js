
const button = document.getElementById('btn-action')

console.log(container)
console.log(button)

button.addEventListener('click',()=>{
    const container = document.getElementById('container')

    if(container.style.display === 'none'){
        container.style.display = 'block'
    } else{
        container.style.display = 'none'
    }
})

const buttonb = document.getElementById('btn-action-b')
buttonb.addEventListener('click',()=>{
    const containerb = document.getElementById('container-b')

    // com esse método toogle eu vou adicionar uma class se ela não existir a container-b , se ela existir esse método remove essa class
    containerb.classList.toggle('hide')
})
