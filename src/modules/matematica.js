const restar = (a, b) => a - b;

const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

function multiplicar(a, b){
    return a * b;
}

const PI = 3.14
function sumar (a){
    return PI + a;
}

export default{
    restar,
    dividir,
    multiplicar,
    sumar,
    PI
};