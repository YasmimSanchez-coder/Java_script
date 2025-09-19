/*Cada nó é uma música de uma playlist. Insira músicas no fim, remova uma
específica e permita busca por nome.
Desafio extra: Adicionar opção de "tocar próxima" (avançar no ponteiro).*/

// Cada música é representada como um nó da lista
class Musica {
    constructor(nome) {
        this.nome = nome;     // O nome da música
        this.proxima = null;  // Aponta para a próxima música (como o "próximo da fila")
    }
}

// A playlist será uma lista ligada com controle de início e da música atual tocando
class Playlist {
    constructor() {
        this.inicio = null;           // Primeira música da lista
        this.atual = null;            // Música que está "tocando" no momento
    }

    // Inserir uma música no final da playlist
    adicionarMusica(nome) {
        const nova = new Musica(nome); // Criamos um novo nó/música

        if (!this.inicio) {
            // Se a playlist estiver vazia, essa será a primeira música
            this.inicio = nova;
            this.atual = nova;
        } else {
            // Se já tiver músicas, percorremos até o final
            let ponteiro = this.inicio;
            while (ponteiro.proxima) {
                ponteiro = ponteiro.proxima;
            }
            ponteiro.proxima = nova; // Adicionamos no final
        }

        console.log(`🎵 Adicionada: ${nome}`);
        this.mostrarPlaylist();
    }

    // Remover uma música pelo nome
    removerMusica(nome) {
        if (!this.inicio) {
            console.log("A playlist está vazia.");
            return;
        }

        if (this.inicio.nome === nome) {
            // Se a música a ser removida for a primeira
            this.inicio = this.inicio.proxima;
            if (this.atual.nome === nome) this.atual = this.inicio;
            console.log(`❌ Removida: ${nome}`);
            this.mostrarPlaylist();
            return;
        }

        let anterior = this.inicio;
        let atual = this.inicio.proxima;

        while (atual && atual.nome !== nome) {
            anterior = atual;
            atual = atual.proxima;
        }

        if (atual) {
            anterior.proxima = atual.proxima;
            if (this.atual.nome === nome) this.atual = anterior.proxima;
            console.log(`❌ Removida: ${nome}`);
        } else {
            console.log(`Música "${nome}" não encontrada.`);
        }

        this.mostrarPlaylist();
    }

    // Buscar uma música pelo nome
    buscar(nome) {
        let ponteiro = this.inicio;

        while (ponteiro) {
            if (ponteiro.nome === nome) {
                console.log(`🔍 Encontrada: ${nome}`);
                return;
            }
            ponteiro = ponteiro.proxima;
        }

        console.log(`Música "${nome}" não encontrada.`);
    }

    // Desafio Extra: Tocar a próxima música
    tocarProxima() {
        if (this.atual && this.atual.proxima) {
            this.atual = this.atual.proxima;
            console.log(`▶️ Tocando agora: ${this.atual.nome}`);
        } else if (this.atual) {
            console.log(`🚫 Última música da playlist. Reiniciando...`);
            this.atual = this.inicio;
            console.log(`▶️ Tocando agora: ${this.atual.nome}`);
        } else {
            console.log("Playlist vazia.");
        }
    }

    // Mostrar a playlist completa
    mostrarPlaylist() {
        let ponteiro = this.inicio;
        let lista = "🎶 Playlist: ";

        while (ponteiro) {
            if (ponteiro === this.atual) {
                lista += `[${ponteiro.nome}] -> `; // Indica a música atual
            } else {
                lista += `${ponteiro.nome} -> `;
            }
            ponteiro = ponteiro.proxima;
        }

        lista += "fim";
        console.log(lista);
        console.log("----------------------------");
    }
}

// 🧪 Testando o funcionamento da playlist

const minhaPlaylist = new Playlist();

minhaPlaylist.adicionarMusica("Imagine");
minhaPlaylist.adicionarMusica("Hey Jude");
minhaPlaylist.adicionarMusica("Bohemian Rhapsody");
minhaPlaylist.adicionarMusica("Let it Be");

minhaPlaylist.tocarProxima(); // Vai para "Hey Jude"
minhaPlaylist.tocarProxima(); // Vai para "Bohemian Rhapsody"

minhaPlaylist.buscar("Let it Be");    // Deve encontrar
minhaPlaylist.buscar("Yesterday");    // Não está na playlist

minhaPlaylist.removerMusica("Hey Jude"); // Remove do meio

minhaPlaylist.tocarProxima(); // Vai para "Let it Be"
minhaPlaylist.tocarProxima(); // Volta para o início ("Imagine")