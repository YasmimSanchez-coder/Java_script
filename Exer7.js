/*7.Cada nó representa um corredor. Simule a passagem do bastão com insertAtEnd
e remova um corredor machucado com removeByValue. Mostre a lista após cada
modificação.*/

class Node {
    constructor(nome) {
        this.nome = nome; // Nome do corredor
        this.next = null; // Referência para o próximo corredor (nó)
    }
}
class ListaLigada {
    constructor() {
        this.head = null; // Começo da lista, inicialmente vazio (nenhum corredor)
    }
    insertAtEnd(nome) {
        const novoNode = new Node(nome);
        if (!this.head) {
            this.head = novoNode;
        } else {
            let atual = this.head;
            while (atual.next) {
                atual = atual.next;
            }
            atual.next = novoNode;
        }
        console.log(`Corredor ${nome} entrou na corrida.`);
        this.mostrarLista(); // Mostramos a lista atualizada
    }
    removeByValue(nome) {
        if (!this.head) {
            console.log("Nenhum corredor na pista.");
            return;
        }

        // Caso especial: o corredor machucado está logo no início da lista
        if (this.head.nome === nome) {
            this.head = this.head.next; // Pulamos o primeiro nó
            console.log(`Corredor ${nome} se machucou e foi removido da corrida.`);
            this.mostrarLista();
            return;
        }

        // Procuramos o corredor machucado na lista
        let atual = this.head;
        while (atual.next && atual.next.nome !== nome) {
            atual = atual.next;
        }

        if (atual.next) {
            atual.next = atual.next.next;
            console.log(`Corredor ${nome} se machucou e foi removido da corrida.`);
        } else {
            console.log(`Corredor ${nome} não encontrado na corrida.`);
        }

        this.mostrarLista(); // Mostramos a lista atualizada
    }
    mostrarLista() {
        let atual = this.head;
        let listaStr = "🏃‍♂️ Corrida atual: ";
        while (atual) {
            listaStr += atual.nome + " -> ";
            atual = atual.next;
        }
        listaStr += "fim";
        console.log(listaStr + "\n");
    }
}
const corrida = new ListaLigada();

// Inserimos alguns corredores na corrida
corrida.insertAtEnd("Ana");
corrida.insertAtEnd("Bruno");
corrida.insertAtEnd("Carlos");
corrida.insertAtEnd("Diana");

// Um corredor se machuca!
corrida.removeByValue("Carlos");
corrida.insertAtEnd("Eduardo");
corrida.removeByValue("Ana");
corrida.insertAtEnd("Fernanda");
