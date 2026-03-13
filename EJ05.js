import url from 'url';

function parsearUrl(urlParaProcesar) {
    const miUrl = new URL(urlParaProcesar);
    return {
        "host": `${miUrl.protocol}//${miUrl.host}`, 
        "pathname": miUrl.pathname,
        "parametros": Object.fromEntries(miUrl.searchParams)
    };
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

console.log(objeto);