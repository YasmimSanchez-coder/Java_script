/*Cada vagão é um nó. Simule adicionar vagões à frente e atrás. Mostre a composição
do trem indo e voltando com traverse e traverseReverse.*/

// Cada vagão é um nó da lista duplamente ligada
class Vagao {
    constructor(nome) {
        this.nome = nome;       // Nome do vagão
        this.anterior = null;   // Aponta para o vagão anterior
        this.proximo = null;    // Aponta para o vagão seguinte
    }
}

// A composição do trem (lista duplamente ligada)
class Trem {
    constructor() {
        this.inicio = null;   // Cabeça do trem (primeiro vagão)
        this.fim = null;      // Cauda do trem (último vagão)
    }

    // Adiciona um novo vagão NA FRENTE (início)
    adicionarNaFrente(nome) {
        const novo = new Vagao(nome);

        if (!this.inicio) {
            // Se o trem está vazio, esse vagão será o único
            this.inicio = this.fim = novo;
        } else {
            // Liga o novo vagão na frente do atual primeiro
            novo.proximo = this.inicio;
            this.inicio.anterior = novo;
            this.inicio = novo;
        }

        console.log(`🚋 Adicionado na frente: ${nome}`);
        this.traverse();
    }

    // Adiciona um novo vagão ATRÁS (fim)
    adicionarAtras(nome) {
        const novo = new Vagao(nome);

        if (!this.fim) {
            // Se o trem está vazio, esse vagão será o único
            this.inicio = this.fim = novo;
        } else {
            // Liga o novo vagão ao final
            novo.anterior = this.fim;
            this.fim.proximo = novo;
            this.fim = novo;
        }

        console.log(`🚋 Adicionado atrás: ${nome}`);
        this.traverse();
    }

    // Mostra o trem indo (da frente para trás)
    traverse() {
        let atual = this.inicio;
        let visual = "🚆 Indo: ";

        while (atual) {
            visual += `${atual.nome} -> `;
            atual = atual.proximo;
        }

        visual += "fim";
        console.log(visual);
    }

    // Mostra o trem voltando (de trás pra frente)
    traverseReverse() {
        let atual = this.fim;
        let visual = "🔄 Voltando: ";

        while (atual) {
            visual += `${atual.nome} <- `;
            atual = atual.anterior;
        }

        visual += "início";
        console.log(visual);
        console.log("----------------------------");
    }
}

// 🧪 Testando a composição do trem

const trem = new Trem();

trem.adicionarNaFrente("Vagão A");     // A na frente
trem.adicionarAtras("Vagão B");        // B atrás
trem.adicionarAtras("Vagão C");        // C atrás
trem.adicionarNaFrente("Locomotiva");  // Locomotiva na frente

// Mostrar o trem indo e voltando
trem.traverse();         // 🚆 Locomotiva -> Vagão A -> Vagão B -> Vagão C -> fim
trem.traverseReverse();  // 🔄 Vagão C <- Vagão B <- Vagão A <- Locomotiva <- início