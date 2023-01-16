class Property {
    constructor( area, price ) {
        this.area = area;
        this.price = price;
    }

    getPriceSquareMeter() {
        return this.price / this.area;
    }
}