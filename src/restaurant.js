const Menu = require("./menu")
// const db = new sqlite3.Database('../restaurants.sqlite')
// const db = require('../db')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/restaurants.sqlite');

class Restaurant {
    constructor(name,imageURL) {
        this.menus = []
        if (typeof name === 'string' && name.length > 0) {
            this.name= name
            }
        else {
            throw new Error ('Restaurant must have a name')
        }
        if (typeof imageURL === 'string' && imageURL.length > 0) {
            this.imageURL= imageURL
        }
        else {
            throw new Error ('Restaurant must have an imageURL')
        }
        // }
        // if (typeof city === 'string' && city.length > 0) {
        //     this.city= city
        // }
        // else {
        //     throw new Error ('Restaurant must have a city')
        // }  
    }
    addMenu(menu) {
        if (!(menu instanceof Menu)) throw new Error ('addMenu can only add Menu class objects')
        this.menus.push(menu);
    }
    save(cb) {
        db.run("INSERT INTO Restaurants(name, imageURL) VALUES(?, ?)", [this.name, this.imageURL], cb);
    }
}
module.exports = Restaurant

// const testrest = new Restaurant("Fola","www.");

// testrest.save(function () { db.run(`SELECT * FROM Restaurants`)})

// const testrest2 = new Restaurant("Sonia","www.");

// testrest2.save(function () {db.run(`SELECT * FROM Restaurants`)})
