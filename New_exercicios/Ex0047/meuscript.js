class Pessoa{
   constructor(name,damage,health,experience,position){
      this.name = name
      this.damage = damage
      this.health = health
      this.experience = experience
      this.position = position
   }
}

let new_pessoa = new Pessoa("Hero")
console.log(new_pessoa)