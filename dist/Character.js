"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name, health, wallet, weight, height, items) {
        this.name = name;
        this.health = health;
        this.wallet = wallet;
        this.weight = weight;
        this.height = height;
        this.items = items;
    }
    walk() {
        return `${this.name} is walking...`;
    }
    simpleAttack(characterAttacked, damage) {
        console.log(`${this.name} atacou ${characterAttacked.name} com ${damage} de dano!`);
        characterAttacked.health -= damage;
    }
    giveCoin(characterThatReceivedCoin, value) {
        console.log(`${characterThatReceivedCoin.name} recebeu ${value} moedas de ${this.name}`);
        characterThatReceivedCoin.wallet += value;
        this.wallet -= value;
    }
}
exports.Character = Character;
