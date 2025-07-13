// lista encadeada
function linkedList(){
    let head = null
    let length = 0
    const new_node = (value)=>{
        return {
            value,
            next:null
        }
    }
    const add = (value)=>{
        if(!head){
            head = new_node(value)
            length++
            return head
        }
        
    }
    return {
        length:()=>length,
        add:(value)=>add(value),
        print:()=>console.log(head)
    }
}

const list = linkedList()
console.log(list.length())
list.add(1)
list.add(2)
console.log(list.length())
list.print()