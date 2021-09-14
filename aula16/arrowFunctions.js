// Transforme as seguintes funções em arrow functions:

// function print(mensagem){
//   console.log(mensagem)
// }
// print("Olá, bom dia")

const imprimir = mensagem => console.log(mensagem)
imprimir('Olá, bom dia')
 
// function soma(n1, n2){
//   return n1 + n2
// }
// console.log(soma(10, 10))

const somar = (n1, n2) => n1 + n2
console.log(somar(10,10))
