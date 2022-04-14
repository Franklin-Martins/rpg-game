import { Character } from "./Character";

export class Party {
    constructor(
        private name: string,
        public players?:Character[]
    ){}
}