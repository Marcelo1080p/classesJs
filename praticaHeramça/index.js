const House = require("./House");
const Apartament = require("./Apartament");


const apartamento = new Apartament('74', '200', '150000', 'Apartamento')
const casa = new House('94', '92', '5000', 'casa');

console.log(casa)

console.log(apartamento.priceAreaSquared())