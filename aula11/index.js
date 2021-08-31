// Exercícios assíncronos

// Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.
console.log("Atividade 1 'for'");
for(i=0; i<=4; i++){
    console.log("Olá mundo");
}

// Contando números ímpares
// Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.
console.log("Atividade 2 'for'");
for(i=1; i<=10; i++){
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Criando a tabuada
// Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).
console.log("Atividade 3 'for'");
for(i=1; i<=10; i++){
    console.log("1 x " + i + " = " + (1*i) );
}

// Programa em Javascript que mostra os números ímpares
// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.
// console.log("Atividade 1 'while'");
// let numero = 1;
// while (numero <= 100) {
//     if (numero % 2 == 1) {
//         console.log("Números ímpares" + numero);
//         i++
//     }
//     else{
//     }
// }; criei um loop infinito que só mostra Números pares 1...