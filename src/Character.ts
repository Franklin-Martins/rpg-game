import { Item } from "./Item"

export class Character {

    constructor(
        public name:string,
        public health:number,
        public wallet:number,
        public items?:Item[]
    ){
        
    }

    walk(){
        return `${this.name} is walking...`
    }

    simpleAttack(characterAttacked:Character, damage:number) {
        console.log(`\n${this.name} atacou ${characterAttacked.name} com ${damage} de dano!\n`)
        characterAttacked.health -= damage;
    }

    giveCoin(characterThatReceivedCoin: Character, value: number){
        console.log(`${characterThatReceivedCoin.name} recebeu ${value} moedas de ${this.name}`);
        characterThatReceivedCoin.wallet += value;
        this.wallet -= value;
    }
}