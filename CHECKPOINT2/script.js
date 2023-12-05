//EJERCICIO 1

let numeros = [1, 2, 3, 4];

function suma(arr) {
  let suma = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma += arr[i];
    };
  }
  return suma;
}

const response = suma(numeros);

console.log(response);

//EJERCICIO 2

const people= [
    { name: 'Mario', age: 32 },
    { name: 'Luigi', age: 28 },
    { name: 'Peach', age: 29 },
    { name: 'Toad', age: 35 }
  ];


function findOldest(arr) {
    let oldest = arr.sort((a,b) => a.age - b.age)
    return oldest[oldest.length - 1]; 
};

console.log(findOldest(people));


