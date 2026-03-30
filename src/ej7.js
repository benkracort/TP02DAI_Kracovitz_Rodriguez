import { getCountry, getCurrencyAbbreviation } from 'currency-map-country';
let monedaDelPais, codigoPais;

codigoPais = 'USA';
monedaDelPais = console.log(obtenerMoneda(codigoPais));

codigoPais = 'UZA';
monedaDelPais = console.log(obtenerMoneda(codigoPais));

function obtenerMoneda(codigoPais) {
    let moneda;
    getCountry(codigoPais)
    if (!getCountry(codigoPais)) {
        return 'Código de país no válido';
    } else {
        moneda = getCurrencyAbbreviation(codigoPais);
    }
    return console.log(`La moneda del país ${codigoPais} es: ${moneda}`);
}