"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassOfCharacter_1 = require("./ClassOfCharacter");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
let option = false;
let players = [];
while (!option) {
    let optionChoiced = prompt('0- Sair \n 1- Criar personagem \n 2- Realizar ação \n 3- Mostrar personagens\n');
    let optionChoicedNumber = Number(optionChoiced);
    if (optionChoicedNumber === 0) {
        console.log('Thanks for the game');
        option = true;
    }
    else {
        switch (optionChoicedNumber) {
            case 1:
                createPlayer();
                break;
            case 2:
                doAnAction();
                break;
            case 3:
                showPlayers();
                break;
            default:
                console.log('Por favor, digite um numero válido');
        }
    }
}
function createPlayer() {
    const name = prompt('Digite o nome do personagem: ');
    const health = prompt('Digite a quantidade de vida do personagem: ');
    const wallet = prompt('Digite a quantidade de moedas que o personagem tem: ');
    const classOfCharacter = prompt("Digite a classe a qual o personagem pertence: ");
    const healthInNumber = Number(health);
    const walletInNumber = Number(wallet);
    const character = new ClassOfCharacter_1.ClassOfCharacter(name, healthInNumber, walletInNumber, classOfCharacter);
    players.push(character);
}
function returnPlayer(name) {
    let player = undefined;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            player = players[i];
        }
    }
    return player;
}
function doAnAction() {
    const name = prompt('Digite o nome do personagem: ');
    const player = returnPlayer(name);
    if (!player)
        return console.log('Usuário não encontrado, tente novamente');
    const actionOption = prompt(`${player === null || player === void 0 ? void 0 : player.name} irá: \n 1- Atacar \n 2- Usar ataque especial \n 3- Dar moedas`);
    const actionOptionNumbered = Number(actionOption);
    switch (actionOptionNumbered) {
        case 1:
            playerAttackAnotherPlayer(player);
            break;
        case 2:
            playerSpecialAttackAnotherPlayer(player);
            break;
        case 3:
            playerGiveCoinsToAnotherPlayer(player);
            break;
        default:
            console.log('Por favor, digite um numero válido');
    }
}
function playerAttackAnotherPlayer(playerAttacking) {
    const name = prompt('Digite o nome do personagem que será atacado: ');
    const damage = prompt('Digite o dano: ');
    const damageNumbered = Number(damage);
    const player = returnPlayer(name);
    if (!player)
        return console.log('Usuário não encontrado, tente novamente');
    playerAttacking.simpleAttack(player, damageNumbered);
}
function playerSpecialAttackAnotherPlayer(playerAttacking) {
    const name = prompt('Digite o nome do personagem que será atacado: ');
    const damage = prompt('Digite o dano: ');
    const damageNumbered = Number(damage);
    const player = returnPlayer(name);
    if (!player)
        return console.log('Usuário não encontrado, tente novamente');
    playerAttacking.simpleAttack(player, damageNumbered);
}
function playerGiveCoinsToAnotherPlayer(playerAttacking) {
    const name = prompt('Digite o nome do personagem que receberá moeda: ');
    const value = prompt('Digite o valor: ');
    const valueNumbered = Number(value);
    const player = returnPlayer(name);
    console.log(player);
    if (!player)
        return console.log('Usuário não encontrado, tente novamente');
    playerAttacking.giveCoin(player, valueNumbered);
}
function showPlayers() {
    console.log("\n################# MOSTRANDO PERSONAGENS #################\n");
    for (let i = 0; i < players.length; i++) {
        console.log('------------------------------------------------------------');
        console.log(`\nJogador: ${players[i].name}\n`);
        console.log(`\nVida: ${players[i].health}\n`);
        console.log(`\nMoedas: ${players[i].wallet}\n`);
    }
}
