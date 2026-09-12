let valores = [8, 3, 4, 7, 9, 6, 10, 11, 7, 2, 4];

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// outra versão

console.log(valores);
for (pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

// buscar valor

valores.sort();
console.log(valores);
let posicao = valores.indexOf(7);
console.log(posicao);
