let w = 2;
let x = 20;
let y = 10;
let z = 8;

let wx = w + x;
let yz = y - z;
let resultadoFinal = wx * yz;
console.log(resultadoFinal);

let esPar = (resultadoFinal % 2) === 0;
console.log(esPar);

console.log("Mis variables iniciales fueron: " +  w + ", " + x + ", " + y +  " y " + z + ". La respuesta a verificar si el resultado final es par es: " + esPar);