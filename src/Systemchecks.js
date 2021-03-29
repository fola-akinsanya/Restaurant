const Restaurant = require('../src/restaurant')
const Menu = require('../src/menu')
const MenuItem = require('../src/menu-item')

const Mcdonalds = new Restaurant('Mcdonalds','www.test.com','London');
const menu1 = new Menu('drinks','1')
const menuitem1= new MenuItem("bread",11)

Mcdonalds.addMenu(menu1);
menu1.addItem(menuitem1);
