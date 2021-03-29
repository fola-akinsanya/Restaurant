const { test } = require("@jest/globals")
const Menu = require("../src/menu")
const MenuItem = require("../src/menu-item")

describe('Menu objects', () => {
    test('have a title', () => {
        expect(() => new Menu("","1")).toThrowError('Menu must have a title')
    })
    test('menu name', () => {
        const testitem = new Menu("testmenu","1");
        expect(testitem.title).toEqual('testmenu')
    })
    test('menu icon', () => {
        const testicon = new Menu("testmenu","1");
        expect(testicon.icon).toEqual('1')
    })
    test('have an icon', () => {
        expect(() => new Menu("Test Menu","")).toThrowError('Menu icon must be an emoji')
    })
    test('icon must be an emoji', () => {
        expect(() => new Menu("Test Menu","12")).toThrowError('Menu icon must be an emoji')
    })
    test('add Item', () => {
        const testmenu = new Menu("testmenu","1");
        const testitem = new MenuItem("bread",12);
        testmenu.addItem(testitem);
        expect(testmenu.items[0].name).toEqual('bread')
    })
    test('add Item from class only', () => {
        expect(() => new Menu("drinks","1").addItem("coke",2)).toThrowError('addItem can only add MenuItem class objects')
        })
    })
