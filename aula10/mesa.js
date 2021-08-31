// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações.
// Veremos se eles se comportam como esperamos ou se ocorrem resultados
// inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

// A. Acessar elementos específicos de um array.
let variavel1 = "teste";
console.log(variavel1[1])

// B. Modificar cada um dos elementos de um array e imprimi-los no console.


// C. Adicionar elementos a um array.


// D. Extrair elementos de um array.


// E. Comparar elementos de um array com os elementos de outro.


// Array Invertido
// Neste exercício, você terá que criar uma função que retorne um array com seus
// elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o
// modifique e inverta a ordem de seus elementos.
// 1. Crie a função imprimirInverso que pega um Array como um argumento e
// imprime cada elemento em ordem reversa no console (você não precisa
// inverter o Array).
// 2. Crie a função inverter que recebe um Array como argumento e retorna um novo
// invertido.
function matrizInvertido(array) {
    saida1 = array.pop()
    saida2 = array.pop()
    saida3 = array.pop()
    saida4 = array.pop()
    
    array.push(saida1)
    array.push(saida2)
    array.push(saida3)
    array.push(saida4)

    console.log(array)
}

matrizInvertido([1, 2, 3, 4])

