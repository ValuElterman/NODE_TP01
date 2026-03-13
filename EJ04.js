import fs from 'fs';

function cambiarNombre(nombre1, nombre2){
    fs.renameSync(nombre1, nombre2);
    console.log(`El archivo se llamaba: ${nombre1}`);
    console.log(`El archivo ahora se llama: ${nombre2}`);
}

fs.writeFileSync('archivo.txt', 'Hola, este es un archivo de texto.');

cambiarNombre('archivo.txt', 'nuevo_nombre.txt');