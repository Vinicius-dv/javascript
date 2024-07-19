const dark_mod = document.getElementById('dark_mod')

dark_mod.addEventListener('click',()=>{
    document.body.classList.toggle('dark_mod')
    if(document.body.classList.contains('dark_mod')){
        localStorage.setItem('darkmod','enable')
    }else{
        localStorage.setItem('darkmod','disable')
    }
})

const mod_dark = localStorage.getItem('darkmod')
if(mod_dark === 'enable'){
    document.body.classList.add('dark_mod')
}
