"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, price, reach, damage) {
        this.name = name;
        this.price = price;
        this.reach = reach;
        this.damage = damage;
    }
    useItem() {
        return `${this.name} was used!`;
    }
}
exports.Item = Item;
