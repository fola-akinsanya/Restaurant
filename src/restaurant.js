const Menu = require("./menu")

class Restaurant {
    constructor(name,imageURL,city) {
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
        if (typeof city === 'string' && city.length > 0) {
            this.city= city
        }
        else {
            throw new Error ('Restaurant must have a city')
        }  
    }
    addMenu(menu) {
    if (!(menu instanceof Menu)) throw new Error ('addMenu can only add Menu class objects')
    this.menus.push(menu);
    }
}
module.exports = Restaurant