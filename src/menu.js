const MenuItem = require("./menu-item")

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
}
module.exports = Menu
