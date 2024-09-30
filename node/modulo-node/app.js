const saludos = require('./saludos') //importar un objeto
const calcular = require('./calculadora') //importar un objeto
//console.log(saludos);

console.log(saludos.saludar('Javier'));
console.log(saludos.bienvenida('Javier'));
console.log(calcular.suma(2,3));