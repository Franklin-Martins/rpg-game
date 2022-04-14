import { Character } from "./Character";

export class ClassOfCharacter extends Character {

    constructor(name:string,health:number, wallet:number, public nameOfClass:string){
        super(name, health, wallet);
    }

    specialAttack(characterAttacked:Character, damage:number){
        console.log(`${this.name} usou super ataque no ${characterAttacked.name} com ${damage} de dano`);
        characterAttacked.health -= damage;
    }

}
