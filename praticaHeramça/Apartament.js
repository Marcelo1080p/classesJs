const Property = require('./Property');

class Apartament extends Property{
    constructor( number, area, price, typeProperty ) {
        super( number, area, price, typeProperty )
    }
}

module.exports = Apartament;