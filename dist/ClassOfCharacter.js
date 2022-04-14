"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassOfCharacter = void 0;
const Character_1 = require("./Character");
class ClassOfCharacter extends Character_1.Character {
    constructor(name, health, wallet, nameOfClass) {
        super(name, health, wallet);
        this.nameOfClass = nameOfClass;
    }
    specialAttack(characterAttacked, damage) {
        console.log(`${this.name} usou super ataque no ${characterAttacked.name} com ${damage} de dano`);
        characterAttacked.health -= damage;
    }
}
exports.ClassOfCharacter = ClassOfCharacter;
