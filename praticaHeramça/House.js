const Property = require("./Property");

class House extends Property {
    constructor( number, area, price ) {
        super( number, area, price )
    }
}

const casa = new House('94', '92', '5000');

console.log(casa.priceAreaSquared())