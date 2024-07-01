const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')


q1.addEventListener('click',()=>{
    let Domrect_q1 = q1.getBoundingClientRect()
    posx.innerHTML = `Posx:${Domrect_q1.x}`
    posy.innerHTML = `Posy:${Math.floor(Domrect_q1.y)}`
    largura.innerHTML = `Largura:${Domrect_q1.width}`
    altura.innerHTML = `Altura:${Domrect_q1.height}`

})


q2.addEventListener('click',()=>{
    let Domrect_q2 = q2.getBoundingClientRect()
    posx.innerHTML = `Posx:${Domrect_q2.x}`
    posy.innerHTML = `Posy:${Math.floor(Domrect_q2.y)}`
    largura.innerHTML = `Largura:${Domrect_q2.width}`
    altura.innerHTML = `Altura:${Domrect_q2.height}`

})