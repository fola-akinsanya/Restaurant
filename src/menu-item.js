// const db = new sqlite3.Database('../restaurants.sqlite')
// const db = require('../db')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/restaurants.sqlite');

class MenuItem {
    constructor(name,price) {
        if (typeof name === 'string' && name.length > 0) {
            this.name= name
            }
        else {
            throw new Error ('Menu item must have a name')
        }
        if (!Number.isInteger(price)) {
            throw new Error ('Item price must be a number')
        }
        else {
            this.price= price
        }
    }
    save(cb) {
        db.run("INSERT INTO MenuItems(name, price) VALUES(?, ?)", [this.name, this.price], cb);
    }
}
module.exports = MenuItem

// const testmenuit = new MenuItem("Fola",12);
// db.run(`SELECT * FROM MenuItems`)