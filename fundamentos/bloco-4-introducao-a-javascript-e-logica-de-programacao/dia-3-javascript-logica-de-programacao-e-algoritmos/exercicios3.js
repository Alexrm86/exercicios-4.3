let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior= array[0];
let menor = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior= array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menor.length) {
    menor = array[index];
  }
}

console.log("a maior string " + maior);
console.log("a maior string " + menor);

     
   
   