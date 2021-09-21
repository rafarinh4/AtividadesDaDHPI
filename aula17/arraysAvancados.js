let pares = [2,4,6];
let impares = pares.map(function(num){
    return num + 1;
});
console.log(impares);

let nomes = ["Rafa", "José", "Maria", "Antonio", "Maria"];
let filtro = nomes.filter(function(nome){
    return nome == "Maria"
});
console.log(filtro);

let numeros = [1,2,3,4,5,6];
let troca = numeros.reduce(function(acumulador, numbers){
    return acumulador + ' - ' + numbers;
});
console.log(troca);

let animais = ["Cachorro", "Gato", "Porco", "Akira", "Hikari-chan", "Filipe"];
let paraCada = animais.forEach(function(animal){
    console.log("O nome do animal é: " + animal);
});
