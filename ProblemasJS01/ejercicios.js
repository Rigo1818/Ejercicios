/* 1. Tienen dos arreglos de String, 'cielentes' y 'empleados', y 
deseas combinarlas para crear un arreglo de contactos. ¿Qué mètodo
sería el mas adecuado para esta tarea?

a. concat <-- Concatena dos arreglos
b. join    x  join devulve una cadena concatenada.
c. push    x  Agrega un elemeto en la ultoma posiciòn de un array.
d. splice  x  Elimina o remplaza elementos en una matriz.

 */

const clientes = ['Rigo', 'Edgar', 'Gael', 'Ale'];
const empleados = ['Jerry', 'Keydi', 'Layka'];

const contactos =clientes.concat(empleados);

console.log(contactos);

/* 2. Teniendo el siguiente arreglo */

var numbers = [5, 32, 43, 4];

const resultado = numbers.filter(function(n){
    return n % 2!==0; // verifica si el número es impar.
});

console.log(resultado); // 5 y 43


/* 3. Dado el siguiente arreglo de objetos: */

var people = [{
    id:1,
    name:"John",
    age:28
},{
    id:2,
    name: "Jane",
    age:31
},{
    id:3,
    name:"Peter",
    age:55
}];

// Genera una función que filtre a las personas menores de 35 años.
const personas = people.filter(function(m) {
    return m.age < 35; 
});

console.log(personas);

/* 4. Dado el siguiente arreglo de objetos: */

let people1 = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 4 }
];

function contarNombres(p) {
    let contador = {};

    for (let i = 0; i < p.length; i++) {
        let nombre = p[i].name;

        if (contador[nombre]) {
            contador[nombre]++;
        } else {
            contador[nombre] = 1;
        }
    }

    return contador;
}

let resultados = contarNombres(people1);

for (let nombre in resultados) {
    console.log(`El nombre: ${nombre}, aparece: ${resultados[nombre]}`);
}

/* 4. Dado el siguiente arreglo : */

var myArray = [1, 2, 3, 4];

// Genera una función para encontrar el numero mayor y el menor.
function mayor(may) {
    return Math.max(...may); // Encontrar el mayor
}

function menor(may) {
    return Math.min(...may); // Encontrar el menor
}

console.log(`El mayor es: ${mayor(myArray)}`); 
console.log(`El menor es: ${menor(myArray)}`); 

/* 4. Dado el siguiente objeto : */

var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4:20
};

// Genera la función para pasar cada elemento 'key' a un arreglo y ordenarlos según su valor.

var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};

function ordenarClaves(obj) {
    var claves = []; 

    
    for (var key in obj) {
        claves.push(key); 
    }

    claves.sort();

    return claves; 
}

var clavesOrdenadas = ordenarClaves(object);
console.log(clavesOrdenadas); 





