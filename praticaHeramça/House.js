const Property = require("./Property");

class House extends Property {
    constructor( number, area, price ) {
        super( number, area, price )
    }
}




module.exports = House;