let array = [4, 69, 56 ,7];
console.log(array);

let multiplo3 = (array[0] % 3) === 0;
console.log(multiplo3);

let negativo = array[1] < 0;
console.log(negativo);

let tercero = array[2] >= 10 && array[2] <=100;
console.log(tercero);

let primeroMasGrande = array[0] > array[1];
console.log(primeroMasGrande);

let par = (array[0] % 2) === 0 || (array[1] % 2) === 0 || (array[2] % 2) === 0 || (array[3] % 2) === 0;
console.log(par);

let todosPar = (array[0] % 2) === 0 && (array[1] % 2) === 0 && (array[2] % 2) === 0 && (array[3] % 2) === 0;
console.log(todosPar);