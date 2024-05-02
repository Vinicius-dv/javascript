class npc{
    static alerta = false
    constructor(p_energia){
        this.energia = p_energia
        
    }
    info = function(){
    console.log(`Energia: ${this.energia}`)
    console.log(`Alerta: ${(npc.alerta?'Sim':'Não')}`)
    
    }

    static alertar = function(){
        npc.alerta = true
    }
}


// cada um dos npc tem suas energias especificas
const npc_1 = new npc(100)
const npc_2 = new npc(70)
const npc_3 = new npc(85)



npc.alertar()

npc_1.info()
npc_2.info()
npc_3.info()
