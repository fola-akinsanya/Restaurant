const sqlite3 = require('sqlite3').verbose();

// use a persistent database named myDb.sqlite
const db = new sqlite3.Database('./restaurants.sqlite');

/**
 * Executes the SQL statements one at a time.
 */
try {
    db.serialize(function () { // serialize means execute one statement at a time

        // delete tables that already exist
        db.run(`DROP TABLE IF EXISTS Restaurants`);
        db.run(`DROP TABLE IF EXISTS Menus`);
        db.run(`DROP TABLE IF EXISTS MenuItems`);

        // create the empty table with specific columns and column types
        db.run(`CREATE TABLE Restaurants(id INTEGER PRIMARY KEY, 
            name TEXT, 
            imageURL TEXT)`);

        db.run(`CREATE TABLE Menus(id INTEGER PRIMARY KEY, 
            title TEXT, 
            icon TEXT,
            restaurant_id INT, 
            FOREIGN KEY(restaurant_id) REFERENCES Restaurants (id))`);
        
        db.run(`CREATE TABLE MenuItems(id INTEGER PRIMARY KEY, 
            name TEXT, 
            price REAL,
            menu_id INT, 
            FOREIGN KEY(menu_id) REFERENCES Menus (id))`);
        
            
        db.each("SELECT * FROM Menus",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );

        db.each("SELECT * FROM Restaurants JOIN Menus ON Restaurants.id = Menus.restaurant_id",
            function (err, rows) {  // this is a callback function
                console.log(rows);  // rows contains the matching rows
            }
        );
        })     
} finally {
    db.close();
}

module.exports = db