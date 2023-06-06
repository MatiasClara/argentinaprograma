//1) Dada la cadena " Bienvenidxs al Curso de Programación "
//Escribir un código que:
//a) muestre la longitud de la frase.
//b) elimine de la frase los espacios al comienzo.
//c) imprima el primer y último elemento de la cadena. 
//d) cree una nueva variable para almacenar la frase anterior de modo que en la que 
//sólo la primera letra esté con mayúscula y muestre la nueva frase por pantalla. 
//e) escriba un nuevo string y arme otro que sea la unión del inicial más el que usted 
//creó.

let string = " Bienvenidxs al Curso de Programación ";
console.log(string);
//a)
console.log("La longitud del string es " + string.length);
//b)
console.log(string.trim());
//c)
console.log("La primera letra del string es " + string.charAt(1));
console.log("La ultima letra del string es " + string[string.length - 2]);
//d)
let variable = string.trim();
let variable2 = variable.slice(1);
let string2 = variable.charAt(0) + variable2.toLowerCase();
console.log(string2);
//e)
let string3 = "Hola mundo, ";
let string4 = string3 + variable.toLowerCase();
console.log(string4);
