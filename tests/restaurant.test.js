const Menu = require("../src/menu")
const Restaurant = require("../src/restaurant")

describe('Restaurant objects', () => {
    test('have a name', () => {
        expect(() => new Restaurant("","www.test.com","London")).toThrowError('Restaurant must have a name')
    })
    test('restaurant name', () => {
        const testresto = new Restaurant("testresto","www.com","London");
        expect(testresto.name).toEqual('testresto')
    })
    test('have an image URL', () => {
        expect(() => new Restaurant("Test Restaurant",""," London")).toThrowError('Restaurant must have an imageURL')
    })
    test('image URL', () => {
        const testresto = new Restaurant("testresto","www.com","London");
        expect(testresto.imageURL).toEqual('www.com')
    })
    test('have a city', () => {
        expect(() => new Restaurant("Test Restaurant","www.test.com","")).toThrowError('Restaurant must have a city')
    })
    test('city', () => {
        const testresto = new Restaurant("testresto","www.com","London");
        expect(testresto.city).toEqual('London')
    })
    test('add Menu', () => {
        const testresto = new Restaurant("testresto","www.com","London");
        const testmenu = new Menu('drinks','1');
        testresto.addMenu(testmenu);
        expect(testresto.menus[0].title).toEqual('drinks')
    })
    test('add Menu from class only', () => {
        expect(() => new Restaurant("Test Restaurant","www.test.com","London").addMenu("drinks","1")).toThrowError('addMenu can only add Menu class objects')
        })
    })