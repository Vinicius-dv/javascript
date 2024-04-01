alert('Olá')
let novatarefa = document.getElementById('adionar')
let btntarefa = document.getElementById('btnaddtarefa')
let listatarefas = document.getElementById('listatarefas')


novatarefa.addEventListener('keypress' , (e) => {
    if(e.key ==13){
        let tarefa = {
            nome: novatarefa.value,
            id : gerarid(),
        }
        //Próxima tarefa adionar a tarefa ao html
    }
})

btntarefa.addEventListener('click' , (e) =>{
    
        let tarefa = {
            nome: novatarefa.value,
            id : gerarid(),
        }
        //Próxima tarefa adionar a tarefa ao html
    }
)

function gerarid(){
    return Math.floor(Math.random() *3000)
}

