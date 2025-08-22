/*Crianças entram na fila da montanha-russa. Cada criança leva x segundos para
brincar. Simule a entrada (enqueue) e atendimento (dequeue), imprimindo quem
está sendo atendido e o tempo restante.*/

let filaMontanhaRussa = [];
function entrarNaFila(nomeDaCrianca) {
    console.log(nomeDaCrianca + " entrou na fila da montanha-russa.");
    filaMontanhaRussa.push(nomeDaCrianca);
}
entrarNaFila("Alice");
entrarNaFila("Bruno");
entrarNaFila("Clara");
entrarNaFila("Daniel");
entrarNaFila("Eduarda");

console.log("\nTodas as crianças entraram na fila.");
console.log("Estado atual da fila:", filaMontanhaRussa);
console.log("\nA montanha-russa vai começar a funcionar!\n");
function atenderFila(tempoPorCrianca) {
    while (filaMontanhaRussa.length > 0) {
        let crianca = filaMontanhaRussa.shift();
        console.log("Agora é a vez de " + crianca + " brincar na montanha-russa!");
        for (let i = tempoPorCrianca; i > 0; i--) {
            console.log("Tempo restante para " + crianca + ": " + i + " segundos");
        }
        console.log(crianca + " terminou de brincar e saiu da fila.\n");
    }
    console.log("A fila está vazia. Todas as crianças brincaram na montanha-russa!");
}
let tempoPorCrianca = 3;
atenderFila(tempoPorCrianca);
