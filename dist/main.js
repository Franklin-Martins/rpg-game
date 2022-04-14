"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;
const prompt = (0, prompt_sync_1.default)({ sigint: true });
while (!foundCorrectNumber) {
    // Get user input
    let guess = prompt('Guess a number from 1 to 10: ');
    // Convert the string input to a number
    let guessNumber = Number(guess);
    // Compare the guess to the secret answer and let the user know.
    if (guessNumber === numberToGuess) {
        console.log('Congrats, you got it!');
        foundCorrectNumber = true;
    }
    else {
        console.log('Sorry, guess again!');
    }
}
