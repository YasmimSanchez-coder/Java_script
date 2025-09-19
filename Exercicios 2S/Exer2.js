/* Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez.*/

let pilhaDesfazer = []; // Ações feitas
let pilhaRefazer = [];  // Ações desfeitas
let texto = "";

function digitar(letra) {
    pilhaDesfazer.push(letra);     // Colocamos a letra na pilha de ações feitas
    pilhaRefazer = [];             // Quando digitamos algo novo, limpamos a pilha de refazer
    atualizarTexto();              // Atualiza o texto atual
    console.log(`Digitado: ${letra}`);
    mostrarEstado();
}

function desfazer() {
    if (pilhaDesfazer.length === 0) {
        console.log("Nada para desfazer.");
        return;
    }

    let letraRemovida = pilhaDesfazer.pop(); // Tira a última letra digitada
    pilhaRefazer.push(letraRemovida);        // Coloca essa letra na pilha de refazer
    atualizarTexto();                        // Atualiza o texto atual
    console.log(`Desfeito: ${letraRemovida}`);
    mostrarEstado();
}

function refazer() {
    if (pilhaRefazer.length === 0) {
        console.log("Nada para refazer.");
        return;
    }

    let letraRefeita = pilhaRefazer.pop();   // Pega a última letra desfeita
    pilhaDesfazer.push(letraRefeita);        // Volta ela pra pilha de ações feitas
    atualizarTexto();                        // Atualiza o texto atual
    console.log(`Refeito: ${letraRefeita}`);
    mostrarEstado();
}

function atualizarTexto() {
    texto = pilhaDesfazer.join(""); // Junta todas as letras da pilha
}

function mostrarEstado() {
    console.log(`Texto atual: "${texto}"`);
    console.log("Pilha Desfazer:", [...pilhaDesfazer]);
    console.log("Pilha Refazer:", [...pilhaRefazer]);
    console.log("-----------------------------");
}

digitar("A");
digitar("B");
digitar("C");
desfazer();  // Remove C
desfazer();  // Remove B
refazer();   // Volta B
