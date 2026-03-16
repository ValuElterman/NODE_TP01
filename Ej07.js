import countryToCurrency from "country-to-currency";

function Moneda(codigoPais){
return countryToCurrency[codigoPais];
}

let moneda = Moneda("AR");
console.log(moneda); //aparece ARS en vez de peso argentino por la biblioteca

let moneda2= Moneda("US");
console.log(moneda2);