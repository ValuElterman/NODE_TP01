import url from 'url';

function parsearUrl(urlParaProcesar) {
    try { const miUrl = new URL(urlParaProcesar);
        return {
        "host": `${miUrl.protocol}//${miUrl.host}`, 
        "pathname": miUrl.pathname,
        "parametros": Object.fromEntries(miUrl.searchParams)
        }
    } catch (error) {
        console.log('Error. Algo esta mal.');
        return null;
    }   
};

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");

console.log(objeto);