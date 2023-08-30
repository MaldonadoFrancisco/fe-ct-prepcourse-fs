/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(hola) {
   // Debe retornar un string.
   // Tu código: 
   console.log("hola");
   return "hola";
}
devolverString("hola")

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   console.log(2 + 3);
   return 2 + 3; 
}
suma();

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log(3 - 2);
   return 3 - 2; 
}
resta()



function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   console.log(10 / 5)
   return 10 / 5
}
divide()


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   console.log(1 * 20)
   return 1 * 20
}
multiplica()

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   console.log(20 - 5)
   return 20 - 5
}
obtenerResto()

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
