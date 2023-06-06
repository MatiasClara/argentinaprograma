// "Bienvenidxs al curso de programación 2023"
//a) ¿Cómo puedo hacer para saber en qué posición empieza la palabra "curso"?
//¿y la palabra "programa"?
//b) imprima en pantalla la palabra curso usando la función adecuada para los strings.
//c) Cree un arreglo cuyos elementos sean las palabras de la frase e imprimalo en 
//pantalla.
//d)  Cree otro arreglo cuyos elementos sean las letras de la frase. 
//Muestre la longitud 
//e) ¿Cómo podemos saber si el string inicial del ejercicio tiene 
//números? ¿Como podemos hacer para saber si todos los caracteres son números?

//a)
let string = "Bienvenidxs al curso de programación 2023";
console.log(string.indexOf("curso"));
console.log(string.indexOf("programa "));

//b)
console.log(string.slice((string.indexOf("curso")), (string.indexOf("curso") + 5 )));

//c)
let array1 = string.split(" ");
console.log(array1);

//d)
let array2 = string.split("");
console.log(array2);
console.log("La longitud de array2 es \n" + array2.length);

//e)
let sonDigitos = array2.map(e => !isNaN(Number(e)));
console.log(sonDigitos);
