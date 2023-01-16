const Property = require("./Property");

class House extends Property {
    constructor( number, area, price, typeProperty) {
        super( number, area, price, typeProperty )
    }
}




module.exports = House;