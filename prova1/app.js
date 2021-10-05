const novoAluno = require('./arquivo1');

let aluno1 = new novoAluno('João', 2, [7,7,7,7]);
let aluno2 = new novoAluno('Daniel', 4, [8,8,8,8]);
let aluno3 = new novoAluno('Lucas', 1, [6,6,6,6]);
let aluno4 = new novoAluno('Ana', 0, [9,9,9,9]);
let aluno5 = new novoAluno('Beatriz', 3, [10,10,10,10]);

const curso = {
    nomeCurso: "Programação",
    notaAprovacao: 10,
    faltasMaximas: 8,
    listaEstudantes: [aluno1, aluno2, aluno3, aluno4, aluno5],
    adicionarAluno(novoEstudante){
        this.listaEstudantes.push(novoEstudante);
    }
}
console.log("Passo 3 ----->",curso);

curso.adicionarAluno(aluno1);
console.log("Passo 4 ----->",curso.listaEstudantes);