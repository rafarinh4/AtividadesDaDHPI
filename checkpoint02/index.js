console.log('----- Pergunta 1 -----')
function soma(a=1, b=3) {
    return a+b;
}
console.log(soma())
console.log(soma(3))
console.log(soma(1,2))

console.log('----- Pergunta 3 -----')
let numeros= [10, 8, 7, 99, 0, 1, 6];
console.log(numeros.sort(function(a,b){ return b-a;}));

console.log('----- Pergunta 4 -----')
var z =0
for (var index = 20; index < 50; index+=10) {
    z+=index;
}
console.log(z)

console.log('----- Pergunta 13 -----')
let x =5;
let y = x++ + ++x;
console.log(y)
x = 3;
y = x*(x+1)*x++;
x =5;
y =3;
y*= x + 1
console.log(x)
console.log(y)

console.log('----- Pergunta 15 -----')
for (let i = 0; i < 50; i+=10) {
    console.log(i)
}
console.log(i)


