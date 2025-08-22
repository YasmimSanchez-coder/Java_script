/*Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO). Desafio extra: inverter a ordem da pilha usando uma segunda pilha.*/

let pilha1 = ['A', 'B', 'C', 'D', 'E'];
let pilha2 = [];
while (pilha1.length > 0) {
    let carta = pilha1.pop();
    pilha2.push(carta);
    console.log(`Moveu a carta ${carta} para a pilha2`);
}
console.log("Pilha 1 (depois da transferência):", pilha1); // Deve estar vazia
console.log("Pilha 2 (pilha invertida):", pilha2); // Deve ser ['E', 'D', 'C', 'B', 'A']
