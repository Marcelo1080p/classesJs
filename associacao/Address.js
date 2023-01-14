class Address {
    constructor( street, number, neighborhood, city, state ) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }

    fullAddress() {
        return `Rua ${this.street}, nª: ${this.number}, bairro: ${this.neighborhood}\n Cidade: ${this.city}, Estado: ${this.state}`
    }
}


const pessoa = new Address('Horto Florestal', '94', 'Santa Emilia', 'Embu das artes', 'São Paulo');


console.log(pessoa.fullAddress())

export default Address;