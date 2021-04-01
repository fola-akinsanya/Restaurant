const MenuItem = require("./menu-item")
// const db = new sqlite3.Database('../restaurants.sqlite')
// const db = require('../db')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/restaurants.sqlite');

class Menu {
    constructor(title,icon) {
        this.items= []
        if (typeof title === 'string' && title.length > 0) {
            this.title= title
            }
        else {
            throw new Error ('Menu must have a title')
        }
        if (typeof icon === 'string' && icon.length !== 1) {
            throw new Error ('Menu icon must be an emoji')
        }
        else {
            this.icon = icon
        }
    }
    addItem(item) {
        if (!(item instanceof MenuItem)) throw new Error ('addItem can only add MenuItem class objects')
        this.items.push(item);
        }
    save(cb) {
        db.run("INSERT INTO Menus(title, icon) VALUES(?, ?)", [this.name, this.icon], cb);
    }
}
module.exports = Menu

// const testmenu = new Menu("Fola","w");
// db.run(`SELECT * FROM Menus`)