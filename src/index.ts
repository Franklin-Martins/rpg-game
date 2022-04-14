import { ClassOfCharacter } from "./ClassOfCharacter";
import PromptSync from "prompt-sync";
import { Character } from "./Character";

const prompt = PromptSync({sigint:true});

let option = false;

let players:Character[] = []

while (!option) {
    let optionChoiced = prompt('0- Sair \n 1- Criar personagem \n 2- Realizar ação \n 3- Mostrar personagens\n');
    let optionChoicedNumber = Number(optionChoiced);

    if (optionChoicedNumber === 0) {
        console.log('Thanks for the game');
        option = true;
    } else {
        switch(optionChoicedNumber){
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
                console.log('Por favor, digite um numero válido')
        }
    }
}

function createPlayer() {
    const name = prompt('Digite o nome do personagem: ');
    const health = prompt('Digite a quantidade de vida do personagem: ');
    const wallet = prompt('Digite a quantidade de moedas que o personagem tem: ');
    const classOfCharacter = prompt("Digite a classe a qual o personagem pertence: ");

    const healthInNumber = Number(health)
    const walletInNumber = Number(wallet)

    const character = new ClassOfCharacter(name, healthInNumber, walletInNumber, classOfCharacter)

    players.push(character);
}

function returnPlayer(name:string):Character| undefined{
    let player:Character|undefined = undefined;

    for(let i=0; i< players.length;i++){
        if(players[i].name == name){
            player = players[i];
        }
    }

    return player;
}

function doAnAction() {
    const name = prompt('Digite o nome do personagem: ');
    
    const player = returnPlayer(name)

    if(!player) return console.log('Usuário não encontrado, tente novamente');

    const actionOption = prompt(`${player?.name} irá: \n 1- Atacar \n 2- Usar ataque especial \n 3- Dar moedas\n`);
    const actionOptionNumbered = Number(actionOption);

    switch(actionOptionNumbered){
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
            console.log('Por favor, digite um numero válido')
    }

}

function playerAttackAnotherPlayer(playerAttacking: Character){
    const name = prompt('Digite o nome do personagem que será atacado: ');
    const damage = prompt('Digite o dano: ');
    const damageNumbered = Number(damage)
    
    const player = returnPlayer(name);

    if(!player) return console.log('Usuário não encontrado, tente novamente');

    playerAttacking.simpleAttack(player, damageNumbered)
}

function playerSpecialAttackAnotherPlayer(playerAttacking: Character){
    const name = prompt('Digite o nome do personagem que será atacado: ');
    const damage = prompt('Digite o dano: ');
    const damageNumbered = Number(damage)
    
    const player = returnPlayer(name);

    if(!player) return console.log('Usuário não encontrado, tente novamente');

    playerAttacking.simpleAttack(player, damageNumbered)
}

function playerGiveCoinsToAnotherPlayer(playerAttacking: Character){
    const name = prompt('Digite o nome do personagem que receberá moeda: ');
    const value = prompt('Digite o valor: ');
    const valueNumbered = Number(value)
    
    const player = returnPlayer(name);
    
    if(!player) return console.log('Usuário não encontrado, tente novamente');

    playerAttacking.giveCoin(player, valueNumbered)
}

function showPlayers() {
    console.log("\n################# MOSTRANDO PERSONAGENS #################\n");
    for(let i=0;i< players.length;i++){
        console.log('------------------------------------------------------------')
        console.log(`\nJogador: ${players[i].name}\n`);
        console.log(`\nVida: ${players[i].health}\n`);
        console.log(`\nMoedas: ${players[i].wallet}\n`);
    }
}