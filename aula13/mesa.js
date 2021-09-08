// Grupo 06 
// Participantes: Rafael Camargo, Marcos Pires, Matheus Silva, Julio Roncal, Tiago Guerreiro.
let exemplo = {
    numero: 1234567,
    tipo: "conta corrente",
    saldo: 570.90,
    titular: "João João João"
}

console.log(exemplo.saldo);

function novaPessoa(numero, tipo, saldo, titular){
    this.numero = numero
    this.tipo = tipo
    this.saldo = saldo
    this.titular = titular
}

let Abigael = new novaPessoa(5486273622, 'Conta Corrente', 27771, 'Abigael Natte');
let Ramon = new novaPessoa(1183971869, 'Conta Poupança', 8675, 'Ramon Connell');
let Jarret = new novaPessoa(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente');
let Ansel = new novaPessoa(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley');
let Jacki = new novaPessoa(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer');
let Jobi = new novaPessoa(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus');
let Thomasin = new novaPessoa(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour');
let Lonnie = new novaPessoa(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden');
let Alonso = new novaPessoa(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan');
let Bendite = new novaPessoa(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett');

let usuarios = [Abigael, Ramon, Jarret, Ansel, Jacki, Jobi, Thomasin, Lonnie, Alonso, Bendite];

let banco = {
    clientes: usuarios,
    consultarCliente: function(titular){
        for (let index = 0; index < this.clientes.length; index++) {
            if (titular == lalala) {
                
            } else {
                
            }
            
        }
    }
}
