const MenuItem = require("../src/menu-item")
// const db = require('../Database/db')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../restaurants.sqlite');

describe('MenuItem objects', () => {
    test('have a name', () => {
        expect(() => new MenuItem("","1")).toThrowError('Menu item must have a name')
    })
    test('name', () => {
        const testitem = new MenuItem("bread",1);
        expect(testitem.name).toEqual('bread')
    })
    test('price', () => {
        const testitem = new MenuItem("bread",1);
        expect(testitem.price).toEqual(1)
    })
    test('valid price', () => {
        expect(() => new MenuItem("bread","")).toThrowError('Item price must be a number')
    })
})