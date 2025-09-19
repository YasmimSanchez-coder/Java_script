// Simulação de uma fila de atendimento com prioridade para clientes acima de 60 anos

let filaPrioritaria = [];
let filaNormal = [];

function entrarNaFila(nome, idade) {
    if (idade >= 60) {
        console.log(nome + " (idade " + idade + ") entrou na FILA PRIORITÁRIA.");
        filaPrioritaria.push({ nome, idade });
    } else {
        console.log(nome + " (idade " + idade + ") entrou na FILA NORMAL.");
        filaNormal.push({ nome, idade });
    }
}
entrarNaFila("Carlos", 45);     // Fila normal
entrarNaFila("Dona Maria", 70); // Fila prioritária
entrarNaFila("Fernanda", 34);   // Fila normal
entrarNaFila("Seu João", 65);   // Fila prioritária
entrarNaFila("Gabriel", 20);    // Fila normal
entrarNaFila("Dona Lúcia", 80); // Fila prioritária

console.log("\n--- Início do atendimento ---\n");
function atenderClientes() {
    let tempoTotal = 0;
    const tempoPorAtendimento = 2;
    while (filaPrioritaria.length > 0 || filaNormal.length > 0) {
        let cliente;

        if (filaPrioritaria.length > 0) {
            cliente = filaPrioritaria.shift();
            console.log("Atendendo (prioritário): " + cliente.nome + " (idade " + cliente.idade + ")");

        } else if (filaNormal.length > 0) {
            cliente = filaNormal.shift();
            console.log("Atendendo (normal): " + cliente.nome + " (idade " + cliente.idade + ")");
            console.log("Paciente atendido")
        }
        tempoTotal += tempoPorAtendimento;
        console.log(cliente.nome + " foi atendido após " + tempoTotal + " minutos.\n");
    }
    console.log("Todos os clientes foram atendidos!");
    console.log("Tempo total de atendimento: " + tempoTotal + " minutos.");
}
atenderClientes();
