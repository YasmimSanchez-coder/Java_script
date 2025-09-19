const MeuArray = require("./MeuArray.js");

//Exemplo de uso
let minha_variavel = new MeuArray();

minha_variavel.adicionar(10);
console.table(minha_variavel.items);

minha_variavel.adicionar(20);
console.table(minha_variavel.items);

minha_variavel.adicionar(30);
console.table(minha_variavel.items);

console.log(minha_variavel.obterElemento(1)); //Saída: 20
console.log(minha_variavel.tamanhoArray()); //Saída: 3

//Saída:30 (remove o último elemento)
console.log(minha_variavel.remover());

console.log(minha_variavel.tamanhoArray()); //Saída: 2
