const objetos = document.getElementById('objetos')

let computador = {
    cpu: '',
    ram: '',
    hd: ''
}
const computadores = [
    {
    cpu: 'I9',
    ram: '64gb',
    hd: '2T'},
    {
    cpu: 'I7',
    ram: '32gb',
    hd: '1T'},
    {
    cpu: 'I5',
    ram: '16gb',
    hd: '512gb'}
]

const c2 = Object.create(computador)
c2.cpu = 'I9'
c2.ram = '64gb'
c2.hd = '2t'
console.log(c2)
// com o assign eu falo qual objeto eu quero relacionar com o c1 , e no caso eu quero clonar o objeto computador
const c1 = Object.assign({},computador)

const o1 = {
    obj1:'1'
}
const o2 = {
    obj2:'2'
}
const o3 = {
    obj3:'3'
}
const o4 =  Object.assign(o1,o2,o3)
console.log(o4)

computadores.forEach((c)=>{
    const div =  document.createElement('div')
    div.innerHTML = c.cpu+'<br/>'+c.hd+'<br/>'+c.ram
    objetos.appendChild(div)

})

//console.log(computadores)
//objetos.innerHTML = JSON.stringify(computadores)