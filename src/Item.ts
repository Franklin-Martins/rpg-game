export class Item {

    constructor(
        private name:string,
        private price: number,
        private reach: number,
        private damage?: number
    ){}

    useItem(){
        return `${this.name} was used!`
    }
}