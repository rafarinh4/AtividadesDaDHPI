console.log ("-------------- Primeira função --------------");

function senhaValida(senha) {
    if (senha === 1234) {
        console.log("ACESSO PERMITIDO");
    } else {
        console.log("ACESSO NEGADO");
    }
}
senhaValida(1234);

console.log ("-------------- Segunda função --------------");

function valores(a,b) {
    if (a > b) {
        console.log("O primeiro número é maior");
    }
    else if (a < b){
        console.log("O segundo número é maior");
    }
    else{
        console.log("Os dois números são iguais");
    }
}
valores(4,4);

console.log ("-------------- Terceira função --------------");

let valor = 13;
switch (valor) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")
        break;        
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
        console.log("Agosto")
        break;
    case 9:
        console.log("Setembro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Dezembro")
        break;
    default:
        console.log("Não tem")
        break;
}

console.log ("-------------- Quarta função --------------");

let senha = 123;
    teste = senha === 1234 ? "Acesso permitido" : "Acesso negado";
console.log(teste);

console.log ("-------------- Desafio Microondas --------------");

let Pipoca = "Pipoca";
let Macarrao = "Macarrão";
let Carne = "Carne";
let Feijao = "Feijão";
let Brigadeiro = "Brigadeiro";

let TempoP = 10;
let TempoM = 8;
let TempoC = 15;
let TempoF = 12;
let TempoB = 8;

function Microondas(comida, tempo) {

    //Caso escolha Pipoca e o tempo

    if ((comida == Pipoca) && (tempo < TempoP)) {
        console.log("Tempo insuficiente");
        console.log("Bom apetite!");
    }
    else if ((comida == Pipoca) && (tempo == TempoP)) {
        console.log("Prato pronto");
        console.log("Bom apetite!");
    }
    else if ((comida == Pipoca) && (tempo >= TempoP * 3)) {
        console.log("Kabummm!!");
        console.log("Bom apetite!");
    }
    else if ((comida == Pipoca) && (tempo >= TempoP * 2 )) {
        console.log("Queimou miséra");
        console.log("Bom apetite!");
    }
    else if ((comida == Pipoca) && (tempo > TempoP)) {
        console.log("Quase queimou");
        console.log("Bom apetite!");
    }

    // Caso escolha o Macarrão e o tempo

    else if ((comida == Macarrao) && (tempo < TempoM)) {
        console.log("Tempo insuficiente");
        console.log("Bom apetite!");
    }
    else if ((comida == Macarrao) && (tempo == TempoM)) {
        console.log("Prato pronto");
        console.log("Bom apetite!");
    }
    else if ((comida == Macarrao) && (tempo >= TempoM * 3)) {
        console.log("Kabummm!!");
        console.log("Bom apetite!");
    }
    else if ((comida == Macarrao) && (tempo >= TempoM * 2 )) {
        console.log("Queimou miséra");
        console.log("Bom apetite!");
    }
    else if ((comida == Macarrao) && (tempo > TempoM)) {
        console.log("Quase queimou");
        console.log("Bom apetite!");
    }

    //Caso escolha Carne e seu tempo

    else if ((comida == Carne) && (tempo < TempoC)) {
        console.log("Tempo insuficiente");
        console.log("Bom apetite!");
    }
    else if ((comida == Carne) && (tempo == TempoC)) {
        console.log("Prato pronto");
        console.log("Bom apetite!");
    }
    else if ((comida == Carne) && (tempo >= TempoC * 3)) {
        console.log("Kabummm!!");
        console.log("Bom apetite!");
    }
    else if ((comida == Carne) && (tempo >= TempoC * 2 )) {
        console.log("Queimou miséra");
        console.log("Bom apetite!");
    }
    else if ((comida == Carne) && (tempo > TempoC)) {
        console.log("Quase queimou");
        console.log("Bom apetite!");
    }

    // Caso escolha Feijão e o seu tempo

    else if ((comida == Feijao) && (tempo < TempoF)) {
        console.log("Tempo insuficiente");
        console.log("Bom apetite!");
    }
    else if ((comida == Feijao) && (tempo == TempoF)) {
        console.log("Prato pronto");
        console.log("Bom apetite!");
    }
    else if ((comida == Feijao) && (tempo >= TempoF * 3)) {
        console.log("Kabummm!!");
        console.log("Bom apetite!");
    }
    else if ((comida == Feijao) && (tempo >= TempoF * 2 )) {
        console.log("Queimou miséra");
        console.log("Bom apetite!");
    }
    else if ((comida == Feijao) && (tempo > TempoF)) {
        console.log("Quase queimou");
        console.log("Bom apetite!");
    }

    // Caso escolha Brigadeiro e o seu tempo

    else if ((comida == Brigadeiro) && (tempo < TempoB)) {
        console.log("Tempo insuficiente");
        console.log("Bom apetite!");
    }
    else if ((comida == Brigadeiro) && (tempo == TempoB)) {
        console.log("Prato pronto");
        console.log("Bom apetite!");
    }
    else if ((comida == Brigadeiro) && (tempo >= TempoB * 3)) {
        console.log("Kabummm!!");
        console.log("Bom apetite!");
    }
    else if ((comida == Brigadeiro) && (tempo >= TempoB * 2 )) {
        console.log("Queimou miséra");
        console.log("Bom apetite!");
    }
    else if ((comida == Brigadeiro) && (tempo > TempoB)) {
        console.log("Quase queimou");
        console.log("Bom apetite!");
    }

    // Caso não escolha nenhum dos pratos cadrastrados
    
    else{
        console.log("Prato inexistente");
    }
}
Microondas("Briga", 24 );

