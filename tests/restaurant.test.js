const Menu = require("../src/menu")
const Restaurant = require("../src/restaurant")
// const db = require('../Database/db')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/restaurants.sqlite');

describe('Restaurant objects', () => {
    test('have a name', () => {
        expect(() => new Restaurant("","www.test.com")).toThrowError('Restaurant must have a name')
    })
    test('restaurant name', () => {
        const testresto = new Restaurant("testresto","www.com");
        expect(testresto.name).toEqual('testresto')
    })
    test('have an image URL', () => {
        expect(() => new Restaurant("Test Restaurant","")).toThrowError('Restaurant must have an imageURL')
    })
    test('image URL', () => {
        const testresto = new Restaurant("testresto","www.com");
        expect(testresto.imageURL).toEqual('www.com')
    })
    // test('have a city', () => {
    //     expect(() => new Restaurant("Test Restaurant","www.test.com","")).toThrowError('Restaurant must have a city')
    // })
    // test('city', () => {
    //     const testresto = new Restaurant("testresto","www.com","London");
    //     expect(testresto.city).toEqual('London')
    // })
    test('add Menu', () => {
        const testresto = new Restaurant("testresto","www.com");
        const testmenu = new Menu('drinks','1');
        testresto.addMenu(testmenu);
        expect(testresto.menus[0].title).toEqual('drinks')
    })
    test('add Menu from class only', () => {
        expect(() => new Restaurant("Test Restaurant","www.test.com").addMenu("drinks","1")).toThrowError('addMenu can only add Menu class objects')
        })
})

describe('Restaurants', () => {
    beforeAll((done) => {
        db.run('CREATE TABLE IF NOT EXISTS Restaurants(id INTEGER PRIMARY KEY, name TEXT, imageURL TEXT);', done)
    })

    test('When a Restaurant is created it is stored in the database', (done) => {
        const restaurant = new Restaurant("Boo Jangles","https://some.image.url")
        expect(restaurant.name).toBe("Boo Jangles")
        restaurant.save(() => { 
            db.get(`SELECT * FROM Restaurants WHERE id=?;`, 1, (err, row) => {
                expect(row.id).toBe(1)
                expect(row.name).toBe('Boo Jangles')
                done()
            })
        })
    })
})