/*Clientes fazem pedidos num drive-thru. Crie uma fila que registra os pedidos por
nome e imprima a sequência de atendimento.
Extra: calcule tempo total de espera se cada atendimento dura 2 minutos.*/

let filaDriveThru = [];
function fazerPedido(nomeDoCliente) {
    console.log(nomeDoCliente + " fez um pedido no drive-thru.");
    filaDriveThru.push(nomeDoCliente);
}
fazerPedido("Carlos");
fazerPedido("Fernanda");
fazerPedido("Gabriel");
fazerPedido("Lúcia");
fazerPedido("Eduardo");

console.log("\nTodos os clientes fizeram seus pedidos.");
console.log("Estado atual da fila:", filaDriveThru);
console.log("\nO atendimento vai começar!\n");
function atenderPedidos(duracaoPorPedido) {
    let tempoTotalEspera = 0;
    while (filaDriveThru.length > 0) {
        let cliente = filaDriveThru.shift();
        console.log("Atendendo: " + cliente);
        tempoTotalEspera += duracaoPorPedido;
        console.log(cliente + " levou " + tempoTotalEspera + " minutos até ser atendido.");
    }
    console.log("\nO tempo total de espera foi de " + tempoTotalEspera + " minutos.");
}
let tempoPorPedido = 2;
atenderPedidos(tempoPorPedido);
