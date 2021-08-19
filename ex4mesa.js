// Integrantes do Grupo: Rafael Camargo, Alcilene Pereira, Flavio Henrique, Edi Silveira e Eduardo Russo.

let nome = [];
nome [0] = "José";
nome [1] = "Carlos";
nome [2] = "Aline";
nome [3] = "Ana";

let sobrenome = [];
sobrenome [0] = "da Silva";
sobrenome [1] = "de Souza";
sobrenome [2] = "Ferreira";
sobrenome [3] = "Paula";


let idade = [];
idade [0] = 27;
idade [1] = 28;
idade [2] = 33;
idade [3] = 26;


let peso = [];   
peso [0] = 83.5;
peso [1] = 80.1;
peso [2] = 63.7;
peso [3] = 55.0;


let altura = [];
altura [0] = 1.70;
altura [1] = 1.76;
altura [2] = 1.53;
altura [3] = 1.62;


let plano = [];
plano [0] = true;
plano [1] = true;
plano [2] = false;
plano [3] = true;


let imc = [];
imc [0] = peso[0] / (altura[0] * altura[0]);
imc [1] = peso[1] / (altura[1] * altura[1]);
imc [2] = peso[2] / (altura[2] * altura[2]);
imc [3] = peso[3] / (altura[3] * altura[3]);


console.log(nome[0], sobrenome[0], 'tem', idade[0], 'anos e seu índice de massa corporal é de', imc[0])
console.log(nome[1], sobrenome[1], 'tem', idade[1], 'anos e seu índice de massa corporal é de', imc[1])
console.log(nome[2], sobrenome[2], 'tem', idade[2], 'anos e seu índice de massa corporal é de', imc[2])
console.log(nome[3], sobrenome[3], 'tem', idade[3], 'anos e seu índice de massa corporal é de', imc[3])