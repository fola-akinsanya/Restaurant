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
    }
module.exports = MenuItem