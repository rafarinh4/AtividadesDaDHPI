// Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
// Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e
// parar() – deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.
const andar = () => console.log('O carro começa a andar')
const parar = () => console.log('O carro para de andar')

const acaoCarro = mover => mover()

acaoCarro(andar)
acaoCarro(parar)


