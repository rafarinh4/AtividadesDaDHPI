let aluno = {
    nome: "Rafael Camargo",
    qtdeFaltas: 3,
    notas: [8,8,8,8],
    calculaMedia: function(){
        return this.notas.reduce((a,b) => a+b) / this.notas.length;
    },
    faltas: function(){
        return this.qtdeFaltas++;
    }
}
function novoAluno(nome,qtdeFaltas,notas){
    this.nome = nome
    this.qtdeFaltas = qtdeFaltas
    this.notas = notas
}
module.exports = novoAluno;