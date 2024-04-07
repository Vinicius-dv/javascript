// como acionar propriedades documents

console.log(document.body)
console.log(document.head)
console.log(document.links[1])

let link  = document.links[0] // posso dar um .textContent = 'Facebook' para mudar o nome do link entra varias outras
link.style.cssText = 'color:red; text-decoration:none; background: yellow;'

console.log(document.URL)
console.log(document.title)

document.title = 'aula 50'
console.log(document.title)