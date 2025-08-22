/*Use a estrutura para simular o histórico de páginas acessadas. Com
traverseReverse, mostre a navegação para trás (voltar página).
Extra: implementar "ir para página específica" usando find.*/

// Cada página é um nó da lista
class Pagina {
    constructor(nome) {
        this.nome = nome;          // Nome da página (URL)
        this.anterior = null;      // Página anterior
        this.proximo = null;       // Página seguinte
    }
}

// Histórico de navegação com lista duplamente ligada
class HistoricoNavegacao {
    constructor() {
        this.inicio = null;        // Primeira página acessada
        this.fim = null;           // Página mais recente
        this.atual = null;         // Onde o usuário está agora
    }

    // Acessa uma nova página
    acessarPagina(nome) {
        const nova = new Pagina(nome);

        if (!this.inicio) {
            // Primeira página do histórico
            this.inicio = this.fim = nova;
        } else {
            // Liga a nova página no final do histórico
            this.fim.proximo = nova;
            nova.anterior = this.fim;
            this.fim = nova;
        }

        // A página atual agora é a nova acessada
        this.atual = this.fim;
        console.log(`🌐 Página acessada: ${nome}`);
        this.mostrarPaginaAtual();
    }

    // Volta para a página anterior (como botão "voltar")
    voltar() {
        if (this.atual && this.atual.anterior) {
            this.atual = this.atual.anterior;
            console.log("🔙 Voltou para a página anterior.");
        } else {
            console.log("🚫 Já está na primeira página.");
        }
        this.mostrarPaginaAtual();
    }

    // Mostra a página onde o usuário está atualmente
    mostrarPaginaAtual() {
        if (this.atual) {
            console.log(`📄 Página atual: ${this.atual.nome}`);
        } else {
            console.log("📭 Nenhuma página aberta.");
        }
        console.log("-------------------------");
    }

    // Mostra o histórico de trás pra frente (como se fosse "voltar, voltar...")
    traverseReverse() {
        let atual = this.fim;
        let historico = "🔁 Histórico reverso:\n";

        while (atual) {
            historico += `${atual.nome} <- `;
            atual = atual.anterior;
        }

        historico += "início";
        console.log(historico);
        console.log("-------------------------");
    }

    // Vai direto para uma página específica (se existir)
    irParaPagina(nome) {
        let atual = this.inicio;

        while (atual) {
            if (atual.nome === nome) {
                this.atual = atual;
                console.log(`🚀 Pulou para a página: ${nome}`);
                this.mostrarPaginaAtual();
                return;
            }
            atual = atual.proximo;
        }

        console.log(`❓ Página "${nome}" não encontrada no histórico.`);
    }
}

// 🧪 Testando a simulação de histórico

const navegador = new HistoricoNavegacao();

navegador.acessarPagina("google.com");
navegador.acessarPagina("youtube.com");
navegador.acessarPagina("stackoverflow.com");
navegador.acessarPagina("wikipedia.org");

navegador.voltar();         // Volta para StackOverflow
navegador.voltar();         // Volta para YouTube

navegador.traverseReverse(); // Mostra histórico reverso

navegador.irParaPagina("google.com"); // Vai direto pra google
navegador.irParaPagina("facebook.com"); // Não existe