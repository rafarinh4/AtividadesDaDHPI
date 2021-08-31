console.log("Atividade aula 10, assíncrona.");
let listaDeCompras = ['Arroz', 'Feijão', 'Tomate', 'Goiaba'];
console.log(listaDeCompras);

console.log("<------------------------------------------------------------------->");

console.log("O método Join junta os elementos do array e separa pelo jeito que voce indicar");
let separarPorTraco = listaDeCompras.join(" - ");
console.log(separarPorTraco);

console.log("<------------------------------------------------------------------->");

console.log("O método Pop elimina o último elemento de um array");
let ultimaCompra = listaDeCompras.pop();
console.log(listaDeCompras);
console.log("Aqui está o que retiramos");
console.log(ultimaCompra);

console.log("<------------------------------------------------------------------->");

console.log("O método Push adiciona um ou mais elementos ao final do array");
listaDeCompras.push("Macarrão", "Carne");
console.log(listaDeCompras);

console.log("<------------------------------------------------------------------->");

console.log("O método Shift elimina o primeiro elemento do array");
let primeiraCompra = listaDeCompras.shift();
console.log(listaDeCompras);
console.log("Aqui está o elemento retirado")
console.log(primeiraCompra);

console.log("<------------------------------------------------------------------->");

console.log("O método unshift adiciona um ou mais elementos no início do array");
listaDeCompras.unshift("Granola", "Açúcar");
console.log(listaDeCompras);