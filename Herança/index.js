class Property {
    constructor( area, price ) {
        this.area = area;
        this.price = price;
    }

    getPriceSquareMeter() {
        return this.price / this.area;
    }
}


class House extends Property {
    
}

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse.getPriceSquareMeter());
console.log( someHouse instanceof Property )


class Apartment extends Property{
    constructor( number, area, price ) {
        super( area, price );
        this.number = number;
    }

    getFloor() {
        return this.number.slice( 0, -2 );
    }
}


const apt = new Apartment( "291", "120", "50000" )
console.log( apt )
console.log( apt.getFloor() )