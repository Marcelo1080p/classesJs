class Property {
    constructor( number, area, price, typeProperty ) {
        this.number = number;
        this.area = area;
        this.price = price;
        this.typeProperty = typeProperty;
    }


    dados() {
        return ;
    }

    priceAreaSquared() {
        return `O valor do M² da propriedade é ${ Math.floor(this.price / this.area)}`;
    }
}


module.exports = Property;